
let counterValue = document.getElementById("counterValue");

let counter = 0;

let counterTimer = function() {

let counterValue = document.getElementById("counterValue");

    counter = counter + 1;
    counterValue.textContent = counter;
};

let intervalId = setInterval(counterTimer, 1000);

// Write your code here
let clearBtnEl = document.getElementById("clearBtn");
clearBtnEl.onclick = function() {
    clearInterval(intervalId);
};