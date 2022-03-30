
// Spread operator for array

const arr = [1,2,3];
const x = Math.max(...arr); // array-i het chi ashxatum
console.log(x);


const arr1 = [1,2,3];
const arr2 = [7,8,3];
const y = Math.max(4, ...arr1, 5,  ...arr2, 1); // array-i het chi ashxatum
console.log(y);


const arr3 = [1,2,3];
const arr4 = [4,5,6];
const arr5 = [...arr3, ...arr4, 41];
console.log(arr5);
