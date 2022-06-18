const myArray = [1, 2, 3, 4, 5, 1, 3, 1, 2, 4];
const mySet = new Set(myArray);
const uniqueArray = [...mySet];

console.log(myArray); //[1, 2, 3, 4, 5, 1, 3, 1, 2, 4]
console.log(mySet); //Set(5) { 1, 2, 3, 4, 5 }
console.log(uniqueArray); //[ 1, 2, 3, 4, 5 ]
/*--------------------------------------*/
mySet.add(6);
console.log(mySet); // Set(6) { 1, 2, 3, 4, 5, 6 }

mySet.add('6');
console.log(mySet); // Set(7) { 1, 2, 3, 4, 5, 6, '6' }

mySet.add({ name: 'Sue' });
console.log(mySet); // Set(8) { 1, 2, 3, 4, 5, 6, '6', { name: 'Sue' } }

mySet.add([1, 2, 3]);
console.log(mySet); // Set(9) { 1, 2, 3, 4, 5, 6, '6', { name: 'Sue' }, [ 1, 2, 3 ] }
/*--------------------------------------*/
const myArr = [1, 2, 3, 4, 5];
const mySe = new Set(myArray);

mySe.delete(3);
console.log(mySe); // Set(4) { 1, 2, 4, 5 }

mySe.clear();
console.log(mySe); // Set(0) {}

console.log(mySe.has(5)); // true
console.log(mySe.has(6)); // false
console.log(mySe.size); // 4
/*--------------------------------------*/
console.log(myArr[3]); // 4
console.log(mySe[3]); // undefined
/*--------------------------------------*/
const myMap = new Map([['name', 'John'], ['surname', 'Doe']]);
console.log(myMap); // Map(2) { 'name' => 'John', 'surname' => 'Doe' }
const myObject = {};
const a = {};
const b = {};

myObject[a] = 'a';
console.log(myObject); // { '[object Object]': 'a' }
myObject[b] = 'b';
console.log(myObject); // { '[object Object]': 'b' }

const myMa = new Map([[a, 'a'], [b, 'b']]);
console.log(myMa); //Map(2) { { } => 'a', {} => 'b' }
/*--------------------------------------*/
const myMapp = new Map([[{}, 'a'], [1, 'b']]);
myMapp.set({}, 'c');
console.log(myMapp); // Map(3) { {} => 'a', 1 => 'b', {} => 'c' }
console.log(myMapp.has(1)); // true
console.log(myMapp.has(3)); // false
console.log(myMapp.has('b')); // false
console.log(myMapp.size); // 3
myMapp.delete(1);
console.log(myMapp); // Map(2) { {} => 'a', {} => 'c' }
myMapp.clear(1);
console.log(myMapp); // Map(0) {}