function showTime() {
// Get current hours, mins and seconds from the new Date() method
const date = new Date()
var currentHour = date.getHours();
var currentMin = date.getMinutes();
var currentSec = date.getSeconds();
var session = "AM"

// Add a 0 to minutes and seconds so that if under 10 to have two digits
currentHour = (currentHour < 10) ? "0" + currentHour : currentHour;
currentMin = (currentMin < 10) ? "0" + currentMin : currentMin;
currentSec = (currentSec < 10) ? "0" + currentSec : currentSec;

// Create a 12-hour clock
if(currentHour == 0) {
    currentHour = 12;
}

if (currentHour > 12) {
    currentHour = currentHour - 12;
    session = "PM"
}

// Show time in hour:mins:sec format and insert into the DOM
const currentTime = currentHour + ":" + currentMin + ":" + currentSec + " " + session;
const time = document.querySelector('[data-time]');
time.innerText = currentTime;

// Make the function repeat every second so as to function as an accurate clock
setTimeout(showTime, 1000);
}

showTime();

// Add random numbers for addition of two numbers
const randomNumber = Math.round(Math.random() * 100) + 1;

let operand1 = document.getElementsByClassName('operand1')[0];
let operator = document.getElementsByClassName('operator')[0];
let operand2 = document.getElementsByClassName('operand2')[0];
let answer = document.getElementsByClassName('answer')[0];
operand1.innerText = randomNumber;
operator.innerText = 'X';
operand2.innerText = randomNumber;
answer.innerText = operand1.value + operand2.value