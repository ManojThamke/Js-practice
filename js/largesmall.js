function minmax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}


let arr = [3, 5, 1, 8, 2];
let result = minmax(arr);
console.log(result); // Output: { min: 1, max: 8 }