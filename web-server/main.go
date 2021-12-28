package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type MealInfo struct {
	Id       int    `json:"id"`
	Title    string `json:"title" binding:"required"`
	MealType string `json:"mealType" binding:"required"`
	MealUrl  string `json:"mealUrl" binding:"required"`
	Rating   int    `json:"rating"`
	Notes    string `json:"notes"`
}

const (
	dbReconnectTime = 1 * time.Second
)

var (
	db *sql.DB
)

func main() {
	db = initDB()
	if db == nil {
		log.Fatal("Failed to connect to the database.")
	}

	r := gin.Default()
	r.POST("/signup", signup)
	r.POST("/login", login)

	r.POST("/newmeal", newMealHandler)
	r.GET("/viewmeals", mealViewerHandler)

	// listen and serve on the specified port
	r.Run(":" + os.Getenv("SERVER_LISTEN_PORT"))
}

// Lists all meals
// Filters the returned list if a given filter was provided
func mealViewerHandler(c *gin.Context) {
	queryStatement := "SELECT * from Meals;"

	fmt.Println(queryStatement)

	rows, err := db.Query(queryStatement)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()

	meals := []MealInfo{}
	for rows.Next() {
		var id, rating sql.NullInt32
		var title, mealType, mealUrl, notes sql.NullString
		// read row info into provided values
		if err := rows.Scan(&id, &title, &mealType, &mealUrl, &rating, &notes); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		// build and append this meal to response
		var m MealInfo
		if !id.Valid {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Retrieved an invalid meal."})
			return
		}
		m.Id = int(id.Int32)
		if title.Valid {
			m.Title = title.String
		}
		if mealType.Valid {
			m.MealType = mealType.String
		}
		if mealUrl.Valid {
			m.MealUrl = mealUrl.String
		}
		if rating.Valid {
			m.Rating = int(rating.Int32)
		}
		if notes.Valid {
			m.Notes = notes.String
		}

		meals = append(meals, m)
	}
	c.JSON(http.StatusOK, gin.H{"meals": meals})
}

// Adds a new meal to the database
// This handler expects all fields to be found as JSON elements in the request body
func newMealHandler(c *gin.Context) {
	// parse request body into the `newMeal` struct
	var newMeal MealInfo
	if err := c.ShouldBindJSON(&newMeal); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// create new entry in database
	_, err := db.Exec("INSERT INTO Meals (title, meal_type, url, rating, notes) VALUES ($1, $2, $3, $4, $5);",
		newMeal.Title,
		newMeal.MealType,
		newMeal.MealUrl,
		newMeal.Rating,
		newMeal.Notes)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{})
}

func signup(c *gin.Context) {
	c.JSON(200, gin.H{
		"response": "signed up!",
	})
}

func login(c *gin.Context) {
	c.JSON(200, gin.H{
		"response": "logged in!",
	})
}

// opens a connection to the database using the user info from `.env`
func initDB() *sql.DB {
	var psqlDb *sql.DB
	var err error
	connStr := fmt.Sprintf("user=%v dbname=%v password=%v host=database port=%v",
		os.Getenv("POSTGRES_USER"),
		os.Getenv("POSTGRES_DATABASE"),
		os.Getenv("POSTGRES_PASSWORD"),
		os.Getenv("DATABASE_PORT"))
	// continuously try to open the database
	for {
		psqlDb, err = sql.Open("postgres", connStr)
		if err != nil {
			fmt.Println("Failed to open to the database with error: ", err.Error())
			fmt.Println("Will attempt to re-open shortly.")
			time.Sleep(dbReconnectTime)
		} else {
			fmt.Println("Database successfully launched.")
			break
		}
	}
	// wait for the database to respond
	for {
		fmt.Println("Attempting to reach to the database.")
		err = psqlDb.Ping()

		if err != nil {
			fmt.Println("Failed to connect to the database with error: ", err.Error())
			fmt.Println("Will attempt to re-connect shortly.")
			time.Sleep(dbReconnectTime)
		} else {
			fmt.Println("Successfully connected to the database.")
			return psqlDb
		}
	}
}
