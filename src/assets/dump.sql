CREATE TABLE IF NOT EXISTS resultado(
	id INTEGER PRIMARY KEY,
	title VARCHAR(20),
	dateResult DATE,
	calories DECIMAL(9,2),
	carbs DECIMAL(9,2),
	protein DECIMAL(9,2),
	fat DECIMAL(9,2)
);