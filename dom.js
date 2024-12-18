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
    todoItem.className = 'list-group-item d-flex justify-content-between align-items-center'; // Added classes for better layout
    const itemText = document.createElement('span');
    itemText.textContent = text;
    todoItem.appendChild(itemText);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function() {
        const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
        const index = todoItems.indexOf(text);
        if (index > -1){
            todoItems.splice(index, 1);
            localStorage.setItem('todoItems', JSON.stringify(todoItems));
            todoItem.remove();
        }
    });

    todoItem.appendChild(deleteButton);
    return todoItem;
}
