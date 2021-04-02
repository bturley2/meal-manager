package model

import (
	"bufio"
	"log"
	"os"
)

type Model struct {
	filepath string
	// data json
}

func (m Model) setFilepath(fpath string) error {
	// TODO: try to access given fpath, if not a JSON or not accessible then return error
	m.filepath = fpath
	return nil
}

// func (m Model) Reload(fpath string) error {
// }

// creates a new active database based on the given filepath
func NewModel(fpath string) *Model {
	m := Model{fpath}
	err := m.init()
	if err != nil {
		log.Fatal(err)
	}
	return &m
}

func (m Model) init() error {
	// if db file doesn't exist, then create it
	file, err := os.Open(m.filepath)
	if err != nil {
		file, err = os.Create(m.filepath)
		if err != nil {
			return err
		}
	}

	writer := bufio.NewWriter(file)
	_, err = writer.WriteString("test\n")
	if err != nil {
		return err
	}
	return nil
}
