package main

import (
	"database/sql"
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
)

func main() {
	initDB()

	r := gin.Default()
	r.GET("/ping", ping)

	r.Run() // listen and serve on 0.0.0.0:8080
}

func ping(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "pong",
	})
}

func initDB() {
	time.Sleep(3 * time.Second)
	connStr := "user=user1 dbname=meal-manager password=usbw host=localhost sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(db)
}
