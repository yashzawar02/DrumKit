for(let i=0; i<7; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handler); 
}

let audio;
whichkey();

//anonymous function can be added as a second parameter

function handler() {
    let key = this.innerHTML;
    switchCase(key);
    animation(key);
}

function whichkey() {
    document.addEventListener("keypress", function(event){
        let keyPressed = event.key;
        switchCase(keyPressed);
        animation(keyPressed);
    });
}

function switchCase(key){
        
    switch(key) {
        case "w":
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "a":
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        
        case "s":
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case "d":
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;


        case "j":
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "k":
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "l":
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        default:
            alert("Press the correct key");
    }
}

function animation(currentKey) {
    let activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
}

