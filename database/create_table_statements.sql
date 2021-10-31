CREATE TYPE mealType AS ENUM ("chicken", "veggie", "beef", "turkey", "pork", "fish");
CREATE TYPE mealRating AS ENUM (0, 1, 2, 3, 4, 5);

CREATE TABLE IF NOT EXISTS Users (
  username varchar(20) PRIMARY KEY,
  email varchar(320) NOT NULL UNIQUE,
  password varchar(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS Meals (
    id SERIAL,
    meal_type mealType,
    url varchar(2000),
    rating mealRating,
    notes varchar(2000),
    image_path varchar(500)
    PRIMARY KEY(id),
);

CREATE TABLE IF NOT EXISTS userMeals (
    username varchar(20),
    meal_id SERIAL,
    PRIMARY KEY(username, meal_id),
    FOREIGN KEY(meal_id) REFERENCES Meals(id),
    FOREIGN KEY(username) REFERENCES Users(username)
);
