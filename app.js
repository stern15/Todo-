var InputUser = prompt("what do you want to do?");
var Todo = [];
while (InputUser !== "quit") {
    //displaying the input from the array
    if (InputUser === "list") {
        listTodo();
    }
    //adding a new Todo
    else if (InputUser === "new") {
        addTodo();
    }
    //delete in the Todo
    else if (InputUser === "delete") {
        deleteTodo();
    }
    //asking again for a new input
    InputUser = prompt("what do you want to do?");
}
console.log("ok,you have quit the app");

function listTodo() {
    console.log("* * * * * * * * * * * * * * * * * * * * * * * * * *");
    Todo.forEach(function (each, i) {
        console.log(i + " : " + each);
    });
    console.log("* * * * * * * * * * * * * * * * * * * * * * * * * *");
}

function addTodo() {
    var InputTodo = prompt("Please enter your Todo");
    Todo.push(InputTodo);
    console.log("Successfully added Todo");
}

function deleteTodo() {
    var deleteIndex = prompt("please enter the index of the element to be deleted");
    Todo.splice(deleteIndex, 1);
    console.log("Successfully deleted Todo");
}
