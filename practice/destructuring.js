/* Destructuring */

// Assign variables from objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
// var x = voxel.x;  // old way
var y = voxel.y;
var z = voxel.z;

var { x, y, z } = voxel; // new way
console.log(x);
var { x: a, y: b, z: c } = voxel; // reassign twice
console.log(b);

// Assign variables from nested objects
const nest = {
    start: { x: 5, y: 6 },
    end: { x: 6, y: -9 }
}
const { start: { x: startX, y: startY } } = nest;
console.log(startX);

// Assign variables from Arrays
const [q, , , r] = [1, 2, 3, 4, 5];
console.log(q, r);

// Rest Operator to Reassign Array Elements
const [f, h, ...rest] = [1, 2, 3, 4, 5];
console.log(f, h);
console.log(rest);

// Pass an Object as a Function's Parameters 
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;      // old way
    // do something with these variables
}

const profileUpdat = ({ name, age, nationality, location }) => {   // new way, don't need to declare all if you don't use them
    // do something with these variables
}