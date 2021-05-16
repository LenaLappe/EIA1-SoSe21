// tslint:disable-next-line: typedef
window.addEventListener("load", function() {

    //Variablen

    let allSounds: string[] = ["sounds_02/A.mp3", "sounds_02/C.mp3", "sounds_02/F.mp3",  "sounds_02/G.mp3", "sounds_02/hihat.mp3", "sounds_02/kick.mp3", "sounds_02/laugh-1.mp3", "sounds_02/laugh-2.mp3", "sounds_02/snare.mp3"]; 
    let beats: string[] = [allSounds[5], allSounds[8], allSounds[5], allSounds[5], allSounds[8]];
    let index: number = 0;
    let interval: number;
    var buttons = document.querySelector(".B");
    var play = document.getElementById("playButton");
    var stop = document.getElementById("stopButton");
    var trash = document.getElementById("trashButton");


    document.querySelector(".button1").addEventListener("click", function(): void {playSound("sounds_02/A.mp3"); });
    document.querySelector(".button2").addEventListener("click", function(): void {playSound("sounds_02/C.mp3"); });
    document.querySelector(".button3").addEventListener("click", function(): void {playSound("sounds_02/F.mp3"); });
    document.querySelector(".button4").addEventListener("click", function(): void {playSound("sounds_02/G.mp3"); });
    document.querySelector(".button5").addEventListener("click", function(): void {playSound("sounds_02/hihat.mp3"); });
    document.querySelector(".button6").addEventListener("click", function(): void {playSound("sounds_02/kick.mp3"); });
    document.querySelector(".button7").addEventListener("click", function(): void {playSound("sounds_02/laugh-1.mp3"); });
    document.querySelector(".button8").addEventListener("click", function(): void {playSound("sounds_02/laugh-2.mp3"); });
    document.querySelector(".button9").addEventListener("click", function(): void {playSound("sounds_02/snare.mp3"); });

   
    //Funktionen und Schleifen

    // tslint:disable-next-line: typedef
    function playSound(sampleMP3) {

    var sound: HTMLAudioElement = new Audio(sampleMP3);
    sound.play();
    }

    document.querySelector("#playButton").addEventListener("click", function(): void {
        var drumMachine: number = setInterval(function myInterval(): void { 

            playSound(
        
                beats[index]);
            index += 1;

            if (index > 4) {index = 0; }


            console.log ("play");
            console.log(index);

        },                                    250);

    
        document.querySelector("#stopButton").addEventListener("click", function(): void {
        clearInterval(drumMachine);

        console.log ("stop");
        });
    });
   




    
    //Buttons

    document.querySelector("#playButton").addEventListener("click", function(): void {
                    document.querySelector("#playButton").classList.add("is-hidden");
                    document.querySelector("#stopButton").classList.remove("is-hidden");
                });


    document.querySelector("#stopButton").addEventListener("click", function(): void {
                    document.querySelector("#stopButton").classList.add("is-hidden");
                    document.querySelector("#playButton").classList.remove("is-hidden");
                });
             
                
    document.querySelector("#trashButton").addEventListener("click", function(): void {
                    beats = [];

                    console.log ("löschen");
                });


    document.querySelector("#remixButton").addEventListener("click", function(): void {

                    var drumMachine: number = setInterval(function(): void {
                        playSound(
                            allSounds[index]);

                        index = Math.floor(Math.random() * 9);

                        console.log (index);

                    },                                    500);
                });



});
