let num1 = +prompt('Enter the first number');
let num2 = +prompt('Enter the second number');

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

let res = `
    Calculations are finished!
    Sum: ${num1} + ${num2} = ${sum(num1, num2)}\n
    Diff: ${num1} - ${num2} = ${diff(num1, num2)}\n
    Mult: ${num1} * ${num2} = ${mult(num1, num2)}\n
    Div: ${num1} / ${num2} = ${div(num1, num2)}\n
`;


alert(res);
console.log(res);

