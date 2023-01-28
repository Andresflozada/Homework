// 1. Concat():

var arr1 = ["a", "b", "c"];
var arr2 = ["d", "e", "f"];
var arr3 = arr1.concat(arr2);

console.log(arr3); // Output: ["a", "b", "c", "d", "e", "f"]

// 2. Every():

var numbers = [1, 2, 3, 4, 5];

var everyResult = numbers.every(function(value, index, array) {
  return value < 10;
});

console.log(everyResult); // Output: true

// 3. Fill():

var numbers = [1, 2, 3, 4, 5];

var fillResult = numbers.fill(1, 2, 4);

console.log(fillResult); // Output: [1, 2, 1, 1, 5]

// 4. Filter():

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filterResult = numbers.filter(function(value, index, array) {
  return value > 5;
});

console.log(filterResult); // Output: [6, 7, 8, 9, 10]

// 5. Find():

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var findResult = numbers.find(function(value, index, array) {
  return value > 5;
});

console.log(findResult); // Output: 6

// 6. FindIndex():

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var findIndexResult = numbers.findIndex(function(value, index, array) {
  return value > 5;
});

console.log(findIndexResult); // Output: 5

// 7. ForEach():

var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(value, index, array) {
  console.log(value);
});

// Output: 
// 1
// 2
// 3
// 4
// 5

// 8. IndexOf():

var numbers = [1, 2, 3, 4, 5];

var indexOfResult = numbers.indexOf(3);

console.log(indexOfResult); // Output: 2

// 9. Join():

var words = ["Hello", "World"];

var joinResult = words.join(" ");

console.log(joinResult); // Output: "Hello World"

// 10. LastIndexOf():

var numbers = [1, 2, 3, 1, 2, 3, 4, 5];

var lastIndexOfResult = numbers.lastIndexOf(3);

console.log(lastIndexOfResult); // Output: 5

// 11. Map():

var numbers = [1, 2, 3, 4, 5];

var mapResult = numbers.map(function(value, index, array) {
  return value * 2;
});

console.log(mapResult); // Output: [2, 4, 6, 8, 10]

// 12. Pop():

var numbers = [1, 2, 3, 4, 5];

var popResult = numbers.pop();

console.log(popResult); // Output: 5

// 13. Push():

var numbers = [1, 2, 3, 4, 5];

var pushResult = numbers.push(6);

console.log(pushResult); // Output: 6

// 14. Reduce():

var numbers = [1, 2, 3, 4, 5];

var reduceResult = numbers.reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
});

console.log(reduceResult); // Output: 15

// 15. ReduceRight():

var numbers = [1, 2, 3, 4, 5];

var reduceRightResult = numbers.reduceRight(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
});

console.log(reduceRightResult); // Output: 15

// 16. reverse(): 
let array = [1, 2, 3, 4, 5];
console.log(array.reverse()); // [5, 4, 3, 2, 1]

// 17. shift(): 
array = [1, 2, 3, 4, 5];
console.log("Metodo shift");
console.log(array.shift()); // 1
console.log(array); // [2, 3, 4, 5]

// 18. slice(): 
array = [1, 2, 3, 4, 5];
console.log(array.slice(2, 4)); // [3, 4]

// 19. some(): 
array = [1, 2, 3, 4, 5];
let isGreaterThanFour = (element) => element > 4;
console.log(array.some(isGreaterThanFour)); // true

// 20. sort(): 
array = [3, 5, 1, 4, 2];
console.log(array.sort()); // [1, 2, 3, 4, 5]

// 21. splice(): 
array = [1, 2, 3, 4, 5];
console.log(array.splice(2, 2)); // [3, 4]
console.log(array); // [1, 2, 5]

// 22. toString(): 
array = [1, 2, 3, 4, 5];
console.log(array.toString()); // "1,2,3,4,5"

// 23. unshift(): 
array = [1, 2, 3, 4, 5];
console.log(array.unshift(6)); // 6
console.log(array); // [6, 1, 2, 3, 4, 5]

// 24. valueOf(): 
array = [1, 2, 3, 4, 5];
console.log(array.valueOf()); // [1, 2, 3, 4, 5]