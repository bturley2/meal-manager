CREATE TYPE mealType AS ENUM ('chicken', 'veggie', 'beef', 'turkey', 'pork', 'fish', 'other');

CREATE TABLE IF NOT EXISTS Users (
  username varchar(20),
  email varchar(320) NOT NULL UNIQUE,
  password varchar(30) NOT NULL,
  PRIMARY KEY(username)
);

CREATE TABLE IF NOT EXISTS Meals (
    id SERIAL,
    title varchar(50) NOT NULL,
    meal_type mealType NOT NULL,
    url varchar(2000),
    rating INTEGER,
    notes varchar(2000),
    PRIMARY KEY(id),
    CHECK (rating>0 AND rating<=5)
);

CREATE TABLE IF NOT EXISTS UserMeals (
    username varchar(20),
    meal_id SERIAL,
    PRIMARY KEY(username, meal_id),
    FOREIGN KEY(meal_id) REFERENCES Meals(id),
    FOREIGN KEY(username) REFERENCES Users(username)
);
