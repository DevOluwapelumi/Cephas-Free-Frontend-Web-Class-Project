//variables
const hamburger = document.querySelector(".nav__hamburger");
const lines = document.querySelectorAll(".nav__hamburger-line");
const nav = document.querySelector(".nav__mobile");



//lines make cross
const crsosLines = () =>{
    lines.forEach(async (line)  => {
      line.classList.toggle("close");
    });
}

//toggle mbiled menu
hamburger.addEventListener("click", () => {
    crsosLines()
  nav.classList.toggle("show");
 
});