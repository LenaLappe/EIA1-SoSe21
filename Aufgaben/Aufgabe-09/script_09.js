window.addEventListener("load", function () {
    //Variablen
    var toDoList = document.querySelector(".to-do-list");
    var addButton = document.getElementById("add-Button");
    var toDoInput = document.querySelector("#new-task");
    var zaehler = 0;
    var i;
    //Objekt
    var toDoArray = [];
    //Funktionen
    addButton.addEventListener("click", addToDo);
    toDoList.addEventListener("click", deleteCheck);
    function addToDo(event) {
        event.preventDefault();
        var toDoDiv = document.createElement("div");
        toDoDiv.classList.add("todo");
        var newToDo = document.createElement("li");
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add("ToDo-item");
        toDoDiv.appendChild(newToDo);
        //Checkmark Button
        var checkedButton = document.createElement("button");
        // tslint:disable-next-line: quotemark
        checkedButton.innerHTML = '<i class="fas fa-check"></i>';
        checkedButton.classList.add("completedButton");
        toDoDiv.appendChild(checkedButton);
        //trash Button
        var trashButton = document.createElement("button");
        // tslint:disable-next-line: quotemark
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("binButton");
        toDoDiv.appendChild(trashButton);
        toDoList.appendChild(toDoDiv);
        //clear input value
        toDoInput.value = "";
        //counter of the tasks
        zaehler++;
        counter();
    }
    //Buttons
    function deleteCheck(ele) {
        var item = ele.target;
        if (item.classList[0] == "binButton") {
            var todo = item.parentElement;
            todo.remove();
            zaehler--;
            counter();
            console.log("löschen");
        }
        if (item.classList[0] == "completedButton") {
            var todo = item.parentElement;
            todo.setAttribute("style", "text-decoration: " + "line-through");
            todo.classList.toggle("completed");
            console.log("checken");
        }
    }
    // Taskcounter
    function counter() {
        document.querySelector("#counter").innerHTML = zaehler + " in total";
    }
});
//# sourceMappingURL=script_09.js.map