function sum(arr) {
    let add = 0;
    for (const x of arr) {
        add += Array.isArray(x) ? sum(x) : x;
    }
    return add;
}

let arr = [1, 2, [3, 4], [5, [6, 7]], 8];
console.log(sum(arr)); // Output: 15

// function add(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             total += add(arr[i]);
//         }
//         else {
//             total += arr[i];
//         }
//     }
//     return total;
// }
// let arr = [1, 2, [3, 4], [5, [6, 7]], 8];
// console.log(add(arr)); // Output: 15