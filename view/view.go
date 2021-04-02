package view

// declare interface which describes all functions available to a 'view' object
type View interface {
	EnterAMeal()
	GetRecommendedMeal()
	Run()
	SearchByCategory()
}
