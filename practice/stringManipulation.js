/* String Manipulation */

// Use length 256 int array to represent char counts
// track char in a string
// Ex. find if two strings are anagrams (same char in different order)
// other way would be to create a hash table and then compare second word
// or insert char count of first string into array, then search

// Using two pointers in a string
// Ex. reversing a string
// Ex. reverse an array
// swap values at those pointers

// String Math & convert from char to ints
// how does JS treat converting char into ASCII values
// one way is subtracting char
// i.e. What's the index of char in alphabet
// take char and - 'A'
// convert digit char into actual char

// String Comparison, Alignment, Matching
// pointer into each string and compare them
// longest common substring problem
// edit distance problem
// Think Recursion!

// String Algorithms
// Knuth-Morris-Pratt, Boyer Moore, Rabin Karp

// Avoid this mistake: Time Complexity
// functionally it's much more like an array than a primitive data type
// Ex. compare 'abc' and 'abc'
// we have to go through and compare all of the characters- O(n) time
// Ex. using strings as keys in a hash table
// to hash the string, we need to go through the full length of the string O(n)

let str = 'abdeks';
str.charAt(1) = 'z';
console.log(str[1]);