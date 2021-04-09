package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("starting server...")

	fileServer := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fileServer))

	// default to index.html
	http.HandleFunc("/", defaultHandler)

	// start the server listening on localhost port 8080
	fmt.Println("Server listening on port 80")
	http.ListenAndServe(":80", nil)
}

func defaultHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("default handler invoked")
	http.ServeFile(w, r, "dynamic/index.html")
}
