
// Prototypes

/*
const dog = {
	name: 'dog',
	voice: 'woof',
	say: function () {
		console.log(this.name, this.voice);
	}
};

const cat = {
	name: 'cat',
	voice: 'meow',
	say: function () {
		console.log(this.name, this.voice);
	}
};

*/

const animal = {
	say: function (){
		console.log(this.name, this.voice);
	}
};

const dog = Object.create(animal);
dog.name = 'dog';
dog.voice = 'woof';

const cat = Object.create(animal);
cat.name = 'cat';
cat.voice = 'meow';

dog.say();
cat.say();
console.log(dog);
console.log(cat);