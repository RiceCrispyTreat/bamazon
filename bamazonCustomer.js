let inquirer = require('inquirer');
let mysql = require('mysql');
let Table = require('cli-table');

// let connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'bamazon',
//     password: 'bootcamp4321',
// 	database: 'bamazon'
// });

let connection = mysql.createConnection(require('./db-config.json'));

connection.connect(function(err){
    if (err)throw err;
    console.log("Connected as id" + connection.threadId);
});

let productDisplay = function(){
	let query = "Select * FROM products";
	connection.query(query, function(err, res){
        
        
        if(err) throw err;
		let tableDisplay = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,25,25,10,14]
		});
        
        for(let i = 0; i < res.length; i++){
			tableDisplay.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(tableDisplay.toString());
        
        
        purchasePrompt();
	});
}

function purchasePrompt(){
    
    
    inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter Item ID you would like to purchase.",
		filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"How many items would you like to purchase?",
		filter:Number
	},

 ]).then(function(answers){
 	let quantityNeeded = answers.Quantity;
 	let IDrequested = answers.ID;
     
     purchaseOrder(IDrequested, quantityNeeded);
 });
};

function purchaseOrder(ID, neededAmt){
    connection.query('Select * from products where item_id = ' + ID, function(err,res){
		if(err){console.log(err)};
		if(neededAmt <= res[0].stock_quantity){
			let totalCost = res[0].price * neededAmt;
			console.log("Good news your order is in stock!");
			console.log("Your total cost for " + neededAmt + " " +res[0].product_name + " is " + totalCost + " Thank you!");

			connection.query("update products set stock_quantity = stock_quantity - " + neededAmt + " where item_id = " + ID);
        } 
        
        else{
			console.log("Sorry we don't have enough " + res[0].product_name + "to complete your order.");
		};
		productDisplay();
	});
};

productDisplay();  



        
      





