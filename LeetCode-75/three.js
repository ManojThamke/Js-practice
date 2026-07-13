var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    let result = [];

    for (let i =0; i <candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            result.push (true);
        } else {
            result.push(false);
        }
    }
    return result;
};

let candies = [2,3,5,1,3];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies)); // Output: [true,true,true,false,true]