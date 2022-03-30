
// Destructuring Objects

const person = {
	name: {
		first: 'Hayk',
		last: 'Abelyan'
	},
	age: 21
};

//const name = person.name;
//const age = person.age;

const {name: {first, last}, age} = person;
console.log(last, age);












