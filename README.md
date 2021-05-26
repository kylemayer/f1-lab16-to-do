![Our Apocalypse Miro Board Awwwww](./assets/miro.jpg)

## Home page
1) Login link
2) Sign-up link
3) Todo link

## Login Page

### HTML Setup
1) Username input
2) Password input
3) Submit button
    a) form event listener, loginUser

### Event
On submit
    -look at username and password input, check if the user got it right (are the username and password right?) If so, grab user from locStor
        -getUser, loginUser
    -If we have the ability to store data for several users, we'll need to keep track of who is currently logged in. That way, we'll make sure to never show anyone else's todo accidentally
        -Current User function
    -send the user to `/todos`

## SignupPage

### HTML Setup
1) Username input
2) Password input
3) Submit button
    -form event listener, createUser

### Event
On submit
    -look at username and password input, check if the username already exists
        -createUser
            -If already existing, alert to pick a different username, input not saved to locStor
    -If not already existing, save to locStor
        -saveUser
    -Set as current user
        -getCurrentUser
     and send the user to `/todos`

## Todos Page

### HTML Setup
1) Input and button to add new todo
    -form event listener, createTodo
2) a `ul` to inject todo `li` tags into
2) Logout button
    -logOutUser

### Events
1) curentUserOnLoad to get user's todo list if already created
2) Click on a todo
    -Update this todo in locStor
        -Figure out which todo the user clicked 
        -FIND that todo in locStor
        -Toggle the completion of that todo
            -toggleTodo
        -Save our todos
        -Rerender the page with new state

2) Submit a new todo
    -Take user input and inject it into locStor as a new todo (push it into the todo array in locStor)
    -rerender the page with the new state
        -renderTodos with that ridiculous calling itself within itself

## Dependency order:
1) Create users
    -Why? Because the todos live on the user object!
2) Create todos
3) Complete todos
(login user)
