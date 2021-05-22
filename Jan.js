;
var jan = {
    name: "Jan Schweizer",
    alter: 21,
    haarfarbe: "rotblond",
    profilpic: "jan.jpg"
};
{
    checked: true,
        text;
    "blub";
}
{
    checked: true,
        text;
    "hallo";
}
var container = document.createElement("div");
container.classList.add("newElement");
document.body.appendChild(container);
document.querySelector("#addButton").addEventListener("click", function () {
    var toDoItem = {
        text: document.getElementById("textFeldTd").value,
        checked: false
    };
    toDoArray.unshift(toDoItem);
    for (var i = 0; i < toDoArray.length; i++) {
        var container = document.createElement("div");
        container.classList.add("newElement");
        container.textContent = toDoArray[0].text;
        document.body.appendChild(container);
    }
});
newElement;
{
    position: relative;
    background - color;
    blanchedalmond;
    font - size;
    25;
    px;
    font - family;
    'Segoe UI', Tahoma, Verdana, sans - serif;
    text - align;
    center;
    color: black;
    margin - left;
    31 % ;
    width: 500;
    px;
    height: 50;
    px;
}
position: relative;
background - color;
blanchedalmond;
font - family;
'Segoe UI', Tahoma, Verdana, sans - serif;
font - size;
18;
px;
left: 75 % ;
top: 200;
px;
width: 500;
px;
height: 50;
px;
document.querySelector("#new-tasks").addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        toDoArray.push({ text: document.getElementById("new-task").value, checked: false });
        List();
        toDoList.innerHTML = "";
    }
});
function List() {
    toDoList.innerHTML = "";
    var _loop_1 = function (i) {
        var element = toDoList[i];
        var liElement = document.createElement("li");
        var textnode = document.createTextNode(" " + element.text);
        liElement.append(textnode);
        var trashcan = document.createElement("i");
        trashcan.className = "far fa-trash-alt";
        trashcan.addEventListener("click", function () {
            toDoList = toDoList.filter(function (elem) {
                return elem != element;
            });
            showList();
        });
        liElement.append(trashcan);
        //liElement.innerHTML += " <i class='far fa-trash-alt'></i> ";
        toDoList.append(liElement);
    };
    for (var i = 0; i < toDoList.length; i++) {
        _loop_1(i);
    }
}
//# sourceMappingURL=Jan.js.map