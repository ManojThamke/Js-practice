// function factorial(n) {
//     let result = 1;
//     for ( let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// let n = 5;
// console.log(factorial(n)); // Output: 120

const factRecursive = n => n <= 1 ? 1 : n * factRecursive(n - 1);
function factiteration(n) {
    let result = 1;
    for ( let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;

}

console.log("Recursive method:",factRecursive(20));
console.log("Iterative method:",factiteration(20));