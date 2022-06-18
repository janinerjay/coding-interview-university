/* Copying Arrays */

let original = [true, true, undefined, false, null];

// Slice
let copy1 = original.slice(0);
console.log(copy1);

// Spread Operator
let copy2 = [...original];
console.log(copy2);

// DEEP copying
let deepArray = [["freeCodeCamp"]];
// let shallowCopy = deepArray.slice(0); //this is copying the pointer to the original array
// shallowCopy[0].push("is great");
// console.log(deepArray);
// console.log(shallowCopy);

let deepCopy = JSON.parse(JSON.stringify(deepArray));
deepCopy[0].push("is great");
console.log(deepArray);
console.log(deepCopy);