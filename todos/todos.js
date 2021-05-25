import { createTodo, getCurrentUser, toggleToDo, logOutUser } from '../local-storage-utils.js';

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const currentUserOnLoad = getCurrentUser();
const nameDiv = document.querySelector('#user');
const logoutButton = document.querySelector('#logout');

if (!currentUserOnLoad) {
    window.location.href = '../';
}

nameDiv.textContent = currentUserOnLoad.username;

logoutButton.addEventListener('click', () => {
    logOutUser();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    createTodo(formData.get('todo'));
    renderTodos();
    form.reset();
});

function renderTodos() {
    const user = getCurrentUser();
    ul.textContent = '';

    user.todos.forEach(todos => {
        const li = document.createElement('li');
        li.textContent = todos.message;

        if (todos.completed) {
            li.style.textDecoration = 'line-through';
        }

        li.addEventListener('click', () => {
            toggleToDo(todos.id);
            renderTodos();
        });
        ul.append(li);
    });
}
renderTodos();