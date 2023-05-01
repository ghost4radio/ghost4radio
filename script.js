window.onbeforeunload = function () {return "Biztos kilépsz? Az oldal legközelebbi betöltésénél a lejátszó ugorhat.";}
var audio = document.getElementById("play");
var v = document.getElementById("myRange");
var playButton = document.getElementById("c1");
var muteButton = document.getElementById("c2");
var video = document.getElementById("start");
var mainContent = document.getElementById("main");
const animation = document.querySelector('#start');

let files = 369;
let vol = v.value / 100;
let last = -1;
let rng;
let played = [];
let paused = false;


var zene = new BuildArray(files);
document.writeln("<script type='text/javascript' src='g4r_track.js'></script>");
function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

animation.addEventListener("animationend", () => {
    mainContent.style.zIndex = 100;
    video.style.zIndex = -1;
    video.remove();
});



audio.onended = function() {  
   do {
       if(played.length == files-1) {
           played = [];
       }
       rng = Math.floor(Math.random() * files) + 1;
  } while(rng == last || played.includes(rng));

   audio.volume = vol;
   audio.setAttribute("src", `./zenek/${rng}.mp3`);
   audio.volume = vol;
   played.push(rng);
   last = rng;

   if(zene[rng] !== null && zene[rng].length > 1) {
    document.getElementById("aktualis").innerHTML = `<span>${zene[rng]}<span>`
    document.getElementById("icon").style.filter = "grayscale(0)";
    document.getElementById("icon").style.cursor = "pointer";
   } else if (played.length == 1) {
        document.getElementById("icon").style.filter = "grayscale(0)";
        document.getElementById("icon").style.cursor = "pointer";
   } else {
        document.getElementById("aktualis").innerHTML = `<span> Műsorszünet <span>`
        document.getElementById("icon").style.filter = "grayscale(1)";
        document.getElementById("icon").style.cursor = "unset";
   }
   muteButton.src = "volume.png";
}

function setVol() {
   audio.volume = v.value / 100;
}

function lower() {
   audio.volume = v.value / 100;
}

function skip() {
    if(!zene[rng]) return;   
    if(zene[rng] !== null && zene[rng].length > 1) {
        audio.onended();
    } else {
     document.getElementById("aktualis").innerHTML = `<span> Műsorszünet <span>`
     document.getElementById("icon").style.filter = "grayscale(1)";
     document.getElementById("icon").style.cursor = "unset";
    }
    muteButton.src = "volume.png";
}

function isPaused() {
    if(paused) {
        audio.play();
         playButton.src = "pause.png";
         paused = false;
        }  else {
            audio.pause();
            playButton.src = "play.png";
            paused = true;
        }
}

function isMuted() {
    if(audio.volume == 0) {
        audio.volume = v.value / 100;
        muteButton.src = "volume.png";
    } else {
        audio.volume = 0;
        muteButton.src = "mute.png"
    }
}


(() => {
    audio.onended();
})();

function getV(response) {
    console.log("Látogatók száma összesen: " + response.value);
}
