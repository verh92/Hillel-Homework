function sortArr(array) {
    const arr = array.map((item) => {
        return +item;
    });
    return arr.sort((a, b) => {
        return a - b;
    });
}

function getArr() {
    const num = prompt('Enter numbers by comma');
    const arr = num.split(',').map(item => +item);
    if (arr.every(item => {
        return item && typeof item === 'number';
    })) {
        return arr;
    }else {
        init(arr);
    }
}

function multThree(array) {
    return array.filter((item) => {
        return item % 3 === 0;
    })
}

function joinArr(array) {
    const sym = prompt('enter symbol');
    return array.join(sym);
}

function maxNum(array) {
    const res = sortArr(array);
    return res[array.length - 1];
}

function minNum(array) {
    const res = sortArr(array);
    return res[array.lenght = 0];
}

function chooseOperation(array) {
    const operations = prompt(
        'Choose operation: sorted, multed, join, max, min');
console.log(operations);
    switch (operations) {
        case 'sorted':
            sorted = sortArr(array);
            alert(sorted);
        break;
        case 'multed':
            const multed = multThree(array);
            alert(multed);
        break;
        case 'join':
            const join = joinArr(array);
            alert(join);
        break;
        case 'max':
            const max = maxNum(array);
            alert(max);
        break;
        case 'min':
            const min = minNum(array);
            alert(min);
        break;
    }
    repeat(array);
}

function repeat(array) {
    const doRepeat = confirm('Would you like you repeat?');
    if(doRepeat) {
        const makeChoice = confirm('Would you like to do operations with this array?');
        if(makeChoice) {
            chooseOperation(array);
        }else {
            init();
        }
    }
}

function init() {
    const newArr = getArr();
    console.log(newArr);
    if (newArr) {
        chooseOperation(newArr);
    }else {
        init();
    }
}

init();
















