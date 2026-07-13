// function countVowels(str) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

//     for (let char of str) {
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
let str = "Manoj Is a Programmer";
console.log(countVowels(str));

function countVowels(str) {
    let count = 0;
    const vowels = ['a','e','i','o','u'];

    for ( const char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}