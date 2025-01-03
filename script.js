import { createAppTitle, createTodoItemForm, createTodoList } from './dom.js';
import { addTodoItem, loadTodoItems, clearTodoItems } from './storage.js';

let todoList;

document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');

    const title = createAppTitle();
    app.appendChild(title);

    const form = createTodoItemForm();
    app.appendChild(form);

    todoList = createTodoList();
    app.appendChild(todoList);

    loadTodoItems(todoList);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const input = form.querySelector('input');
        const text = input.value.trim();
        if (text) {
            addTodoItem(text, todoList);
            input.value = '';
        }
    });

    const clearButton = document.getElementById('clear-all');
    clearButton.addEventListener('click', function() {
        clearTodoItems(todoList);
    });
});