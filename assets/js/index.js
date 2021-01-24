// selectors
const fields = document.querySelector(".fields");
const box = document.querySelectorAll(".box");

// counting
let count = 0;
fields.addEventListener("click", (e) => {
   count += 1;
   e.target.innerHTML = count;

   // generate random number
   const randNumber = Math.floor(Math.random() * 10);

   // change DOM style
   if (randNumber === 1) {
      e.target.style.cssText = `
   background-color: #303952;
   color: green;
   font-size: 6rem;
   text-align: center;
   color: #ecf0f1;
   font-weight: bold;
   text-shadow: 3px 6px 9px #f5cd79`;
   } else if (randNumber === 2) {
      e.target.style.cssText = `
   background-color: #596275;
   color: green;
   font-size: 6rem;
   text-align: center;
   color: #ecf0f1;
   font-weight: bold;
   text-shadow: 3px 6px 9px #f5cd79`;
   } else if (randNumber === 3) {
      e.target.style.cssText = `
   background-color: #c44569;
   color: green;
   font-size: 6rem;
   text-align: center;
   color: #ecf0f1;
   font-weight: bold;
   text-shadow: 3px 6px 9px #f5cd79`;
   } else if (randNumber === 4) {
      e.target.style.cssText = `
   background-color: #cf6a87;
   color: green;
   font-size: 6rem;
   text-align: center;
   color: #ecf0f1;
   font-weight: bold;
   text-shadow: 3px 6px 9px #f5cd79`;
   } else if (randNumber === 5) {
      e.target.style.cssText = `
   background-color: #e77f67;
   color: green;
   font-size: 6rem;
   text-align: center;
   color: #ecf0f1;
   font-weight: bold;
   text-shadow: 3px 6px 9px #f5cd79`;
   } else if (randNumber === 6) {
      e.target.style.cssText = `
   background-color: #ea8685;
   color: green;
   font-size: 6rem;
   text-align: center;
   color: #ecf0f1;
   font-weight: bold;
   text-shadow: 3px 6px 9px #f5cd79`;
   } else if (randNumber === 7) {
      e.target.style.cssText = `
   background-color: #e66767;
   color: green;
   font-size: 6rem;
   text-align: center;
   color: #ecf0f1;
   font-weight: bold;
   text-shadow: 3px 6px 9px #f5cd79`;
   } else if (randNumber === 8) {
      e.target.style.cssText = `
   background-color: #574b90;
   color: green;
   font-size: 6rem;
   text-align: center;
   color: #ecf0f1;
   font-weight: bold;
   text-shadow: 3px 6px 9px #f5cd79`;
   } else if (randNumber === 9) {
      e.target.style.cssText = `
   background-color: #f3a683;
   color: green;
   font-size: 6rem;
   text-align: center;
   color: #ecf0f1;
   font-weight: bold;
   text-shadow: 3px 6px 9px #f5cd79`;
   }
});

// audio func
function play1() {
   document.getElementById("audio9").play();
}
function play2() {
   document.getElementById("audio2").play();
}
function play3() {
   document.getElementById("audio3").play();
}
function play4() {
   document.getElementById("audio4").play();
}
function play5() {
   document.getElementById("audio5").play();
}
function play6() {
   document.getElementById("audio6").play();
}
function play7() {
   document.getElementById("audio7").play();
}
function play8() {
   document.getElementById("audio8").play();
}
function play9() {
   document.getElementById("audio1").play();
}
