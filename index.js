#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1, //base currency
    GBP: 0.80,
    INR: 83.55,
    PKR: 278.04,
    EUR: 0.93
};
let currencyToAndFrom = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ['USD', 'GBP', 'INR', 'PKR', 'EUR']
    }, {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ['USD', 'GBP', 'INR', 'PKR', 'EUR']
    }, {
        name: "Amount",
        message: "Enter amount to convert",
        type: "number"
    }
]);
let amount = currencyToAndFrom.Amount;
let fromCurrency = amount / currency[currencyToAndFrom.from];
let toCurrency = fromCurrency * currency[currencyToAndFrom.to];
console.log(currencyToAndFrom.from, " = ", amount);
console.log(currencyToAndFrom.to, " = ", toCurrency);
