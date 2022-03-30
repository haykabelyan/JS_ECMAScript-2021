
// Class properties

class User {
	count = 0;
	static x = 2;

	inc = ()=>{
		this.count++;
		console.log(this.count);
		User.x++;
	}
}

const u1 = new User();
u1.inc();
console.log(u1.count);
const u2 = new User();
console.log(User.x);