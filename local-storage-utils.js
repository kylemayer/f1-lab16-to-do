
const CURRENT_USER = 'CURRENT_USER';

export function createUser(username, password) {
    if (localStorage.getItem(username)) {
        alert('Pick a different username');
    } else {
        const newUser = {
            username: username,
            password: password,
            todos: []
        };
        saveUser(newUser);
        loginUser(username, password);
    }
}

export function getUser(username) {
    const stringyUser = localStorage.getItem(username);

    return JSON.parse(stringyUser);
}

export function getCurrentUser() {
    const currentUser = localStorage.getItem(CURRENT_USER);

    const user = getUser(currentUser);
    
    return user;
}


export function saveUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(user.username, stringyUser);
}



export function loginUser(username, password) {
    const user = getUser(username);
    if (user) {
        if (user.password === password) {
            localStorage.setItem(CURRENT_USER, username);
            window.location.href = '../todos';
        } else {
            alert('WRONG! Username and password are WRONG!');
        }
    } else {
        alert('WHAT ARE YOU TRYING TO DO?! USER DOES NOT EXIST!');
    }
}

export function logOutUser() {
    localStorage.removeItem(CURRENT_USER);
    window.location.href = '../';
}

export function createToDo(someToDo) {
    const user = getCurrentUser();
    const newToDo = {
        id: Math.ceil(Math.random() * 10000000),
        message: someToDo,
        completed: false
    };

    user.todos.push(newToDo);
    saveUser(user);
}


export function toggleToDo(todoId) {
    const user = getCurrentUser();
    const matchingToDo = findById(user.todos, todoId);
    if (matchingToDo) {
        matchingToDo.completed = !matchingToDo.completed;
        saveUser(user);
    } else {
        alert('Nope! No To-Do!');
    }

}


export function findById(arr, id) {
    for (let item of arr) {
        if (item.id === id) return item;
    }
}


