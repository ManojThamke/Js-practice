// Find maximum number in an Function
console.log("Find maximum number in an array");
const array = [90,5,60,97,66];
function findMax(arr) {
    let max = arr[0];
    for (let i=1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(array));
// sum of all numbers in an 
console.log("sum of all numbers in an array");
function sum(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum(array));
// Linear Search
console.log("Linear Search");
function LinearSearch(arr, target) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
console.log(LinearSearch(array, 5));
console.log(LinearSearch(array, 66));
// Average of array
console.log("Average of array");
function average(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average(array));