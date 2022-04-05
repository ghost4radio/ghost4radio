window.onbeforeunload = function () {return "Biztos kilépsz? Az oldal legközelebbi betöltésénél a lejátszó ugorhat.";}
var audio = document.getElementById("play");
var v = document.getElementById("myRange");

let files = 223;
let vol = v.value / 100;
let last = -1;
let rng;
let played = [];

let pics = ["https://cdn.discordapp.com/attachments/703649334612328578/952614422688464896/kriszhadvice3.png", "https://cdn.discordapp.com/attachments/703649334612328578/952880698799325214/cumighost.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612971689943040/html1.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612972038074408/html2.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612972293914704/html3.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612972604317766/html4.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612973137002577/html5.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612973380268102/html6.png", "https://cdn.discordapp.com/attachments/703649334612328578/952880699092906014/html7.png", "https://cdn.discordapp.com/attachments/703649334612328578/954666506648715304/html8.gif"];

let r1 = Math.floor(Math.random() * pics.length);
let r2 = Math.floor(Math.random() * pics.length);
document.getElementById("pic1").src = pics[r1];
document.getElementById("pic2").src = pics[r2];

setInterval(() => {
    r1 = Math.floor(Math.random() * pics.length);
    r2 = Math.floor(Math.random() * pics.length);
    document.getElementById("pic1").src = pics[r1];
    document.getElementById("pic2").src = pics[r2];
}, 50000);

var zene = new BuildArray(files)
document.writeln("<script type='text/javascript' src='g4r_track.js'></script>");
function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

audio.onended = function() {  
   do {
       if(played.length == files-1) {
           played = [];
       }
       rng = Math.floor(Math.random() * files) + 1;
  } while(rng == last || played.includes(rng));

   audio.volume = vol;
   audio.setAttribute("src", `${rng}.mp3`);
   audio.volume = vol;
   played.push(rng);
   last = rng;

   if(zene[rng] !== null && zene[rng].length > 1) {
    document.getElementById("aktualis").innerHTML = `<span>${zene[rng]}<span>`
    document.getElementById("icon").style.filter = "grayscale(0)";
    document.getElementById("icon").style.cursor = "pointer";
   } else {
    document.getElementById("aktualis").innerHTML = `<span> Műsorszünet <span>`
    document.getElementById("icon").style.filter = "grayscale(1)";
    document.getElementById("icon").style.cursor = "unset";
   }
}

function setVol() {
   audio.volume = v.value / 100;
}

function lower() {
   audio.volume = v.value / 100;
}

function skip() {
    let rando = Math.floor(Math.random() * 200) + 1;
    if(rando == 10) {
         window.open('https://www.youtube.com/watch?v=zOQfabYBtM0');
    }
    if(!zene[rng]) return;   
    if(zene[rng] !== null && zene[rng].length > 1) {
        audio.onended();
    } else {
     document.getElementById("aktualis").innerHTML = `<span> Műsorszünet <span>`
     document.getElementById("icon").style.filter = "grayscale(1)";
     document.getElementById("icon").style.cursor = "unset";
    }
}
