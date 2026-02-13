/** Exercise 01 - Coins **/

// Add your function here
function calculateChange(amount) {
  //typeof checks the type of "amount" (number, string, undefined)
  //Number.isNaN(amount) checks if its NaN because typeof NaN == "number" why is javascript so weird
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    return "Error: Invaild input";
  }
  if (amount > 100) {
    return "Error: the number is too large";
  }
  if (amount < 0) {
    return "Error: the number is too negative";
  }

  let cents = Math.round(amount * 100);

  //get dollars
  const dollars = Math.floor(cents / 100);
  cents %= 100;

  //get quarters
  const quarters = Math.floor(cents / 25);
  cents %= 25;

  //get dimes
  const dimes = Math.floor(cents / 10);
  cents %= 10;

  //get nickels
  const nickels = Math.floor(cents / 5);
  cents %= 5;

  //get pennies
  const pennies = cents;

  //toFixed(2) for 2 decimal places
  return `$${amount.toFixed(2)} ==> ${dollars} dollars, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`;
}

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here

console.log(calculateChange(-10.11));
console.log(calculateChange("67.67"));
console.log(calculateChange(undefined));
