window.onbeforeunload = function () {return "Biztos kilépsz? Az oldal legközelebbi betöltésénél a lejátszó ugorhat.";}
var audio = document.getElementById("play");
var v = document.getElementById("myRange");

let files = 130;
let vol = v.value / 100;
let last = -1;
let rng;

let pics = ["https://cdn.discordapp.com/attachments/703649334612328578/952614422688464896/kriszhadvice3.png", "https://cdn.discordapp.com/attachments/703649334612328578/952880698799325214/cumighost.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612971689943040/html1.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612972038074408/html2.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612972293914704/html3.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612972604317766/html4.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612973137002577/html5.png", "https://cdn.discordapp.com/attachments/703649334612328578/952612973380268102/html6.png", "https://cdn.discordapp.com/attachments/703649334612328578/952880699092906014/html7.png"];

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

audio.onended = function() {  
   do {
       rng = Math.floor(Math.random() * files) + 1;
  } while(rng == last);

   audio.volume = vol;
   audio.setAttribute("src", `${rng}.mp3`);
   audio.volume = vol;

   last = rng;
}

function setVol() {
   audio.volume = v.value / 100;
}

function lower() {
   audio.volume = v.value / 100;
}
