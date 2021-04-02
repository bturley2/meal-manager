package model

import (
	"fmt"
	"os"
)

type meal struct {
	id          int
	title       string
	ingredients []string
	weblink     string
}

// creates a new active database based on the given filepath
func Init(fpath string) (*DB, error) {
	// ensure fpath is to a JSON file
	if len(fpath) < 6 || fpath[len(fpath)-5:] != ".JSON" {
		return nil, fmt.Errorf("'%s' is not a JSON file", fpath)
	}
	// if db file doesn't exist, then create it
	file, err := os.Open(fpath)
	if err != nil {
		file, err = os.Create(fpath)
		if err != nil {
			return nil, err
		}
	}
	defer file.Close()

	m := DB{}
	m.filepath = fpath
	return &m, nil
}

// func (m *Model) WriteToFile() {
// 	defer m.file.Close()
// 	m.file.WriteString("Test!")
// 	writer := bufio.NewWriter(m.file)
// 	x, err := writer.WriteString("test\n")
// 	fmt.Println(x, err)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	io.WriteString(writer, "hello?")
// }
