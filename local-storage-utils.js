
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


export function getUser()

export function saveUser



export function loginUser()

export function logOutUser()



export function toggleToDo()

export function createToDo()

export function ()


