CREATE DATABASE bamazon;
USE bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (item_ID, product_name, department_name, price, stock_quantity)
VALUES  (101,'Shampoo', 'Cosmetics', 5.75, 500),
		(111,'Conditioner', 'Cosmetics', 6.25, 627),
		(121,'12 Gal Trash Bags', 'Grocery', 5.99, 300),
		(131,'Paper Towels', 'Grocery', 4.25, 400),
		(141,'Granny Smith Apples', 'Produce', 0.35, 800),
		(151,'Banana', 'Produce', 0.20, 10000),
		(161,'Orange Juice', 'Grocery', 4.45, 267),
		(171,'Organic Milk', 'Grocery', 4.50, 200),
		(181,'Diapers', 'Children', 2.75, 476),
		(191,'Toiler Paper', 'Grocery', 12.99, 575),
		(201,'Baby Wipes', 'Children', 1.50, 423),
		(211,'Yoga Mat', 'Sports', 12.75, 150),
		(221,'5lb Dumb bell', 'Sports', 7.99, 89),
		

