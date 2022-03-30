function User(name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.say = function() {
	console.log(this.name, this.age);
};

const u1 = new User('hayk', 21);
const u2 = new User('kim', 22);
console.log(u1);
console.log(u2);

// u1.toString() [Object, Object]

