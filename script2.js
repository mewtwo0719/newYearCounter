var newYear = new Date().getFullYear();
var isLeap = false;
if((newYear%4 == 0 && !newYear%100 == 0) || newYear % 400 == 0)
    isLeap = true;
newYear++;

var newYearsEve = new Date(newYear, 1, 1, 0, 0, 0);
var startOfTime = new Date(1970, 1, 1, 0, 0, 0);

var months;
var days;
var hours;
var mins;
var secs;

var monthsDom = document.getElementById("months")
var daysDom = document.getElementById("days");
var hoursDom = document.getElementById("hours");
var minsDom = document.getElementById("minutes");
var secsDom = document.getElementById("seconds");


function showTimeOnScreen(){
    
    monthsDom.innerHTML = months;
    daysDom.innerHTML = days;
    hoursDom.innerHTML = hours;
    minsDom.innerHTML = mins;
    secsDom.innerHTML = secs;
}


function updateTime(){
    var currentTime = new Date();
    var leftTime = new Date(newYearsEve-currentTime);

var leftTimeMs = leftTime.getTime() - startOfTime.getTime()



leftTimeMs = Math.floor(leftTimeMs/1000);

secs = Math.floor(leftTimeMs%60);

leftTimeMs = Math.floor(leftTimeMs/60);

mins = Math.floor(leftTimeMs%60);

leftTimeMs = Math.floor(leftTimeMs/60);

console.log(leftTimeMs)
hours = Math.floor(leftTimeMs%24)-1;
leftTimeMs /= 24;
console.log(leftTimeMs)



//check for months left first

var currentMonth = currentTime.getMonth();
currentMonth++;
var monthsLeft = 0;

switch(currentMonth){
    case 0: 
        leftTimeMs -= 31;
        monthsLeft++;
    case 1:
        leftTimeMs -= 28;
        if(leap) leftTimeMs--;
        monthsLeft++;
    case 2:
        leftTimeMs -= 31;
        monthsLeft++;
    case 3:
        leftTimeMs -= 30
        monthsLeft++;
    case 4:
        leftTimeMs -= 31;
        monthsLeft++;
    case 5:
        leftTimeMs -= 30;
        monthsLeft++;
    case 6:
        leftTimeMs -= 31;
        monthsLeft++;
    case 7:
        leftTimeMs -= 31;
        monthsLeft++;
    case 8:
        leftTimeMs -= 30;
        monthsLeft++;
    case 9:
        leftTimeMs -= 31;
        monthsLeft++;
    case 10:
        leftTimeMs -= 30;
        monthsLeft++;
    case 11:
        leftTimeMs -= 31;
        monthsLeft++;

}

months = monthsLeft;

days = Math.floor(leftTimeMs);



showTimeOnScreen();

}

setInterval(updateTime, 1000);

