// 1. concat():

var arr1 = ["a", "b", "c"];
var arr2 = ["d", "e", "f"];
var arr3 = arr1.concat(arr2);

console.log(arr3); // Output: ["a", "b", "c", "d", "e", "f"]

// 2. every():

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

var words = ["Hola", "Andres"];

var joinResult = words.join(" ");

console.log(joinResult); // Output: "Hola Andres"

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
let array = [1, 3, 2, 4, 5, 6, 9];
console.log(array.reverse()); // [9, 6, 5, 4, 2, 3, 1]

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

// 25. at():
array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.at(6)); // 
console.log(array); // [1, 2, 3, 4, 5, 6, 7]

// 26. constructor():
const cars = ['Audi', 'Mazda'];
console.log(cars.length); // 2
console.log(cars[1]);     // "Mazda"

// 27. copyWithin():
const array10 = ['a', 'b', 'c', 'd', 'e'];
console.log(array10.copyWithin(0, 3, 4));
console.log(array10.copyWithin(1, 3));
//output: Array ["d", "b", "c", "d", "e"]
//output: Array ["d", "d", "e", "d", "e"]

// 28. entries():
const array3 = ['a', 'b', 'c'];
const iterator1 = array3.entries();
console.log(iterator1.next().value);
//output: Array [0, "a"]
console.log(iterator1.next().value);
//output: Array [1, "b"]

// 29. flat(): 
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

// 30. flatMap(): 

const arr1 = [1, 2, [3], [4, 5], 6, []];
const flattened = arr1.flatMap(num => num);
console.log(flattened);
// Expected output: Array [1, 2, 3, 4, 5, 6]

// 31. forEach():

const array5 = ['a', 'b', 'c','d', 'e', 'f','hey' ];
array5.forEach(element => console.log(element));

// output: "a"
// output: "b"
// output: "c"
// output: "d"
// output: "e"
// output: "f"
// output: "hey"

// 32. reduceRight():

const array1 = [[0, 1], [2, 3], [4, 5]];
const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result);
//output: Array [4, 5, 2, 3, 0, 1]





