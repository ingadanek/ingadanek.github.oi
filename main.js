const toDoList = [];
const form = document.querySelector('form');
const input = document.querySelector('.addTask');
const input2 = document.querySelector('.searchTask');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('span');

const remove = (e) => {
    const index = e.target.parentNode.dataset.key
    toDoList.splice(index, 1);
    render();
    taskNumber.textContent = toDoList.length;
}
const search = (e) => {
    let things = toDoList;
    const searchText = e.target.value.toLowerCase();
    things = things.filter(thing => thing.textContent.toLowerCase().includes(searchText));
    ul.textContent = '';
    things.forEach(thing => ul.appendChild(thing));
    taskNumber.textContent = things.length;
}
const render = () => {
    ul.textContent = '';
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);

    })
}
const addTask = (e) => {
    e.preventDefault();
    const text = input.value;
    if (text === '') return
    const li = document.createElement('li');
    li.innerHTML = `${text} <button class=inner>delete</button`;
    toDoList.push(li);
    render();
    input.value = '';
    taskNumber.textContent = toDoList.length;
    li.querySelector('button').addEventListener('click', remove);
    input2.addEventListener('input', search);
}


form.addEventListener('submit', addTask);