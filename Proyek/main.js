const header1 = document.querySelector("header");
const body = document.querySelector("body");
const tulisanGelap = document.querySelector(".gelap");
const buttonlight = document.querySelector(".lightButton");
const buttondark = document.querySelector(".darkButton");
const switchWarna = document.querySelector(".identity");
const switchcontainer = document.querySelector(".container");
const switcheducation = document.querySelector(".education");
const switchskills = document.querySelector(".skills");
const switchexperience = document.querySelector(".experience");
const switchnama = document.querySelector(".nama");
const switchidentify1 = document.querySelector(".identifier1");
const switchidentify2 = document.querySelector(".identifier2");
const switchidentify3 = document.querySelector(".identifier3");

function buttonDark()
{
    header1.style.backgroundColor = "brown";
    body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.le9Ob-aQ-QMfcFW-g3J6zwHaLY?w=201&h=309&c=7&r=0&o=5&dpr=1.25&pid=1.7')";
    tulisanGelap.innerHTML = "Mode Kegelapan"; 
    switchWarna.style.color = "yellow";
    switchcontainer.style.backgroundColor = "green";
    buttonlight.style.display = "flex";
    buttondark.style.display = "none";
    switcheducation.style.backgroundColor = "crimson";
    switchskills.style.backgroundColor = "crimson";
    switchexperience.style.backgroundColor = "crimson";
    switchnama.style.color = "white";
    switcheducation.style.color = "white";
    switchskills.style.color = "white";
    switchexperience.style.color = "white";
}
function buttonLight()
{
    header1.style.backgroundColor = "green";
    body.style.backgroundImage = "url('https://www.bing.com/th?id=OIP.z8SkHzJJ7G-lp7t6ZuzYawHaE7&w=157&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2')";
    tulisanGelap.innerHTML = "";
    switchWarna.style.color = "black";
    switchcontainer.style.backgroundColor = "crimson";
    switcheducation.style.backgroundColor = "green";
    switchskills.style.backgroundColor = "green";
    switchexperience.style.backgroundColor = "green";
    buttonlight.style.display = "none";
    buttondark.style.display = "flex";
    switchnama.style.color = "black";
    switcheducation.style.color = "black";
    switchexperience.style.color = "black";
    switchskills.style.color = "black";
}
function pindah()
{
    window.location.href = "file:///C:/Users/Hp/Documents/HTML/Proyek/index.html";
}