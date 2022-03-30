
// Array Destructuring

const user1 = {
	hayk: 'developer',
	kim: 'super',
	anna: 'developer'
}

const res1 = Object.entries(user1)
				.filter( (arr)=>arr[1]==='developer' );
console.log(res1);	


const res2 = Object.entries(user1)
				.filter( ([ , value])=>value==='developer' );
console.log(res2);	

const res3 = Object.entries(user1)
				.filter( ([ , value])=>value==='developer' )
				.map( ([key])=>key );
console.log(res3);	


/////////////////////////////////////////////////////////


const person = {
	name: 'hayk',
	age: 21,
	coordinates:{
		start:[10, 15],
		end:[7, 9]
	}
};

const { coordinates:{ start:[startX, startY], end:[endX, endY] } } = person;
console.log(startX, startY, endX, endY);

