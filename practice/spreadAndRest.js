/* Spread Operator / Rest Operator */

// Add the elements of an existing array into a new array
let certsToAdd = ['Algorithms and Data Structures', 'Front End Libraries'];
let certifications = ['Responsive Web Design', ...certsToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);

// Pass elements of an array as arguments to a function
function addThreeNumbers(x, y, z) {
    console.log(x + y + z);
}
let args = [0, 1, 2]; //this will ignore any other elements past the three elements
addThreeNumbers(...args);

// Copy arrays
let arr = [1, 2, 3];
let arr2 = [...arr]; //if you didn't spread, it would push to arr and arr2
arr2.push(4);
console.log(arr);
console.log(arr2);

// Concatenate arrays
let arr3 = [0, 1, 2];
let arr4 = [3, 4, 5];
// arr3.concat(arr4); // For some reason this doesn't work in my IDE
console.log(arr3);
arr3 = [...arr3, ...arr4];
console.log(arr3);

// REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {     //this takes the 'rest' of the parameters and turns it into an array
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}
let arr5 = multiply(2, 1, 2, 3, 4);
console.log(arr5);