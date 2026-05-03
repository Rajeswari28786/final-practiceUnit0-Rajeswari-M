// Values, datatypes, and operations
// ---------------------------------------------
//  PSEUDOCODE: 
//  PROMPT user to enter name
//  STORE input in userName
//  IF userName is empty THEN
//  DISPLAY "Please enter a username"
//  ENDIF
//  REPEAT
//  PROMPT user to enter password
//  STORE input in password
//  UNTIL password equals "launchcode"
//  DISPLAY "Access granted"
// ---------------------------------------------
const readline = require('readline-sync');
let userName = readline.question("Enter your name:"); // Prompt the user
if(!userName)                                        // If condition to check for username
{
console.log("Please enter a username");
} 
const prompt = require("prompt-sync")(); 
let password;
do                                         // looping using do..while loop
{
password = prompt("Enter your password:");// Prompt the password
if(password.length < 8)                  // IF condition to check password length
{
console.log("Password must be atleast 8 characters");
continue;
}
} while(password!=="launchcode");  //do..while condition to check for password is launchcode
console.log("Access granted");

// Stringing characters together
// ---------------------------------------------
// PSEUDOCODE:
// COMBINE text values to create a welcome message
// DISPLAY it to the user.
// ---------------------------------------------
let welcomeMessage = "Hello, " + userName + "! Let's plan your meals.";// String concatenation
console.log(welcomeMessage); //Using values for output message

// Values, datatypes, and operations
// ---------------------------------------------
// PSEUDOCODE: 
// CREATE variables to store user info like
// budget, and dietary preference.
// ---------------------------------------------
let weeklyBudget = readline.questionInt("Enter your weekly budget:");//Use input function 
let isVegetarian = true;  // boolean value (datatype)


// Building arrays
// ---------------------------------------------
// PSEUDOCODE:
// CREATE lists (arrays) to store meals and their
// corresponding ingredients.
// ---------------------------------------------
let meals = ["Pasta", "Salad", "Stir Fry"];// array of meal names
let ingredients = [                        // nested array of ingredients
["noodles", "sauce"],
["lettuce", "tomato"],
["vegetables", "soy sauce"]
];

// Control structures and logic
// ---------------------------------------------
// PSEUDOCODE:
// CREATE a function that checks dietary preferences.
// IF user is vegetarian THEN
// RETURN vegetarian
// ELSE RETURN the original meal
// ENDIF
// ---------------------------------------------
function suggestMeal(meal) {
if (isVegetarian && meal === "Stir Fry") // conditional logic if..else
{ 
return meal + " (vegetarian option)"; // string combination
} else 
{
return meal; // default return
}
}
// Using arrays
// ---------------------------------------------
// PSEUDOCODE:
// CREATE an empty list for the weekly plan.
//FOR  LOOP through each meal in the meals list.
// APPLY suggestion logic and store results.
// ---------------------------------------------
let weeklyPlan = []; // empty array creation
for (let i = 0; i < meals.length; i++) // iterate through meals using for loop
{
weeklyPlan.push(suggestMeal(meals[i])); //push method to add an element into the array
}

// Working with loops
// ---------------------------------------------
// PSEUDOCODE:
// FOR LOOP through the weekly plan and display each meal.
// ---------------------------------------------
console.log("Your Weekly Meal Plan:");
for (let i = 0; i < weeklyPlan.length; i++) // iterate through weeklyPlan using for loop
{ 
console.log("- " + weeklyPlan[i]); // access array element
}

//Nested Loops and Using Arrays
// ---------------------------------------------
// PSEUDOCODE:
// CREATE an empty shopping list.
// NESTED FOR LOOP to go through each ingredient list.
// ADD each ingredient into one combined list.
// ---------------------------------------------
let shoppingList = []; // empty array
for (let i = 0; i < ingredients.length; i++) // outer loop
{ 
for (let j = 0; j < ingredients[i].length; j++) // inner loop
{ 
 shoppingList.push(ingredients[i][j]); //add each item using push method
}
}

// Working with loops
// ---------------------------------------------
// PSEUDOCODE:
// FOR LOOP through shopping list and display each item.
// ---------------------------------------------
console.log("Shopping List:");
for (let item of shoppingList) { // loop through array for ..of to display each item
console.log("- " + item);
}

// Working with loops and Building arrays
// Organization and time management
// ---------------------------------------------
// PSEUDOCODE:
// ASSIGN meals to specific days to simulate planning.
// FOR LOOP through days and match them with meals.
// ---------------------------------------------
let days = ["Monday", "Tuesday", "Wednesday"]; // array of days
for (let i = 0; i < days.length; i++)         // loop through days
{ 
console.log(days[i] + ": " + weeklyPlan[i]); // match day with meal
}

// Growth mindset
// ---------------------------------------------
// PSEUDOCODE:
// DISPLAY a motivational message encouraging users
// to keep improving their planning habits.
// ---------------------------------------------
console.log("Eat Healthy, Stay Healthy!");// motivational output
