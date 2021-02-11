let arr = [];

function getNumber() {
    let num = prompt('Enter the quatity?');
    if (num < 3) {
        return getNumber();
    }else {
        return num;
    }
}

const reqNumber = getNumber();
for (let i = 1; i <= reqNumber; i++ ) {
    const num = prompt('Enter the numbers?');
    arr.push(num);
}

arr.sort(function(a, b) {
    return a - b;
})

console.log(arr);




