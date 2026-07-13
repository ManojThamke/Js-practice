// function primeNumber (num) {
//   for (let i = 2; i * i <= num; i++){
//     if(num % i === 0) {
//         return false;
//     }
//   }
//   return true;
// }
// let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// console.log(primeNumber(num)); // Output: true

function isPrimeNumber(n) {
    if (n < 2) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let num of arr) {
    console.log(num + " : " + isPrimeNumber(num));
}

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// function isPrimeNumber(arr) {
//     for (let n of arr) {
//         let isPrime = true;

//         if(n < 2) {
//             isPrime = false;
//         } else {
//             for (let i = 2; i * i <= n; i++) {
//                 if(n % i === 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//         }
//         console.log(n, "->", isPrime);
//     }
// }

// isPrimeNumber(arr);