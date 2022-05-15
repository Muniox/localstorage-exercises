const buttonStorage = document.getElementById("counterSorage");
const getCounter = Number(localStorage.getItem("counter"));
// const body = document.getElementsByTagName("body");
// if (!getCounter) {
//   localStorage.setItem("counter", "0");
// }
let mydisplay = document.createElement("p");
mydisplay.innerHTML = 0;
document.body.appendChild(mydisplay);

buttonStorage.addEventListener("click", () => {
  let counter = localStorage.getItem("counter");
  counter = ++counter;
  localStorage.setItem("counter", counter.toString());

  mydisplay.textContent = Number(localStorage.getItem("counter"));
});
