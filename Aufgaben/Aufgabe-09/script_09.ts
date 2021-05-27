window.addEventListener("load", function(): void {

    //Variablen
    const toDoList: HTMLUListElement = document.querySelector(".to-do-list");
    const addButton: HTMLElement = document.getElementById("add-Button");
    const toDoInput: HTMLInputElement = document.querySelector("#new-task");
    let zaehler: number = 0;
    let i: number;

    //interface
    interface ToDo {
        checked: boolean;
        text: string;
    }

    //Objekt
    let toDoArray: ToDo[] = [
      
    ];

    


    //Funktionen

    addButton.addEventListener("click", addToDo);
    toDoList.addEventListener("click", deleteCheck);


    function addToDo(event): void {

        event.preventDefault();

        const toDoDiv: HTMLDivElement = document.createElement("div");
        toDoDiv.classList.add("todo");

        const newToDo: HTMLElement = document.createElement("li");
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add("ToDo-item");
        toDoDiv.appendChild(newToDo);

        //Checkmark Button
        const checkedButton: HTMLElement = document.createElement("button");
        // tslint:disable-next-line: quotemark
        checkedButton.innerHTML = '<i class="fas fa-check"></i>';
        checkedButton.classList.add("completedButton");
        toDoDiv.appendChild(checkedButton);

        //trash Button
        const trashButton: HTMLElement = document.createElement("button");
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
    function deleteCheck(ele): void {

        const item = ele.target;

        if (item.classList[0] == "binButton") {
            const todo = item.parentElement;
            todo.remove();
            zaehler--;
            counter();

            console.log("löschen");
        }

        if (item.classList[0] == "completedButton") {
            const todo = item.parentElement;
            todo.setAttribute("style", "text-decoration: " + "line-through");
            todo.classList.toggle("completed");

            console.log("checken");
        }

    }


    // Taskcounter
    function counter(): void {
        document.querySelector("#counter").innerHTML = zaehler + " in total";
    }



});