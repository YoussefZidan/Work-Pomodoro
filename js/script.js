var startTime = 0;
var breakTime = 0;

var workTime = 0;
var restTime = 0;

var secs = 0;
var mins = 0;
var hrs = 0;

var startInverID;
var startInverID2;
var startInverID3;

// buttons selectionion
var start = document.getElementById("onStart");
var brek = document.getElementById("onBreak");
var resume = document.getElementById("onResume");
var end = document.getElementById("onEnd");

// dynamic work and break timer selection
var workHrsTimer = document.getElementById("workHrs");
var workMinsTimer = document.getElementById("workMins");
var workSecsTimer = document.getElementById("workSecs");

var breakMinsTimer = document.getElementById("breakMins")
var breakSecsTimer = document.getElementById("breakSecs")

// total work paragraph selection
var tWork = document.getElementById("totalWork");
var tBreak = document.getElementById("totalBreak");

// button events
start.addEventListener("click", whenStart);
brek.addEventListener("click", whenBreak);
resume.addEventListener("click", whenResume);
end.addEventListener("click", whenEnd);

// sound selection
var beeb = new Audio("beep-07.wav");

// message selectionion
var message = document.getElementById("msg");
var overBreak = document.getElementById("over");

//animation selection
var circle1 = document.getElementById("circle1")
var circle2 = document.getElementById("circle2")
var img = document.getElementById("img")

function whenStart() {
    startInverID = setInterval(() => {
        startTime++;
        start.setAttribute("disabled", true);
        brek.disabled = false;
        resume.disabled = true;
        end.disabled = false;
        timeWork(startTime);
    }, 1000);
    brek.classList.remove("not-allowed")
    end.classList.remove("not-allowed")
    circle1.setAttribute("class", "circleAnimation")
}
function whenBreak() {
    clearInterval(startInverID);
    startInverID2 = setInterval(() => {
        breakTime++;
        timeBreak(breakTime);
    }, 1000);
    resume.disabled = false;
    resume.classList.remove("not-allowed")
    start.classList.add("not-allowed")
    circle2.setAttribute("class", "circleAnimation")
    circle1.setAttribute("class", "circleStatic")
}
function whenResume() {
    clearInterval(startInverID2);
    clearInterval(startInverID3);
    whenStart()
    circle2.setAttribute("class", "circleStatic")
}
function whenEnd() {
    clearInterval(startInverID);
    clearInterval(startInverID2);
    clearInterval(startInverID3);
    start.disabled = false;
    start.classList.remove("not-allowed")
    brek.disabled = true;
    brek.classList.add("not-allowed")
    resume.disabled = true;
    resume.classList.add("not-allowed")
    end.disabled = true;
    end.classList.add("not-allowed")
    workTime = startTime;
    restTime = breakTime;
    startTime = 0;
    breakTime = 0;
    timeWork(workTime);
    printWork();
    message.classList.remove("hidden");
    message.classList.add("show");
    img.setAttribute("class", "img-rotate")
    workSecsTimer.innerHTML = "0";
    workMinsTimer.innerHTML = "0";
    workHrsTimer.innerHTML = "0";
    breakSecsTimer.innerHTML = "0";
    breakMinsTimer.innerHTML = "0";
    circle1.setAttribute("class", "circleStatic")
    circle2.setAttribute("class", "circleStatic")
}

function timeWork(t) {
    hrs = Math.floor(t / 3600);
    mins = Math.floor(t / 60)-hrs*60;
    secs = t % 60;
    workSecsTimer.innerHTML = secs;
    workMinsTimer.innerHTML = mins;
    workHrsTimer.innerHTML = hrs;
}
function timeBreak(t) {
    mins = Math.floor(t / 60);
    secs = t % 60;

    breakSecsTimer.innerHTML = secs;
    breakMinsTimer.innerHTML = mins;

    if (mins > 15) {
        brek.setAttribute("disabled", true);
        brek.classList.add("not-allowed")
        overBreak.classList.remove("hidden");
        mins = mins - 15;
        tBreak.innerHTML = mins + " : " + secs;
        var startInverID3 = setInterval(() => {
            beeb.play();
        }, 1000);
    }
}

function printWork() {
    tWork.innerHTML = hrs + " : " + mins + " : " + secs;
}


