window.addEventListener("load", function () {
    var beats = [new Audio('sounds/A.mp3'), new Audio('sounds/C.mp3'), new Audio('sounds/F.mp3'), new Audio('sounds/G.mp3'), new Audio('sounds/hihat.mp3'), new Audio('sounds/kick.mp3'), new Audio('sounds/laugh-1.mp3'), new Audio('sounds/laugh-2.mp3'), new Audio('sounds/snare.mp3')];
    document.querySelector('.button1').addEventListener('click', function () { playSound("sounds/A.mp3"); });
    document.querySelector('.button2').addEventListener('click', function () { playSound("sounds/C.mp3"); });
    document.querySelector('.button3').addEventListener('click', function () { playSound("sounds/F.mp3"); });
    document.querySelector('.button4').addEventListener('click', function () { playSound("sounds/G.mp3"); });
    document.querySelector('.button5').addEventListener('click', function () { playSound("sounds/hihat.mp3"); });
    document.querySelector('.button6').addEventListener('click', function () { playSound("sounds/kick.mp3"); });
    document.querySelector('.button7').addEventListener('click', function () { playSound("sounds/laugh-1.mp3"); });
    document.querySelector('.button8').addEventListener('click', function () { playSound("sounds/laugh-2.mp3"); });
    document.querySelector('.button9').addEventListener('click', function () { playSound("sounds/snare.mp3"); });
    function playSound(sample_mp3) {
        var sound = new Audio(sample_mp3);
        sound.play();
    }
    ;
    var drumMachine = [beats[5], beats[8], beats[5], beats[5], beats[8]];
    var PositionImArray = 0;
    document.querySelector('#playButton').addEventListener('click', function () {
        setInterval(function machine() {
            drumMachine[PositionImArray].play();
            PositionImArray += 1;
            if (PositionImArray > 4)
                PositionImArray = 0;
        }, 200);
    });
});
//# sourceMappingURL=script_07.js.map