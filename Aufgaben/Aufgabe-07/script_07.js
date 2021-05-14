// tslint:disable-next-line: typedef
window.addEventListener("load", function () {
    var beats = [new Audio("sounds/A.mp3"), new Audio("sounds/C.mp3"), new Audio("sounds/F.mp3"), new Audio("sounds/G.mp3"), new Audio("sounds/hihat.mp3"), new Audio("sounds/kick.mp3"), new Audio("sounds/laugh-1.mp3"), new Audio("sounds/laugh-2.mp3"), new Audio("sounds/snare.mp3")];
    // tslint:disable-next-line: typedef
    document.querySelector(".button1").addEventListener("click", function () { playSound("sounds/A.mp3"); });
    // tslint:disable-next-line: typedef
    document.querySelector(".button2").addEventListener("click", function () { playSound("sounds/C.mp3"); });
    // tslint:disable-next-line: typedef
    document.querySelector(".button3").addEventListener("click", function () { playSound("sounds/F.mp3"); });
    // tslint:disable-next-line: typedef
    document.querySelector(".button4").addEventListener("click", function () { playSound("sounds/G.mp3"); });
    // tslint:disable-next-line: typedef
    document.querySelector(".button5").addEventListener("click", function () { playSound("sounds/hihat.mp3"); });
    // tslint:disable-next-line: typedef
    document.querySelector(".button6").addEventListener("click", function () { playSound("sounds/kick.mp3"); });
    // tslint:disable-next-line: typedef
    document.querySelector(".button7").addEventListener("click", function () { playSound("sounds/laugh-1.mp3"); });
    // tslint:disable-next-line: typedef
    document.querySelector(".button8").addEventListener("click", function () { playSound("sounds/laugh-2.mp3"); });
    // tslint:disable-next-line: typedef
    document.querySelector(".button9").addEventListener("click", function () { playSound("sounds/snare.mp3"); });
    // tslint:disable-next-line: typedef
    function playSound(sampleMP3) {
        var sound = new Audio(sampleMP3);
        sound.play();
    }
    var drumMachine = [beats[5], beats[8], beats[5], beats[5], beats[8]];
    // tslint:disable-next-line: variable-name
    var PositionImArray = 0;
    // tslint:disable-next-line: typedef
    document.querySelector("#playButton").addEventListener("click", function () {
        setInterval(
        // tslint:disable-next-line: typedef
        function machine() {
            drumMachine[PositionImArray].play();
            PositionImArray += 1;
            if (PositionImArray > 4)
                PositionImArray = 0;
            console.log(PositionImArray);
        }
        // tslint:disable-next-line: align
        , 200);
    });
});
//# sourceMappingURL=script_07.js.map