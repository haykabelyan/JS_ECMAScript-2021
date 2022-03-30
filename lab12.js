
// Spread operator for objects



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

const res = {...defaults, ...opts, eee: 'EEE'};
console.log(res);
