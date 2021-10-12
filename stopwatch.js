const timer = document.getElementById("timer");

var hr = 0;
var min = 0;
var sec = 0;

var stoptime = true;

function startTimer() {
    if (stoptime === true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
    if (stoptime === false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime === false) {
        // parsing the values of the sec, min and hr as integers, to avoid dtype errors
        sec = parseInt(sec);  
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) { min = min + 1; }
        if (min == 60) { hr = hr + 1; }

        // displaying 0-9 as 00-09
        if (sec < 10 || sec == "0") 
        { sec = "0" + sec; }
        if (min < 10 || min == "0") 
        { min = "0" + min; }
        if (hr < 10 || hr == "0") 
        { hr = "0" + hr; }

        timer.innerHTML = hr + ":" + min + ":" + sec;

        // run the timerCycle() every 1000ms
        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    hr = 0;
    min = 0;
    sec = 0;
}