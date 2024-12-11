
// ( "hello js file linked ceccess !")
function reversestring(str) {
    return str.split('').reverse().join('')

}
console.log(reversestring('hello world'));
//funtion number !
    function CountCharacter(str) {
        return str.length
    }
    console.log(CountCharacter("123"));

    function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Example usage:
console.log(capitalizeWords("hello world! this is javascript.")); 
// Output: "Hello World! "
// Function to find the maximum value
function findMax(arr) {
    return Math.max(...arr);
}

// Function to find the minimum value
function findMin(arr) {
    return Math.min(...arr);
}

// Example usage:
const numbers = [3, 7, 1, 9, 4];

console.log(findMax(numbers)); // Output: 9
console.log(findMin(numbers)); // Output: 1

function countCharacters(inputString) {
    if (typeof inputString !== 'string') {
        throw new Error('Input must be a string');
    }
    return inputString.length;
}

// Example usage:
const myString = "Hello, world!";
console.log(`The number of characters is: ${countCharacters(myString)}`); // Output: 13

function capitalizeWords(sentence) {
    if (typeof sentence !== 'string') {
        throw new Error('Input must be a string');
    }
    return sentence
        .split(' ') // Split the sentence into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a sentence
}

// Example usage:
const mySentence = "hello world! this is a test.";
console.log(capitalizeWords(mySentence)); // Output: "Hello World! This Is A Test."
function factorial(num) {
    if (num < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    if (num === 0 || num === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    return num * factorial(num - 1); // Recursive case
}

// Example usage:
const number = 5;
console.log(`Factorial of ${number} is: ${factorial(number)}`); // Output: 120
function factorialIterative(num) {
    if (num < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i; // Multiply result by the current number
    }
    return result;
}

// Example usage:
console.log(`Factorial of ${number} is: ${factorialIterative(number)}`); // Output: 120

function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    if (num <= 3) {
        return true; // 2 and 3 are prime numbers
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false; // Eliminate multiples of 2 and 3
    }
    // Check divisors from 5 to √num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// Example usage:
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
function generateFibonacciRecursive(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const fib = generateFibonacciRecursive(n - 1);
    return fib.concat(fib[fib.length - 1] + fib[fib.length - 2]);
}

// Example usage:
console.log(generateFibonacciRecursive(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
function* fibonacciGenerator(n) {
    let [a, b] = [0, 1];
    while (n-- > 0) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Example usage:
const gen = fibonacciGenerator(10);
console.log([...gen]); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]




