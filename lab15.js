
// Classes

class User {

	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	say(){
		console.log(this.name, this.age);
	}

}

class User1 extends User {
	constructor(name, age, admin){
		super(name, age);
		super.say();
		this.admin = admin;
	}
}

const u1 = new User1('Hayk', 21, false);
u1.say();

