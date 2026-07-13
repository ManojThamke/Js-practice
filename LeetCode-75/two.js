/*var gcdofStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    function gcd (a, b) {
        if (b === 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    let length = gcd(str1.length, str2.length);

    return str1.substring(0, length);
};*/

var gcdofString = function (str1, str2) {
    if( str1 + str2 !== str2 + str1) {
        return "";
    }

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    let length = gcd(str1.length, str2.length);

    return str1.substring(0, length);
};

let str1 = "ABCABC";
let str2 = "ABC";
console.log(gcdofString(str1, str2)); // Output: "ABC"