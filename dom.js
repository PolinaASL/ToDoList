export function createAppTitle() {
    const title = document.createElement('h1');
    title.textContent = 'Мой Список Дел';
    return title;
}

export function createTodoItemForm() {
    const form = document.createElement('form');
    form.className = 'input-group mb-3';

    const input = document.createElement('input');
    input.className = 'form-control';
    input.placeholder = 'Введите новое дело';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'input-group-append';

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Добавить дело';
    button.type = 'submit';

    buttonContainer.appendChild(button);
    form.appendChild(input);
    form.appendChild(buttonContainer);

    return form;
}

export function createTodoList() {
    const todoList = document.createElement('ul');
    todoList.className = 'list-group';
    return todoList;
}

export function createTodoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.className = 'list-group-item';
    todoItem.textContent = text;
    return todoItem;
}