
// Rest Parameter

max(1,2);
max(1,2,3);
function max(x) {}

////////////////////////

max2();
max2(1,2,3);
function max2(...numbers){
	console.log(numbers);
}

/////////////////////////


max3();
max3(1,2,3);
function max3(a, b, ...numbers){
	console.log(numbers);
}

/////////////////////////

// // Error
// function max4(a, ...numbers, b,){
// 	console.log(numbers);
// }

// // Error
// function max5(...numbers, ...numbers2){
// 	console.log(numbers);
// }
