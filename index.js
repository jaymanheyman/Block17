const coffeeMenu = require('./coffee_data');

// Print an array of all the drinks on the menu.
const allDrinks = coffeeMenu.map(drink => drink.name);
console.log("All drinks on the menu:", allDrinks);

// Print an array of drinks that cost 5 and under.
const cheapDrinks = [];

for (let i = 0; i < coffeeMenu.length; i++) {
  if (coffeeMenu[i].price <= 5) {
    cheapDrinks.push(coffeeMenu[i]);
  }
}

console.log("Drinks that cost 5 and under:", cheapDrinks);

// Print an array of drinks that are priced at an even number.
const evenPricedDrinks = [];

for (let i = 0; i < coffeeMenu.length; i++) {
  if (coffeeMenu[i].price % 2 === 0) {
    evenPricedDrinks.push(coffeeMenu[i]);
  }
}

console.log("Drinks that are priced at an even number:", evenPricedDrinks);


// Print the total if you were to order one of every drink.
const total = coffeeMenu.reduce((accumulator, drink) => accumulator + drink.price, 0);
console.log("Total if you ordered one of every drink:", total);

// Print an array with all the drinks that are seasonal.
const seasonalDrinks = [];

for (let i = 0; i < coffeeMenu.length; i++) {
  if (coffeeMenu[i].seasonal) {
    seasonalDrinks.push(coffeeMenu[i]);
  }
}

console.log("Seasonal drinks:", seasonalDrinks);

const seasonalDrinksWithBeans = seasonalDrinks.map(drink => {
    return drink.name + (drink.seasonal ? " with imported beans" : "");
  });
  console.log("Seasonal drinks with imported beans:", seasonalDrinksWithBeans);
  
