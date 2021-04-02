package main

import (
	"fmt"

	"github.com/bturley2/meal-manager/model"
)

func main() {
	fmt.Println("Initializing...")
	model.NewModel("./db.JSON")

	// check := "1"
	// var v view.View
	// // determine which UI to use
	// if check == "1" {
	// 	v = ui.UI{"test"}
	// } else {
	// 	v = cli.CLI{"test"}
	// }
	// v.Run()
}
