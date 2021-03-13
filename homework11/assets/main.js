const btns = [
    document.getElementById('btn__one'),
    document.getElementById('btn__two'),
    document.getElementById('btn__three')
];

btns.forEach(function(elem) {
    elem.addEventListener('click', fibNums(elem));
});

function fibNums(elem) {
    let a = 0;
    let b = 1;
    return function() {
        a = b + a;
        b = a - b;
        elem.nextElementSibling.innerText = b;
        return elem;
    }
};