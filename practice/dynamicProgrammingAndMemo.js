/* Dynamic Programming */

// function decodeVariations(s) {
//     let n = s.length;
//     let dp = new Array(n);
//     dp[n] = 1;

//     for (let i = n - 1; i > 0; i--) {
//         if (s[i] == '0') dp[i] = 0;
//         else if (s[i] == '1') dp[i] = dp[i + 1] + dp[i + 2];
//         else if (s[i] == '2') {
//             dp[i] = dp[i + 1]
//             if (i + 1 < s.length && s[i + 1] <= 6) {
//                 dp[i] += dp[i + 2]
//             }
//         }
//         else {
//             dp[i] = dp[i + 1]
//         }
//     }
//     return dp[0];
// }

// function decodeVariations(s) {
//     let pre = 0, curr = 27;
//     let first = 1, second = 1;

//     // for (let i = s.length - 1; i >= 0; i--) {
//     for (let i = 0; i < s.length; i++) {
//         console.log(s[i]);
//         let d = s[i];
//         if (d == 0) curr = 0;
//         else {
//             curr = first;
//             if (d * 10 + pre < 27) curr += second;
//         }
//         pre = d;
//         first = curr;
//         second = first;
//     }
//     return curr;
// }
// console.log(decodeVariations('1262'));

// function fibonacci(n) {
//     if (n == 0) { return 0 }
//     let a = 0;
//     let b = 1;
//     for (let i = 2; i < n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return a + b;
// }

function fib(n, memo = {}) {
    if (n in memo) { return memo[n] }
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
// console.log(fib(50));

function tribonacci(n) {
    if (n < 2) return n;
    let a = 0, b = 1, c = 1, d;
    while (n-- > 2) {
        d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return c;
}

function gridTraveler(m, n, memo = {}) {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m < 1 || n < 1) return 0          //these are base cases
    if (m == 1 && n == 1) return 1
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}

// console.log(gridTraveler(1, 1)); //1
// console.log(gridTraveler(2, 3)); //3
// console.log(gridTraveler(3, 3)); //6
// console.log(gridTraveler(18, 18)); //2333606220


function canSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum == 0) return true
    if (targetSum < 0) return false


    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) == true) {
            memo[targetSum] = true;
            return true
        }
    }
    memo[targetSum] = false;
    return false
}

// console.log(canSum(7, [5, 3, 4, 7])); //true
// console.log(canSum(7, [2, 4])); //false
// console.log(canSum(300, [7, 14])); //false

function howSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum == 0) return []
    if (targetSum < 0) return null


    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult != null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null
}

// console.log(howSum(0, [1, 2, 3])); // []
// console.log(howSum(7, [2, 4])); // 
// console.log(howSum(7, [5, 3, 4, 7])); // []
// console.log(howSum(300, [7, 14])); //null

function bestSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum == 0) return []
    if (targetSum < 0) return null

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination != null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination == null ||
                combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination
}


// console.log(bestSum(7, [5, 3, 4, 7])); // [7]
// console.log(bestSum(8, [2, 3, 5])); // [3,5]
// console.log(bestSum(8, [1, 4, 5])); // [4, 4]
// console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]

function canConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target];
    if (target == '') return true

    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            let suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) == true) {
                memo[target] = true;
                return true
            }
        }
    }
    memo[target] = false;
    return false
}
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false

function countConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target];
    if (target == '') return 1

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            let suffix = target.slice(word.length);
            const numWays = countConstruct(suffix, wordBank, memo);
            totalCount += numWays;
        }
    }
    memo[target] = totalCount;
    return totalCount;
}


// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
// console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0

function allConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target];
    if (target == '') return [[]]

    let result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) == 0) {
            let suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way =>
                [word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
}
// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
// console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0

function fibTabulation(n) {
    if (n == 0) return 0
    if (n == 1) return 1

    let arr = new Array(n + 1).fill(0);
    arr[1] = 1;

    for (i = 0; i <= n; i++) {
        arr[i + 1] += arr[i];
        arr[i + 2] += arr[i];;
    }
    return arr[n];
}
// console.log(fibTabulation(6)); // 8
// console.log(fibTabulation(50)); // 12586269025


function gridTravelerTabulation(m, n) {
    const table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
    table[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const curr = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += curr;  //right
            if (i + 1 <= m) table[i + 1][j] += curr;  //down
        }
    }
    return table[m][n];
}
// console.log(gridTravelerTabulation(1, 1)); //1
// console.log(gridTravelerTabulation(2, 3)); //3
// console.log(gridTravelerTabulation(3, 3)); //6
// console.log(gridTravelerTabulation(18, 18)); //2333606220

function canSumTabulation(targetSum, numbers) {
    let table = new Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] == true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[targetSum];
}

// console.log(canSumTabulation(7, [5, 3, 4, 7])); //true
// console.log(canSumTabulation(7, [2, 4])); //false
// console.log(canSumTabulation(300, [7, 14])); //false

function howSumTabulation(targetSum, numbers) {
    let table = new Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i < targetSum - 1; i++) {
        if (table[i] != null) {
            for (let num of numbers) {
                table[i + num] = [...table[i], num];
            }
        }
    }

    return table[targetSum];
}

// console.log(howSumTabulation(0, [1, 2, 3])); // []
// console.log(howSumTabulation(7, [2, 3])); // [3, 2, 2]
// console.log(howSumTabulation(7, [2, 4])); // null
// console.log(howSumTabulation(8, [2, 3, 5])); // [2, 2, 2, 2]
// console.log(howSumTabulation(300, [7, 14])); //null

function bestSumTabulation(targetSum, numbers) {
    let table = new Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] != null) {
            for (let num of numbers) {
                let combo = [...table[i], num]
                if (!table[i + num] || combo.length < table[i + num].length) {
                    table[i + num] = combo;
                }
            }
        }
    }
    return table[targetSum];
}
// console.log(bestSumTabulation(7, [5, 3, 4, 7])); // [7]
// console.log(bestSumTabulation(8, [2, 3, 5])); // [3,5]
// console.log(bestSumTabulation(8, [1, 4, 5])); // [4, 4]
// console.log(bestSumTabulation(100, [1, 2, 5, 25])); // [25, 25, 25, 25]

function canConstructTabulation(target, wordBank) {
    let table = new Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] == true) {
            for (let word of wordBank) {
                // if the word matches the char starting at i
                if (target.slice(i, i + word.length) == word) {
                    table[i + word.length] = true
                }
            }
        }
    }
    return table[target.length]
}
// console.log(canConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
// console.log(canConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false

function countConstructTabulation(target, wordBank) {
    const table = new Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }
    return table[target.length];
}
// console.log(countConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
// console.log(countConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0

function allConstructTabulation(target, wordBank) {
    let table = new Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) == word) {
                let combo = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...combo);
            }
        }
    }
    return table[target.length];
}
console.log(allConstructTabulation('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(allConstructTabulation('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
