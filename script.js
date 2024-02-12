'use-strict';

const taskList = [
    {
        text: 'Some todo text',
        isDone: true,
    }
]

const controlButton = document.querySelector('.controls__btn');
const controlInput = document.querySelector('.controls__input');
const todoList = document.querySelector('.todo-list');

function render() {
    todoList.innerHTML = '';
    taskList.forEach((elem, index) => {
        createDateFromUnixTimestamp(elem, index)
    });
}

function createItem({ text, isDone }, itemCount) {
    const item = document.createElement('li');
    item.className = 'todo-list__item';

    const todoLabel = document.createElement('label');
    todoLabel.className = 'todo-list__label';

    const todoInput = document.createElement('input');
    todoInput.className = 'todo-list__checkbox';
    todoInput.type = 'checkbox';
    todoInput.checked = elem.isDone;
    todoInput.name = 'пометка о выполнении задач';
    todoInput.setAttribute('data-number', index);
    todoLabel.appendChild(todoInput);

    const todoText = document.createElement('p');
    todoText.className = 'todo-list__text';
    todoText.innerHTML = elem.text;
    todoLabel.appendChild(todoText);

    item.appendChild(todoLabel);

    const todoListButton = document.createElement('button');
    todoListButton.className = 'todo-list__btn';
    todoListButton.innerHTML = 

    const todoImg = document.createElement
    todoImg.className = 'todo-list__text';
    todoImg.className = 'todo-list__img';
    todoImg.src = 'images/trash.svg';
    
    todoListButton.addEventListener(('click'), () => {taskList.splice(todoListButton.dataset.number, 1);
    render();
})

todoInpit.addEventListener(('change'), checkboxHandler);
}

function checkboxHandler(event) {
    taskList[event.target.dataset.number].isDone = event.target.checked;
}

controlButton.addEventListener('click', (event) => {
    event.preventDefault();
    const text = controlInput.value;
    if (text.trim().length) {
        taskList.push({text: text, isDone: false});
        render();
    
    }
    controlInput.value = '';
});