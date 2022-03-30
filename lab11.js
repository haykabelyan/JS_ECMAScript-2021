
// Objects

const x1 = 10;
const y1 = 20;

//const point1 = {x1: x1,y1: y1};
const point1 = {
	x1,
	y1,
	foo(){}
};

/////////////////////////////////////////

const prefix = ['_in_'];
const user = {
	[prefix+'name']: 'hayk',
	[prefix+'age']: 21
};

console.log(user);


/////////////////////////////////////////

const defaults = {
	host: 'loclahost',
	dbname: 'cost',
	user: 'admin',
	arr: ['a', 'b']
};

const opts = {
	user: 'hayk@mail.ru',
	pass:'123456'
};

//Object.assign(defaults, opts);
//console.log(defaults);

const res = Object.assign({}, defaults, opts);
console.log(res);

const res2 = Object.assign({}, defaults);
defaults.arr.push('c');
console.log(res2);

