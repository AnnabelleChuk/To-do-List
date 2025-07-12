const todoList = [
    'make dinner',
    'wash dishes'
];

renderToDoList();

function renderToDoList() {
let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]; // 1. Gets the task at the current index and stores it in the variable 'todo'
        console.log(todo); // 2. inputting into console for debugging. [i] === todoList[i] in the above line
        const html = `<p>${todo} <button onclick=" 
        todoList.splice(${i},1)
        renderToDoList();
        ">Delete</button></p>`;
        todoListHTML += html;
    };  //the last line adds the new line of HTML to the page when another task is created

    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML; //This replaces the old HTML. When an index is removed, the new HTML replaces the old one.
}; 

//Below is the function related to when the 'add' button is clicked.
function addToDo() {
    const inputElement = document.querySelector('.js-job-input'); //This line searches for the input box

    const name = inputElement.value; //Associates the users input as a variable

    todoList.push(name); //this takes the users input and adds it the end of the array
    console.log(todoList); //debugging

    inputElement.value = ''; //Clears the input box so it's empty after submitting

    renderToDoList(); //This line calls the function created above
}


