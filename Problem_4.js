// Program Palindrome

function palindrome(string) {
    // mencari panjang string
    const len = string.length;
    // loop string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return "false";
        }
    }
    return "true";
}

console.log(palindrome("civic"))       // true
console.log(palindrome("katak"))       // true
console.log(palindrome("kasur rusak")) // true
console.log(palindrome("kupu-kupu"))   // false
console.log(palindrome("lion"))        // false