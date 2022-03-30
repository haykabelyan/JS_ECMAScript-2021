
// Array Destructuring


const arr1 = [1,2,3,1,5,6];
//const [a,b,c] = arr1;
//console.log(a,b,c);
const [ , b, , d] = arr1;
console.log(b, d);

////////////////////////////////////////

const arr2 = [ [1,2], [3,4] ];
const [ [a2,b2], [c2, d2] ] = arr2; 
console.log(a2, b2,c2, d2);

////////////////////////////////////////


const names = ['hayk', 'kim', undefined];
const [n1, n2, n3='guest'] = names;
console.log(n1,n2,n3);

////////////////////////////////////////


const names3 = ['hayk', 'kim', 'anna'];
const [e1, ...eee] = names3;
console.log(eee);




