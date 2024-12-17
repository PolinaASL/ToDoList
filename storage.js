import { createTodoItem } from './dom.js';

export function addTodoItem(text, todoList) {
    const todoItem = createTodoItem(text);
    todoList.appendChild(todoItem);
    saveTodoItems(todoList);
}

export function saveTodoItems(todoList) {
    const items = [];
    const todoItems = todoList.children;
    for (const item of todoItems) {
        items.push(item.textContent);
    }
    localStorage.setItem('todoItems', JSON.stringify(items));
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