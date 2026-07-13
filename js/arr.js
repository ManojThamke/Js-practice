let arr = [[1, 2], [3, 4], [6, 7]];
console.log("sub array");
for (let sub of arr) {
    console.log(sub);
}
console.log("sub array elements");
for (let sub of arr) {
    for (let num of sub) {
        console.log(num);
    }
}
console.log("sub array elements using index 0");
for(let sub of arr) {
    console.log(sub[0]);
}
console.log("sub array elements using index 1");
for (let sub of arr) {
    console.log(sub[1]);
}
console.log("accessing sub array using index");
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log("first element of first sub array");
console.log(arr[0][0]);
console.log("second element of first sub array");
console.log(arr[0][1]);
console.log ("first element of second sub array");
console.log(arr[1][0]);
console.log("second element of second sub array");
console.log(arr[1][1]);

console.log("sum of every sub array");
for (let sub of arr) {
    let sum = 0;
    for (let num of sub) {
        sum += num;
    }
    console.log(sum);
}

console.log("sum of entire array");
let total = 0;
for (let sub of arr) {
    for (let num of sub) {
        total += num;
    }
}

console.log(total);

console.log("largest number in sub array");
function largestInSubArray(arr) {
    let max = arr[0][0];

    for (let sub of arr) {
        for (let num of sub) {
            if (num > max) {
                max = num;
            }
        }
    }
    return max;
}
console.log(largestInSubArray(arr));

function minInSubArray(arr) {
    let min = arr[0][0];

    for (let sub of arr) {
        for (let num of sub) {
            if (num < min){
                min = num;
            }       
        }
    }
    return min;
}

console.log("smallest number in sub array");
console.log(minInSubArray(arr));

let result = [];
for (let sub of arr) {
    result.push(...sub);
}
console.log(result);

console.log("Print with index");
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(`arr[${i}][${j}] = ${arr[i][j]}`);
    }
}

console.log("print row wise");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}