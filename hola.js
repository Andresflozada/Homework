const array46 = ['a', 'b', 'c'];
const iterator11 = array46.values();

for (const value of iterator11) {
  console.log(value);
}


const array76 = [1, 2, 3];

console.log(array76.unshift(4, 5,8,9));
// Expected output: 5

console.log(array76);
// Expected output: Array [4, 5, 1, 2, 3]