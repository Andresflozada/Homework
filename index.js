const array1 = [5, 12, 8, 130, 44];

console.log(`El array es ${array1}`);

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"

index = -1;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"

const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2).concat(array1);

array3.fill("holas", 5, 10)

array3[56] = "mundo"

console.log(array3);