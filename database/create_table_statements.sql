CREATE TYPE mealType AS ENUM ('chicken', 'veggie', 'beef', 'turkey', 'pork', 'fish', 'other');

CREATE TABLE IF NOT EXISTS Users (
  username varchar(20) PRIMARY KEY,
  email varchar(320) NOT NULL UNIQUE,
  password varchar(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS Meals (
    id SERIAL,
    meal_type mealType NOT NULL,
    url varchar(2000),
    rating INTEGER,
    notes varchar(2000),
    image_path varchar(500),
    PRIMARY KEY(id),
    CHECK (rating>0 AND rating<=5)
);

CREATE TABLE IF NOT EXISTS userMeals (
    username varchar(20),
    meal_id SERIAL,
    PRIMARY KEY(username, meal_id),
    FOREIGN KEY(meal_id) REFERENCES Meals(id),
    FOREIGN KEY(username) REFERENCES Users(username)
);
