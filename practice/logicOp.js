/* Logical Operators && Short Circuit Evaluation */

// AND: &&    OR: ||
// if (num > 5 && num < 10) {
//         console.log('Unicycle!');
// } 

if (4 > 5 && 5 > 6) {
    console.log('hi');
} else {
    console.log('no');
}

let test = true;
let isTrue = () => {
    console.log('test is true');
}
let isFalse = () => {
    console.log('test is false');
}
if (test) {
    isTrue();
}

(test && isTrue());

test = false;
if (!test) {
    isFalse();
}
(test || isFalse());

function theSameOldFoo(name) {
    name = name || 'BAR';
    console.log('my best friend is ' + name);
}
theSameOldFoo();
theSameOldFoo('babe');