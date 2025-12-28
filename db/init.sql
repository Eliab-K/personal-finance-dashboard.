CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    type VARCHAR(10),
    category VARCHAR(50),
    amount NUMERIC,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO transactions(type, category, amount) VALUES
('income','Salary',5000),
('expense','Food',50);

