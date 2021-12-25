
//this block of code is for enter key press
let input1 = document.querySelector('input');

input1.addEventListener('keyup', (event)=>{
    if(event.keyCode  === 13){
        addTodo();
    }
});

//this is the start of game!!!!!!!!!!!!

function addTodo(){
    //get text field input
    let input = document.getElementById('todoInput');
    let text = input.value.trim();
    input.value = "";
    //check if you press something or not
    if(text.length <= 0) return
    //get ul element
    let ul = document.getElementById('todo-container');
    //create li element
    let li = document.createElement('li');
    li.setAttribute('class', 'todoList');

    //create checkButton
    let buttonCheck = document.createElement('i');
    buttonCheck.setAttribute('class', "fas fa-check");
    buttonCheck.setAttribute('id',"chkID");
    buttonCheck.setAttribute("onclick", "checkLineThrough(this)");


    //create editbutton
    let buttonEdit = document.createElement('i');
    buttonEdit.setAttribute('class', "fas fa-edit");
    buttonEdit.setAttribute('id',"edtID");
    buttonEdit.setAttribute("onclick", "editItem(this)");


    //create deleteButton
    let button = document.createElement('i');
    button.setAttribute('class', "fas fa-trash");
    button.setAttribute('id',"delID");
    button.setAttribute("onclick", "deleteItem(this)");


    li.innerText = text;
    //append childs
    ul.appendChild(li);
    li.appendChild(button);
    li.appendChild(buttonEdit);
    li.appendChild(buttonCheck);

}
//function to delete task
function deleteItem(parameter){
    parameter.parentNode.remove();
    
}
//function to line-throug task
function lineThroughItem(parameter1){
    parameter1.style.color = "green";
    parameter1.parentNode.style.textDecoration = "line-through";
    parameter1.parentNode.style.color = "green";
    
}
//function to edit task
function editItem(parameter2){
    let editItem = parameter2.parentNode.innerText;
    deleteItem(parameter2);
    input1.value = editItem;
    // parameter2.parentNode.innerText = input1.value;
}
//function to check lineThrough
function checkLineThrough(parameter3){
    if(parameter3.style.color === "green"){
        parameter3.style.color = "royalblue";
        parameter3.parentNode.style.textDecoration = "none";
        parameter3.parentNode.style.color =  "royalblue";
    }
    else{
        lineThroughItem(parameter3);
    }
}
