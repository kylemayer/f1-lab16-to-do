
const CURRENT_USER = 'CURRENT_USER';

export function createUser(username, password) {
    if(localStorage.getItem(username)) {
        alert('Pick a different username')
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


export function saveUser() {

}



export function loginUser()

export function logOutUser()



export function toggleToDo()

export function createToDo()

function findById(arr, id) {
    for (let item of arr) {
        if (item.id === id) return item;
    }
}


