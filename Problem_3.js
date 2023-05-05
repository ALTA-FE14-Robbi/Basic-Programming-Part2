// Program Bilangan Prima

function primeNumber(number) {
    for (let i = number - 1; i > 1; i--) {
        if (number % i === 0) {
            return "false";
        }
    }
    return "true"
}

console.log(primeNumber(11)) // true
console.log(primeNumber(13)) // true
console.log(primeNumber(17)) // true
console.log(primeNumber(20)) // false
console.log(primeNumber(35)) // false

console.log(primeNumber(7))  // true
console.log(primeNumber(10)) // false