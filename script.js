// 1. Display even numbers from 1 to 100
console.log("Even numbers from 1 to 100:");
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// 2. Function to perform add, subtract, multiply, and divide
function calculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}

console.log(calculator(10, 5, 'add'));       // 15
console.log(calculator(10, 5, 'subtract'));  // 5
console.log(calculator(10, 5, 'multiply'));  // 50
console.log(calculator(10, 5, 'divide'));    // 2

// 3. Function to calculate tax based on salary
function findTax(salary) {
    switch (true) {
        case (salary > 0 && salary <= 500000):
            return 0;
        case (salary > 500000 && salary <= 1000000):
            return salary * 0.10;
        case (salary > 1000000 && salary <= 1500000):
            return salary * 0.20;
        case (salary > 1500000):
            return salary * 0.30;
        default:
            return "Invalid salary input";
    }
}

console.log(findTax(400000));  // 0
console.log(findTax(750000));  // 75000
console.log(findTax(1200000)); // 240000
console.log(findTax(2000000)); // 600000

// 4. Function to find sum of products of corresponding digits
function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let length = Math.max(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < length; i++) {
        let digit1 = i < str1.length ? parseInt(str1[i]) : 0;
        let digit2 = i < str2.length ? parseInt(str2[i]) : 0;
        sum += digit1 * digit2;
    }

    return sum;
}

console.log(sumOfProducts(6, 34)); // 24
console.log(sumOfProducts(12, 45)); // (2*5) + (1*4) = 10 + 4 = 14
console.log(sumOfProducts(789, 123)); // (9*3) + (8*2) + (7*1) = 27 + 16 + 7 = 50
