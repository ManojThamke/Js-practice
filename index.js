// let obj={
//     a:{
//         b:undefined
//     }
// }
// console.log(obj?.a?.b?.c?.d??"Manoj")

// var a=10

// if(function f() {}) {
//     a=a+typeof f
// }
// console.log(a);

// var a =10;

// function test() {
//     console.log(a);

//     var a=20;
//     console.log(a);
// }

// test();
// console.log(a);

// Reverse a string 
/*function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Manoj"));*/

// Built-in method
// function reverse(str) {
//     let rev = "";
//     for(let i = str.length -1; i >= 0; i--){
//         rev +=str[i];
//     }
//     return rev;
// }
// console.log(reverse("QTS"));

// function palindrome(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(palindrome("tomato"));
// console.log(palindrome("racecar"));

// function factorial(n) {
//     let fact = 1;
//     for (let i=1; i<=n; i++) {
//         fact*=i;
//     }
//     return fact;
// }
// console.log(factorial(5));

// function fibonacci(n) {
//     let a=0, b=1;
//     for(let i=0; i<n; i++){
//         console.log(a);
//         let temp = a+b;
//         a=b;
//         b=temp;
//     }
// }
// fibonacci(5);

// console.log("Prime number");
// function prime(num) {
//     if (num <= 1) return false;
//         for (let i = 2; i < num; i++){
//             if (num % i === 0){
//                 return false;
//         }
//     }
//     return true;
// }
// console.log(prime(70));

// console.log("Largest number");
// const arr = [10, 20, 30, 40, 50];
// let max=arr[0];
// for (let num of arr){
//     if (num>max){
//         max = num;
//     }
// }
// console.log(max);

// console.log("second largest number");
// const arr = [10, 20, 30, 44, 50];
// let max=arr[0];
// let secondMax=arr[0];
// for (let num of arr){
//     if (num>max){
//         secondMax=max;
//         max = num;
//     }
// }
// console.log(secondMax);


// const  arr1 = [1,2,2,3,4,4];
// const unique = [...new Set(arr1)]; //... is spread operator
// console.log(unique);

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";
//     for ( let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("ManOj Thamke is a Software developer and Full Stack Developer"));

// function rev(str){
//     return str.split("").reverse().join("");
// }
// console.log(rev("Thamke"));

// function reverse(str){
//     let ans ="";
//     for (let i = str.length -1; i>=0; i--){
//         ans += str[i];
//     }
//     return ans;
// }
// console.log(reverse("Manoj"));