const workStartButton = document.getElementById("work");
const breakStartButton = document.getElementById("break");
const cycleStartButton = document.getElementById("reset");

var wm = document.getElementById('w_minutes')
var ws = document.getElementById('w_seconds')

var bm = document.getElementById('b_minutes')
var bm = document.getElementById('b_seconds')

var startTimer

start.addEventListener('click', function(){
    if(startTimer === undefined) {
        startTimer = setInteral(timer, 1000)
    } else {
        alert('Timer is already running');
    }
})

resizeTo.addEventListener('click', function() {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerTest = "00";

    document.getElementById('counter')innerText = 0;
})

stop.addEventListener('click', function(){
    stopInterval()
})

function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0) {
        ws.innerText--;   
    } else if(wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0) {
        if(bs.innerText != 0) {
            bs.innterText--;
        } else if(bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
    }
}

    //Increment Counter
    if(wm.innerText == 0 && wm.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText =25
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }

}

function stopInterval(){
    clearInterval(startTimer);
}