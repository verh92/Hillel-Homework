let num1, num2, res;

const operation = reqOperation();

num1 = reqNumber('Enter the first number');

switch (operation) {
    case '+':
    case '-':
    case '*':
    case '/':
        num2 = +prompt('Enter the second number');
        break;
}

switch (operation) {
    case '+':
        res = sum(num1, num2);
        break;
    case '-':
        res = diff(num1, num2);
        break;
    case '*':
        res = mult(num1, num2);
        break;
    case '/':
        res = div(num1, num2);
        break;
    case 'sin':
        res = sin(num1);
        break;    
}

alert(`You choose ${operation} has a result ${res}`);

function reqOperation() {
    let operation;
    while(!operation) {
        let sym = prompt('Choose the math operation: + , - , * , / ');
        switch(sym) {
            case '+':
            case '-':
            case '*':
            case '/':
            case 'sin':
                operation = sym;
                break;
        }
    }
    return operation;
}

function reqNumber() {
    let res;
    while (!res) {
        res = +prompt('Enter the first number');
    }
    return res;
}




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

function sin(a) {
    return Math.sin(a);
}

