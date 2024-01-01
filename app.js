let buttons = document.getElementById("buttons")
buttons.style.backgroundColor = "teal"

document.getElementById("black").addEventListener("click", function() {
    buttons.style.backgroundColor = "black"
})

document.getElementById("white").addEventListener("click", function() {
    buttons.style.backgroundColor = "white"
})

document.getElementById("red").addEventListener("click", function() {
    buttons.style.backgroundColor = "red"
})

document.getElementById("blue").addEventListener("click", function() {
    buttons.style.backgroundColor = "blue"
})

document.getElementById("orange").addEventListener("click", function() {
    buttons.style.backgroundColor = "orange"
})


let unordered = document.getElementById("unordered")
unordered.style.backgroundColor = "orange"


function generateNumber() {
    let display = document.getElementById("display");
    let generate = document.getElementById("numberGnrtr");
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    display.innerHTML = randomNumber;
}

const spanWords = ["bambaska", "cok buyuk", "farkli", "degisilmez"];
let currentIndex = 0;

function loopSpan() {
    const span = document.getElementById("span");
    if (span) {
        span.innerHTML = spanWords[currentIndex];
        currentIndex = (currentIndex + 1) % spanWords.length;
        span.style.backgroundColor = "orange";
    }
}

setInterval(loopSpan, 3000);
// span.addEventListener("mouseover", ()=> {
//     span.innerHTML = "hey";
// })

function checkNumber(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "zero";
}

console.log(checkNumber(-1));
