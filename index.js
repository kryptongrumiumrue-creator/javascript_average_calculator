const readline = require('readline-sync');

const input1 = readline.question('Enter first number: ');
const input2 = readline.question('Enter second number: ');
const input3 = readline.question('Enter third number: ');

const num1 = Number(input1);
const num2 = Number(input2);
const num3 = Number(input3);

if (input1 === '' || input2 === '' || input3 === '' ||
    isNaN(num1) || isNaN(num2 || isNaN(num3))
) {
    console.log('Error: Please enter three valid numbers.');
} else {
    const sum = num1 + num2 + num3;
    const average = sum / 3;
    
    console.log(`Average: ${average}`);

}
