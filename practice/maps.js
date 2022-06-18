/* Maps! */

let myMap = function () {
    this.collection = [];
    this.count = 0;
    this.size = function () {
        return this.count;
    }
    this.set = function (key, value) {
        this.collection[key] = value;
        this.count++;
    }
    this.has = function (key) {
        return (key in this.collection);
    }
    this.get = function (key) {
        return (key in this.collection) ? this.collection[key] : null;
    }
    this.delete = function (key) {
        if (key in this.collection) {
            delete this.collection[key];
            this.count--;
        }
    }
    this.values = function () {
        let result = new Array();
        for (let key of Object.keys(this.collection)) {
            result.push(this.collection[key])
        }
        return (result.length > 0) ? result : null;
    }
    this.clear = function () {
        this.colleciton = {};
        this.count = 0;
    }
}

let m = new myMap();
m.set('arms', 2);
m.set('fingers', 10);
m.set('eyes', 2);
m.set('belly', 1);
console.log(m.get('fingers'));
console.log(m.size());
console.log(m.values());
// console.log(m.delete());
// console.log(m.collection);
// console.log(m.size);


/*   Es6 Objects and Maps   */
// the object is a prototype with it's own keys which can clash with yours
// object keys can be only strings or symbols
// but map keys can be anything, including NaN


let map2 = new Map();
map2.has('hands');
map2.entries();   // returns all the keys
map2.values();    //returns all the values

let keyObj = {};
keyFunc = function () { };

map2.set('hello', 'string value');
map2.set(keyObj, 'obj value');
map2.set(keyFunc, 'func value');
map2.set(NaN, 'NaN value');

console.log(map2.size);
console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));
