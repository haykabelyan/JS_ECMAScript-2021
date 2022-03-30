// Destructuring Objects

function foo1({
	name= 'Guest',
	age=0,
	admin= false
}) {
	console.log(name, age);
}

foo1({}); 

/////////////////////////////////


function foo2({
	name= 'Guest',
	age=0,
	admin= false
}={}) {
	console.log(name, age);
}

foo2(); 


////////////////////////////////

const user = {
	name: 'Hayk',
	age: 21,
	admin: false
}

const { name, ...user2 } = user;

console.log(user2);










