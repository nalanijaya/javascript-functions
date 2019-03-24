// returns number of elements in the array
var array = [1, 2, 'Hello', 'Ashwani', 'Garg'];
//console.log(array.length);

//Javascript Array.pop()
//.......................................................................
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
//console.log(plants.pop());
// expected output: "tomato"
//console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
//console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

//Javascript Array.push()
//...........................................................................
var animals = ['pigs', 'goats', 'sheep'];
//console.log(animals.push('cows'));
// expected output: 4
//console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.push('chickens');
//console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

// Javascript Array.shift()
// array.shift() - Removes the first element from an array and returns that element.
var array1 = [1, 2, 3];
var firstElement = array1.shift();
//console.log(array1);
//console.log(firstElement);

//Array.sort()
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
//console.log(months);
var array1 = [1, 30, 4, 21, 100, 20000];
array1.sort();
//console.log(array1);

//Javascript Array.unshift()
var array1 = [1, 2, 3];

//console.log(array1.unshift(4, 5));
// expected output: 5

//console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

//Javascript array.map()
var arr1 = [1, 2, 4, 6, 10];
const map1 = arr1.map(x => x * 2);
//console.log(map1);

//Javascript array.indexOf()
var array2 = ['Ashwani', 'Amar', 'John', 'Danial', 'Richard'];
console.log(array2.indexOf('Ashwani'));
// expected output: 0

console.log(array2.indexOf('John'))
// expected output: 2 

console.log(array2.indexOf('India'))
// expected output: -1

//Javascript array.filter()
var words = ['spray', 'limit', 'elite', 'true', 'America', 'India', 'Entertainment'];
const result = words.filter(word => word.length > 6);
console.log(result);

// expected output :-  ['America','Entertainment']

//Javascript forEach()
var array1 = ['a', 'b', 'c'];

array1.forEach(function (element) {
    console.log(element);
});

//Javascript some()
var array = [1, 2, 3, 4, 5];

var even = function (element) {
    // checks whether an element is even
    return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true