window.addEventListener("load", function () {
    //Variablen deklarieren
    var start = document.querySelector(".start");
    var cardButton = document.querySelector(".cardButton");
    var interaction1;
    var interaction2;
    var interaction3;
    var interaction4;
    var everything = document.querySelector(".everything");
    var hilfeAnzeige = document.querySelector(".hilfeAnzeige");
    var kontoAnzeige = document.querySelector(".kontoAnzeige");
    var pinConditions = [{ pinNumber: 6 }, { pinNumber: 7 }, { pinNumber: 8 }, { pinNumber: 9 }];
    cardButton.addEventListener("click", action);
    function action() {
        start.innerHTML = "";
        interaction1 = document.createElement("button");
        interaction1.classList.add("auszahlen");
        interaction1.innerHTML = "Geld auszahlen";
        interaction1.addEventListener("click", pinFunction);
        interaction2 = document.createElement("button");
        interaction2.classList.add("einzahlen");
        interaction2.innerHTML = "Geld einzahlen";
        interaction2.addEventListener("click", pinFunction);
        interaction3 = document.createElement("button");
        interaction3.classList.add("Kontostand");
        interaction3.innerHTML = "Kontostand & Umsatzanzeige";
        interaction3.addEventListener("click", pinFunction);
        interaction4 = document.createElement("button");
        interaction4.classList.add("Hilfe");
        interaction4.innerHTML = "Hilfe";
        interaction4.addEventListener("click", hilfeFunction);
        everything.appendChild(interaction1);
        everything.appendChild(interaction2);
        everything.appendChild(interaction3);
        everything.appendChild(interaction4);
    }
    function hilfeFunction() {
        everything.innerHTML = "";
        var helpText;
        helpText = document.createElement("p");
        helpText.innerHTML = "Bitte wenden sie sich bei Problemen mit ihrer Karte oder bei Schwiergkeiten mit dem Automaten an unser Personal oder rufen sie unetr folgenden Nummer an : 01253 753868";
        hilfeAnzeige.appendChild(helpText);
    }
    function pinFunction() {
        everything.innerHTML = "";
    }
});
//# sourceMappingURL=typescript.js.map