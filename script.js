const isi = `Hai Sayang ❤️

Aku cuma mau bilang...

Makasih ya...

Udah hadir di hidupku.

Mungkin aku bukan orang yang sempurna.

Tapi aku bakal selalu berusaha buat jadi orang yang buat kamu senyum.

Aku harap kita selalu bersama.

❤️`;

let i = 0;

function mulai(){

document.querySelector("button").style.display="none";

document.getElementById("judul").style.display="none";

document.getElementById("surat").style.display="block";

// Putar musik
const musik = document.getElementById("musik");

musik.play().catch(err => {
    console.log(err);
});

ketik();

}

function ketik(){

if(i<isi.length){

    document.getElementById("surat").innerHTML += isi.charAt(i);

    i++;

    setTimeout(ketik,45);

}else{

    setTimeout(tampilGaleri,1500);

}

}
const gambar = [
    "foto1.png",
    "foto2.png",
    "foto3.png"
];

let indexFoto = 0;

function tampilGaleri() {

    document.getElementById("galeri").style.display = "block";

    setInterval(() => {

        indexFoto++;

        if (indexFoto >= gambar.length) {
            indexFoto = 0;
        }

        const foto=document.getElementById("foto");

foto.style.animation="none";

void foto.offsetWidth;

foto.src=gambar[indexFoto];

foto.style.animation="polaroid .8s";

    }, 2500);

}

// Membuat bintang
for(let i=0;i<120;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

document.getElementById("stars").appendChild(star);

}

// Hati jatuh
setInterval(()=>{

let love=document.createElement("div");

love.className="love";

love.innerHTML="❤️";

love.style.left=Math.random()*100+"vw";

love.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(love);

setTimeout(()=>{

love.remove();

},6000);

},500);

function mulaiCountdown(){

document.getElementById("countdown").style.display="block";

// GANTI tanggal ini dengan tanggal jadian kalian
const tanggalJadian = new Date("2026-07-01");

setInterval(()=>{

const sekarang = new Date();

const selisih = sekarang - tanggalJadian;

const hari = Math.floor(selisih / (1000*60*60*24));

const jam = Math.floor((selisih/(1000*60*60))%24);

const menit = Math.floor((selisih/(1000*60))%60);

document.getElementById("waktu").innerHTML =
`${hari} Hari ${jam} Jam ${menit} Menit ❤️`;

},1000);

}
setTimeout(() => {

document.getElementById("akhir").style.display="block";

},10000);

const enggak=document.getElementById("enggak");

enggak.addEventListener("mouseover",()=>{

enggak.style.position="absolute";

enggak.style.left=Math.random()*70+"%";

enggak.style.top=Math.random()*70+"%";

});

document.getElementById("iya").onclick = function () {

    firework();

    document.getElementById("ring").style.display = "block";

    setTimeout(() => {

        document.getElementById("ring").style.display = "none";

        document.querySelector(".container").style.display = "none";

        document.getElementById("ending").style.display = "flex";

    },2200);

}
function peluk(){

for(let i=0;i<200;i++){

const love=document.createElement("div");

love.innerHTML="💖";

love.className="love";

love.style.left=Math.random()*100+"vw";

love.style.fontSize=(20+Math.random()*40)+"px";

document.body.appendChild(love);

setTimeout(()=>{

love.remove();

},5000);

}

alert("🤗 Peluk Virtual Terkirim!\nAku Sayang Kamu ❤️");

}
// ==========================
// Sakura Berjatuhan
// ==========================

setInterval(()=>{

const sakura=document.createElement("div");

sakura.className="sakura";

sakura.innerHTML="🌸";

sakura.style.left=Math.random()*100+"vw";

sakura.style.fontSize=(18+Math.random()*20)+"px";

sakura.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(sakura);

setTimeout(()=>{

sakura.remove();

},11000);

},350);
// ================= FIREWORK =================

function firework(){

    for(let i=0;i<60;i++){

        const fw=document.createElement("div");

        fw.className="firework";

        fw.style.left=(window.innerWidth/2 +
            (Math.random()-0.5)*400)+"px";

        fw.style.top=(window.innerHeight/2 +
            (Math.random()-0.5)*400)+"px";

        fw.style.background=`hsl(${Math.random()*360},100%,60%)`;

        document.body.appendChild(fw);

        setTimeout(()=>{
            fw.remove();
        },1000);

    }

}
// ==========================
// Cursor Love
// ==========================

document.addEventListener("mousemove",(e)=>{

const love=document.createElement("div");

love.className="cursor-love";

love.innerHTML="💖";

love.style.left=e.clientX+"px";

love.style.top=e.clientY+"px";

document.body.appendChild(love);

setTimeout(()=>{

love.remove();

},700);

});