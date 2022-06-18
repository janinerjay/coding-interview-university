// Create Hash Map
let m = new Map();
console.log(m); // Map(0) {}

// Add Values to Hash Map
m.set(10, 100);
m.set(8, true);
m.set('apple', 45);
m.set(10.2, true);
console.log(m); // Map(4) { 10 => 100, 8 => true, 'apple' => 45, 10.2 => true }

// Access the Values in the Hash Map
console.log(m.get(10)); // 100
console.log(m.get(8)); // true
console.log(m.get(900)); // undefined

// Find the Size of the Hash Map
console.log(m.size); // 4

// Collisions
m.set(10, 'apple');
console.log(m.size); // 4
console.log(m.get(10)); // apple, it updates the value, not adding it
console.log(m); // Map(4) { 10 => 'apple', 8 => true, 'apple' => 45, 10.2 => true }

// Access all of the elements
for (t of m) {
    console.log(t);
}
// [ 10, 'apple' ]
// [ 8, true ]
// [ 'apple', 45 ]
// [ 10.2, true ] 
for (t of m) {
    console.log(t[0]);
}
// 10
// 8
// apple
// 10.2

for (t of m.keys()) {
    console.log(t);
}
// 10
// 8
// apple
// 10.2

for (t of m.values()) {
    console.log(t);
}
// apple
// true
// 45
// true

// Remove a certain key
m.delete('apple');
console.log(m); // Map(3) { 10 => 'apple', 8 => true, 10.2 => true }

// Remove everything
m.clear();
console.log(m); // Map(0) {}
