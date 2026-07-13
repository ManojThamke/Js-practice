/*function mergeAlternative(word1, word2) {
    // Store the merged string
    let result = "";
    // Pointer to traverse both strings
    let i = 0;
    // Continue until both strings are fully processed
    while (i < word1.length || i < word2.length) {
        // Add character from word1 if available
        if (i < word1.length) {
            result += word1[i];
        }
        // Add character from word2 if available
        if (i < word2.length) {
            result += word2[i];
        }
        // Move to the next character
        i++;
    }
    // Return the merged string
    return result;
};
*/
let word1 = "Manoj";
let word2 = "Thamke";
console.log(mergeAlternative(word1, word2)); // Output: "apbqcr"

function mergeAlternative(word1, word2) {
    let result = "";
    let i = 0;

    while (i < word1.length || i < word2.length) {
        if (i < word1.length) {
            result += word1[i];
        }
        if (i < word2.length) {
            result += word2[i];
        }
        i++;
    }
    return result;
}