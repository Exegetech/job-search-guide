# Deposit Paycheck

Slides: http://slides.com/jimmyfarrell/deposit-paycheck

This is a 2-part question.

### Part 1
Given an array of objects with account types and amounts, as well as a paycheck amount, distribute the paycheck amount into the accounts and return a string of the information. The remainder should be deposited into last account. Never deposit more than what is in the paycheck.

```
var accounts = [
    {accountType: 'savings', amount: 300},
    {accountType: 'checking', amount: 100},
    {accountType: 'retirement', amount: null}
];

depositPaycheck(accounts, 700);
// --> 'Deposited 300 into savings
//      Deposited 100 into checking
//      Deposited 300 into retirement'
````


### Part 2
Alter the function so that it now takes a third parameter, splitType, that will be either 'amount' or 'percentage'. If 'amount', the function should behave exactly as before. If 'percentage', the amounts in the accounts array will be percentages from 0 - 1. Assume the percentages will never sum to greater than 1.

```
var accounts = [
    {accountType: 'savings', amount: 0.6},
    {accountType: 'checking', amount: 0.2},
    {accountType: 'retirement', amount: null}
];

depositPaycheck(accounts, 1000, 'percentage');
// --> 'Deposited 600 into savings
//      Deposited 200 into checking
//      Deposited 200 into retirement'
````
