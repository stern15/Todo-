//Todo array that will holds all the Todo
var Todo = [];
//user selection at the beginning
var UserIn = prompt("please enter what you want to do");
//while the condition is not quit it will loop again and again
while (UserIn.indexOf("quit") === -1) {
    //if with the user input the is a "new" word,it will launch this if statement
    if (UserIn.indexOf("new") !== -1) {
        //calling this method
        creatingTodo();
    }
    //if with the user input the is a "list" word,it will launch this else if statement
    else if (UserIn.indexOf("list") !== -1) {
        //calling this method
        listTodo();

    }
    //if with the user input the is a "delete" word,it will launch this else if statement
    else if (UserIn.indexOf("delete") !== -1) {
        //calling this method
        deleteTodo();
    }
    //after executing one of the statement above,it will prompt again this
    var UserIn = prompt("please enter what you want to do");
}
//display this after quitting the app
console.log("Ok,you have existed the app");

function creatingTodo() {
    var newTodo = prompt("please enter your new Todo");
    //adding to the array Todo from what the users have added in the prompt
    Todo.push(newTodo);
    //inform that the Todo have been successfully added
    console.log("Successfully added the Todo");
}

function listTodo() {
    //decoration
    console.log("*****************************");
    //loop through the array using forEach and adding the second argument(as index which is always a number) and assign it the Todo
    Todo.forEach(function (each, i) {
            console.log(i + " : " + each);
        })
        //decoration
    console.log("*****************************");
}


function deleteTodo() {
    var selectIn = prompt("please enter an index of the Todo to delete");
    //to delete the Todo in the array,the second argument is how many of the index have to be deleted
    Todo.splice(selectIn, 1);
    //a message that tells that the index has been deleted
    console.log("successfully deleted the selected Todo");
}
