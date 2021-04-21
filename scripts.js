const p = document.querySelector("p");
const texter = document.querySelector("#txt");
const sizer = document.querySelector("#font-size");
const colorer = document.querySelector("#color");
const root = document.querySelector(":root");

texter.addEventListener("keyup", (event) => {
  p.innerText = event.target.value;
});

sizer.addEventListener("input", (event) => {
  root.style.setProperty("--font-size", `${event.target.value}px`);
});

colorer.addEventListener("input", (event) => {
  root.style.setProperty("--color", event.target.value);
});
