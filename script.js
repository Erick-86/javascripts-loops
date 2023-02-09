const jonas = ["Jonas", "Erick", 2013 - 1998, ["Otto", "Mike", "Emma"]];
console.log(jonas[1]);

//LOOPING THROUGH THE ARRAYS
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);
  // console.log(jonas[i], typeof jonas[i])
}

//CREATING A NEW ARRAY WHICH CONTAINS THE TYPE OF ELEMENTS IN THE JONAS ARRAY
const type = [];
for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas arrays
  console.log(typeof jonas[i]);

  //Filling types arrays
  type[i] = typeof jonas[i];
}

console.log(type);

//CHALLENGE
//calculage the ages for these years
const years = [1991, 2007, 1998];

//A variable for an empty empty array to store the ages
const ages = [];

//the loop
for (let i = 0; i < years.length; i++) {
  //calculating the ages using the years
  ages.push(2037 - years[i]);
  //the push keyword is used to push the results to the empty age array
}
console.log(ages);

//LOOPING BACKWARDS
// INITIALIZATION (COUNTER): i = jonas.length (length of the Jonas array is 4) - 1 (which is 3)
//CONDITION: i should be greater or equal to 0 (3 - 0).The loop should continue running until it gets to 0
//i-- (meaning the jonas length will be decreased by 1 starting at (jonas.length - 1 which is 3))
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

//LOOP IN LOOPS
const exercises = ["pushups", "weight lifting", "jogging", "squatting"];

console.log(exercises.length);

for (let i = 0; i < exercises.length; i++) {
  console.log(`----Day ${i + 1}`);

  for (let exe = 0; exe <= 0; exe++) {
    console.log(`${exercises[i]}`);
  }
}

//CODING CHALLENGE
//
// Let's improve Steven's tip calculator even more, this time using loops!
//
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK �

//SOLUTION
//1 and 2
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//3

for (let i = 0; i < bills.length; i++) {
  //tip function
  const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
  };
  //tips
  tips.push(calcTip(bills[i])); 
  //total (bill + tips)
  totals.push(tips[i] + bills[i]);
}
console.log(tips);
console.log(totals);  

//BONUS
//4

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    //or sum += arr[i]
  }

  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
