import { createTodoItem } from './dom.js';

export function addTodoItem(text, todoList) {
    const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    todoItems.push(text);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    const todoItem = createTodoItem(text);
    todoList.appendChild(todoItem);
}

export function loadTodoItems(todoList) {
    const items = JSON.parse(localStorage.getItem('todoItems'));
    if (items) {
        const lastThreeItems = items.slice(-3);
        lastThreeItems.forEach(item => {
            const todoItem = createTodoItem(item);
            todoList.appendChild(todoItem);
        });
    }
}

export function clearTodoItems(todoList) {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    localStorage.removeItem('todoItems');
    todoList.innerHTML = '';
}