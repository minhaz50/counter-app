// Select Dom Elements
counterEl = document.getElementById("counter");
incrementEl = document.getElementById("increment");
decrementEl = document.getElementById("decrement");

// initial value
let count = 0;

//Add event listner
incrementEl.addEventListener("click", () => {
  count++;
  counterEl.innerText = count;
});

decrementEl.addEventListener("click", () => {
  count--;
  counterEl.innerText = count;
});
