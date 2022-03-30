// Arrow functions


function square1(x){
	return x*x;
}

const  square2 = (x) => x*x;

const  square3 = x => x*x;

console.log(square3(2));

////////////////////////////


const arr = ['1','2','3'];
const res = arr.map( (el)=>parseInt(el) )
				.filter( (num) => num%2 );
console.log(res);

///////////////////////////////

// Arrow function nery pahum en
// this-i chen korcnum


users = {
	name: 'Hayk',
	age: 21,	
	logInfo: function(){
			function inner(){
				console.log(this.name);
			}
			inner();
	} 
};

users.logInfo();


/////////////////////////////////////////////

users = {
	name: 'Hayk',
	age: 21,	
	logInfo: function(){
			const inner = () => {
				console.log(this.name);
			}
			inner();
	} 
};

users.logInfo();


// Arraow functiony chuni
// Person.prototype-y chuni

