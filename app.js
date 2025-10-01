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

console.log(fibs(10));

// 2. Recursion
function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const nextNumRec = fibsRec(n - 1);
    nextNumRec.push(nextNumRec[nextNumRec.length - 1] + nextNumRec[nextNumRec.length - 2]);
    return nextNumRec;
}

console.log(fibsRec(15));

