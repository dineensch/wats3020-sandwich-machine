/* JavaScript for WATS 3020 Sandwich Machine */

// Sandwich order

// Prompt the user for what kind of bread they would like.

let breadOrder = prompt('What kind of bread would you like? (white, wheat, or sourdough)');

// Prompt the user for what kind of meat(s) they would like.

let meatOrder = prompt('What kind of meat would you like? (Separate multiple meat choices with a comma.)');

// Prompt the user for what kind of cheese they would like.

let cheeseOrder = prompt('What kind of cheese would you like?');

// Prompt the user for what kind of toppings they would like.

let toppingOrder = prompt('What kind of toppings would you like? (Separate multiple toppings with a comma.)');

// Prompt the user for what kind of condiments they would like.

let condimentOrder = prompt('What kind of condiments would you like? (Separate multiple condiments with a comma.)');

// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    cheese: 0.5, // Cheese costs $0.50
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25, // Each condiment costs $0.25
};

// Converting order information from Strings to Arrays.

let meatArray = meatOrder.split(',');
let toppingArray = toppingOrder.split(',');
let condimentArray = condimentOrder.split(',');

// Calculate cost for meat, toppings, and condiments.

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

// subtotal
let subtotal = prices.sandwich + meatCost + prices.cheese + toppingCost + condimentCost;

// tax owed using the waStateTaxRate.
let waStateTaxRate = 0.101;
let orderTax = subtotal * waStateTaxRate;

// total price
let totalPrice = subtotal + orderTax;

// tip suggestion
let tip15 = totalPrice * 0.15;
let tip20 = totalPrice * 0.20;
let tip25 = totalPrice * 0.25;


// Order confirmation and bill

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadOrder}</p>
    <p>Meat: ${meatOrder}</p>
    <p>Cheese: ${cheeseOrder}</p>
    <p>Toppings: ${toppingOrder}</p>
    <p>Condiments: ${condimentOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Cheese: $${prices.cheese.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
    <p class="text-right>---------------------</p>
    <p class="text-right">Suggested tip: </p>
    <p class="text-right">15%= $${tip15.toFixed(2)} 20%= $${tip20.toFixed(2)} 25%= $${tip25.toFixed(2)}</p>

    
    
    
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
