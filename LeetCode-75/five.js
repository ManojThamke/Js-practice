var reverseVowels = function(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) {
            left++;
        }
        while (left < right && !vowels.has(arr[right])) {
            right--;
        }

        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return arr.join('');
}

let s = "hello";
console.log(reverseVowels(s)); // Output: "holle"