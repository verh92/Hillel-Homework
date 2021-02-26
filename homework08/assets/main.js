const color = document.getElementById('color');
const selector= document.getElementById('selector');
const figure = document.getElementById('figure');


color.addEventListener('change', colorChange);
selector.addEventListener('change', figureChange);


function colorChange() {
    figure.style.background = color.value;
}

function figureChange(shape) {
    figure.className = `figure ${selector.value}`;
}




