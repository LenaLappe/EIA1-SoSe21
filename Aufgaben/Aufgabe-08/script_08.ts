// tslint:disable-next-line: typedef
window.addEventListener("load", function() {

    

    let beats: HTMLAudioElement[] = [new Audio("sounds/A.mp3"), new Audio("sounds/C.mp3"), new Audio("sounds/F.mp3"), new Audio ("sounds/G.mp3"), new Audio("sounds/hihat.mp3"), new Audio ("sounds/kick.mp3"), new Audio ("sounds/laugh-1.mp3"), new Audio ("sounds/laugh-2.mp3"), new Audio ("sounds/snare.mp3")]; 



    document.querySelector(".button1").addEventListener("click", function(): void {playSound("sounds/A.mp3"); });
    document.querySelector(".button2").addEventListener("click", function(): void {playSound("sounds/C.mp3"); });
    document.querySelector(".button3").addEventListener("click", function(): void {playSound("sounds/F.mp3"); });
    document.querySelector(".button4").addEventListener("click", function(): void {playSound("sounds/G.mp3"); });
    document.querySelector(".button5").addEventListener("click", function(): void {playSound("sounds/hihat.mp3"); });
    document.querySelector(".button6").addEventListener("click", function(): void {playSound("sounds/kick.mp3"); });
    document.querySelector(".button7").addEventListener("click", function(): void {playSound("sounds/laugh-1.mp3"); });
    document.querySelector(".button8").addEventListener("click", function(): void {playSound("sounds/laugh-2.mp3"); });
    document.querySelector(".button9").addEventListener("click", function(): void {playSound("sounds/snare.mp3"); });

    let index: number = 0;

    function playSound(beats) {

    var sound: HTMLAudioElement = new Audio(beats);
    sound.play();
    }


    var drumMachine: HTMLAudioElement[] = [beats[5], beats[8], beats[5], beats[5], beats[8] ];


    document.querySelector("#playButton").addEventListener("click", function(): void {
        
    var drumMachine: number = setInterval(function myInterval(): void {

                playSound(
        
                    beats[index]);
                index += 1;

                if (index > 4)
                index = 0;

                console.log ("Hallo");




                document.querySelector("#stopButton").addEventListener("click", function(): void {
        
                    clearInterval(drumMachine);
                });
                
    });
    

    document.querySelector("#playButton").addEventListener("click", function(): void {
                    document.querySelector("#playButton").classList.add("is-hidden");
                    document.querySelector("#stopButton").classList.remove("is-hidden");
                });


    document.querySelector("#stopButton").addEventListener("click", function(): void {
                    document.querySelector("#stopButton").classList.add("is-hidden");
                    document.querySelector("#playButton").classList.remove("is-hidden");
                });
             
                
    document.querySelector("delete_Button").addEventListener("click", function(): void {
                    beats.length = 0;
                });


    });    

});
