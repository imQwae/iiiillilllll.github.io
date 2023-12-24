const mainPage = document.querySelector(".main");
const playBtn = document.querySelector(".playBtn");
const home = document.querySelector("#home");
const playPage = document.querySelector(".playPage");
const qflix = document.querySelector(".logo");

function goPlay() {
  mainPage.classList.toggle("papop");
  playPage.classList.toggle("papop");

  console.log("????");
}

function goHome() {
  playPage.classList.toggle("papop");
  mainPage.classList.toggle("papop");

  console.log("!!!!");
}

playBtn.addEventListener("click", goPlay);
home.addEventListener("click", goHome);
qflix.addEventListener("click", goHome);
