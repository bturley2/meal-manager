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
	MealType string `json:"MealType" binding:"required"`
	MealUrl  string `json:"MealUrl" binding:"required"`
	Rating   int    `json:"Rating"`
	Notes    string `json:"Notes"`
}

const (
	dbReconnectTime = 1 * time.Second
)

func main() {
	db := initDB()
	if db == nil {
		log.Fatal("Failed to connect to the database.")
	}

	r := gin.Default()
	r.GET("/ping", ping)
	r.POST("/signup", signup)
	r.POST("/login", login)

	r.POST("/newmeal", newMealHandler)

	// listen and serve on the specified port
	r.Run(":" + os.Getenv("SERVER_LISTEN_PORT"))
}

// Adds a new meal to the database
// This handler expects all fields to be found as JSON elements
// in the request body
func newMealHandler(c *gin.Context) {
	// parse request body into
	var newMeal MealInfo
	if err := c.ShouldBindJSON(&newMeal); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println(newMeal)

	// create new entry in database

	c.JSON(http.StatusOK, gin.H{
		"MealType": newMeal.MealType,
		"Url":      newMeal.MealUrl,
		"Rating":   newMeal.Rating,
		"Notes":    newMeal.Notes,
	})
}

func ping(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "pong",
	})
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
	connStr := fmt.Sprintf("user=%v dbname=%v password=%v host=localhost",
		os.Getenv("POSTGRES_USER"),
		os.Getenv("POSTGRES_DATABASE"),
		os.Getenv("POSTGRES_PASSWORD"))
	for {
		db, err := sql.Open("postgres", connStr)
		if err != nil {
			fmt.Println("Failed to connect to the database with error: ", err)
			fmt.Println("Will attempt to reconnect shortly.")
			time.Sleep(dbReconnectTime)
		} else {
			fmt.Println("Successfully connected to the database.")
			return db
		}
	}
}
