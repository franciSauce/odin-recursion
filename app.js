#!/usr/bin/node
// Fibonacci sequence
// 1. Iteration
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const nextNum = [0, 1];
    for (let i = 2; i < n; i++) {
        nextNum.push(nextNum[i - 1] + nextNum[i - 2]);
    }
    return nextNum;
}

// console.table(fibs(10));
// console.table(fibs(8));
// console.table(fibs(12));

// 2. Recursion
function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const nextNumRec = fibsRec(n - 1);
    nextNumRec.push(nextNumRec[nextNumRec.length - 1] + nextNumRec[nextNumRec.length - 2]);
    return nextNumRec;
}

// console.table(fibsRec(15));
// console.table(fibsRec(18));
// console.table(fibsRec(21));

// Merge sort Methodology
function mergeSort(array) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid);

    const sortLeft = mergeSort(leftHalf);
    const sortRight = mergeSort(rightHalf);

    return merge(sortLeft, sortRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// console.log(mergeSort([105, 79, 100, 110]));
// console.log(mergeSort([36, 88, 63, 93, 73, 23, 1, 43, 79, 72, 10, 20, 21, 49, 42, 25, 54, 12]));
