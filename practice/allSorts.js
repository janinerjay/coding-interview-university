/* Sorting */

// --------------------- Quick Sort ---------------------
let array1 = [4, 2, 8, 2, 6, 8, 3, 5, 9, 1];
// console.log(array1);
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let leftArr = [], rightArr = [];
    for (let el of arr.slice(0, arr.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
// console.log('Quick Sort: ', quickSort(array1));

// --------------------- Merge Sort ---------------------
let array2 = [4, 2, 8, 2, 6, 8, 3, 5, 9, 1];
// console.log(array2);
function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right]
}
function mergeSort(array) {
    const mid = array.length / 2;
    if (array.length < 2) return array;
    const left = array.splice(0, mid);
    return merge(mergeSort(left), mergeSort(array));
}
// console.log('Merge Sort: ', mergeSort(array2));

// --------------------- Insertion Sort ---------------------
let array3 = [4, 2, 8, 2, 6, 8, 3, 5, 9, 1];
console.log(array3);
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log('Insertion Sort: ', insertionSort(array3));

// --------------------- Heap Sort ---------------------
// Also known as 'Improved Selection Sort'
let array4 = [4, 2, 8, 2, 6, 8, 3, 5, 9, 1];
// console.log(array4);
function heapify(arr, len, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = left + 1;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, len, largest);
    }
    return arr;
}
function heapSort(arr) {
    let len = arr.length;
    let i = Math.floor(len / 2 - 1);
    let k = len - 1;

    while (i >= 0) {
        heapify(arr, len, i);
        i--;
    }
    while (k >= 0) {
        [arr[0], arr[k]] = [arr[k], arr[0]];
        heapify(arr, k, 0);
        k--;
    }
    return arr;
}
// console.log('Heap Sort: ', heapSort(array4));

// --------------------- Selection Sort ---------------------
let array5 = [4, 2, 8, 2, 6, 8, 3, 5, 9, 1];
// console.log(array5);
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) { min = j }
        }
        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr;
}
// console.log('Selection Sort: ', selectionSort(array5));

// --------------------- Bubble Sort ---------------------
let array6 = [4, 2, 8, 2, 6, 8, 3, 5, 9, 1];
// console.log(array6);
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    }
    return arr;
}
// console.log('Bubble Sort: ', bubbleSort(array6));

// --------------------- Radix Sort ---------------------
let array7 = [4, 2, 8, 2, 6, 8, 3, 5, 9, 1];
// console.log(array7);

// console.log('Radix Sort: ', radixSort(array7));


// --------------------- Topological Sort ---------------------
let array8 = [4, 2, 8, 2, 6, 8, 3, 5, 9, 1];
// console.log(array8);

// console.log('Topological Sort: ', topologicalSort(array8));
