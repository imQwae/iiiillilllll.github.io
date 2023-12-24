const mainPage = document.querySelector(".main");
const playBtn = document.querySelector(".playBtn");
const home = document.querySelector("#home");
const playPage = document.querySelector(".playPage");

function goPlay() {
  mainPage.classList.toggle("papop");
  playPage.classList.toggle("papop");
}

function goHome() {
  playPage.classList.add("papop");
  mainPage.classList.remove("papop");
}

playBtn.addEventListener("click", goPlay);
home.addEventListener("click", goHome);
