// returns number of elements in the array
var array = [1, 2, 'Hello', 'Ashwani', 'Garg'];
console.log(array.length);

//Javascript Array.pop()
//.......................................................................
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

//Javascript Array.push()
//...........................................................................
var animals = ['pigs', 'goats', 'sheep'];
console.log(animals.push('cows'));
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.push('chickens');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]