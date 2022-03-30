let arr1 = [8,2,3,4,5];
const res1 = arr1.map(el=> el*el);      
const res2 = arr1.filter(el=> el%2);  
const res3 = arr1.find(el => el === 5 );        // 5-undefined
const res4 = arr1.findIndex( el => el === 1 );  // 0
//arr1.fill(7, 1, 3);   // arr1 poxum e, lcnum e 7-erov nshvac hatvacum
const res5 = arr1.some(el => el == 7);          // true
const res6 = arr1.every( el=> el == 3 );        // amboxj array-um tenc e te voch