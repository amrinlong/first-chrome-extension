const workStartButton = document.getElementById("work");
const breakStartButton = document.getElementById("break");
const cycleStartButton = document.getElementById("reset");

var wm = document.getElementById('w_minutes')
var ws = document.getElementById('w_seconds')

var bm = document.getElementById('b_minutes')
var bm = document.getElementById('b_seconds')

var startTimer

function timer(){
    if(ws.innerText != 0) {
        ws.innerText--;   
    } else if(wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
    }

if(wm.innerText == 0 && ws.innerText == 0) {
    if(breakStartButton.innerText != 0) {

    }
}

