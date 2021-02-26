const input = document.getElementById('input');
const button = document.getElementById('button');
const lists= document.getElementById('lists');


function createList() {
    const newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    lists.append(newLi);
    input.value = '';
}

button.addEventListener('click', createList);


