const box = document.querySelector(".span");

function block() {
  setInterval(() => {
    box.style.color = randomColor();
    // box.style.transform = "scale(1.2)";
  }, 1840);
}
block();
// const container = document.querySelector(".container");
// const active = document.querySelector(".active");
// const close = document.querySelector(".close");

// let n = 601;
// for (let i = 1; i < n; i++) {
//   const square = document.createElement("div");
//   square.setAttribute("class", "square");
//   container.append(square);
//   square.addEventListener("mouseover", () => {
//     square.style.background = randomColor();
//     square.style.transform = "scale(1.2)";
//     square.style.boxShadow = `0 3px 5px 0 ${randomColor()}`;
//   });
//   square.addEventListener("mouseleave", () => {
//     square.style.background = "";
//     square.style.transform = "";
//     square.style.boxShadow = "";
//   });
//   active.addEventListener("click", function () {
//     square.style.background = randomColor();
//   });
//   close.addEventListener("click", () => {
//     square.style.background = "";
//   });
// }

function randomColor() {
  let num = "#";
  for (i = 1; i <= 6; i++) {
    num += Math.floor(Math.random() * 10);
  }
  return num;
}
