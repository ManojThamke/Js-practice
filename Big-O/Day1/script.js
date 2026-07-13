/*
// O(1) - Constant Time Complexity
console.log("O(1) - Constant Time Complexity");
function PrintFirst(arr) {
    console.log(arr[4]);
}

PrintFirst([100, 2, 35, 40, 56]);

// O(n) - Linear Time Complexity
console.log("O(n) - Linear Time Complexity");
function printAll(arr) {
    for (let i =0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
console.time("O(n) - Linear Time Complexity");
printAll([100, 2, 35, 40, 56]);
console.timeEnd("O(n) - Linear Time Complexity");

// O(n^2) - Quadratic Time Complexity
console.log("O(n^2) - Quadratic Time Complexity");

function printBoth(arr) {
    for (let i=0; i<arr.length; i ++) {
        for (let j=0; j<arr.length; j++) {
            console.log(arr[i], arr[j]); // n*n times
        }
    }
}

console.time("O(n^2)");
printBoth([90,5,60,77,66]);
console.timeEnd("O(n^2)");
// quiz
for(let i=0; i<10; i++) {
    for(let j=0; j<10; j++) {
    console.log(i,j);
}
console.count("console log count");
}
// quiz2
n = 10;
for(let i=0;i<n;i++){

    for(let j=0;j<n;j++){

        for(let k=0;k<n;k++){

            console.log(i,j,k);

        }
    }
}
*/
// Space Complexity
// O(1) - Constant Space Complexity\
console.log("O(1) - Constant Space Complexity");
let a = 5;
let b = 10;
function sum(a,b) {
    return a+b;
}
console.log(sum(a,b));

// O(n) - Linear Space Complexity
console.log("O(n) - Linear Space Complexity");
const copyArray = (n) => {
    const newArray = [];

    for (let i=0; i < n; i++) {
        newArray.push(i * 10);
    }
    return newArray;
}
console.time("O(n) - Linear Space Complexity");
console.log(copyArray(1));
console.timeEnd("O(n) - Linear Space Complexity");