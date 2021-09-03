var newYear = new Date().getFullYear();
var isLeap = false;
if((newYear%4 == 0 && !newYear%100 == 0) || newYear % 400 == 0)
    isLeap = true;
newYear++;

//var newYearsEve = new Date(newYear, 1, 1, 0, 0, 0);
var newYearsEve = new Date();
newYearsEve.setMilliseconds(0);
newYearsEve.setSeconds(0);
newYearsEve.setMinutes(0);
newYearsEve.setHours(0);
newYearsEve.setDate(1);
newYearsEve.setFullYear(newYear)
//newYearsEve.setUTCMonth(0);
var a =  newYearsEve.getTimezoneOffset();
//console.log(a)

var startOfTime = new Date(1970, 1, 1, 0, 0, 0);

//console.log(newYearsEve);

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
    //console.log(currentTime)
    var leftTime = new Date(newYearsEve-currentTime);
    var leftTimeMs = leftTime.getTime() + 0;


    //getting months

    var currentMonth = currentTime.getMonth();
    currentMonth++;
    months = 0;
    var daysToSubstract = 0;

/*
console.log('Months left: ',months)//months left

leftTimeMs = leftTimeMs - daysToSubstract*1000*60*60*24;
days = Math.floor (leftTimeMs/1000/60/60/24);
leftTimeMs = leftTimeMs - days*1000*60*60*24
console.log('Days left: ',days);

console.log(leftTimeMs/1000/60/60-1);

*/
leftTimeMs/=1000;
//console.log("Seconds: ",leftTimeMs%60);
secs = Math.floor(leftTimeMs%60);
leftTimeMs/=60;
//leftTimeMs += a;
//console.log("Minutes: ",leftTimeMs%60);
mins = Math.floor(leftTimeMs%60);
leftTimeMs/=60;
//console.log(leftTimeMs)
//console.log("Hourss: ",leftTimeMs%24);
hours = Math.floor(leftTimeMs%24);
leftTimeMs/=24;
var currentMonthsDays = 0;
//console.log("current month: ", currentMonth)
switch(currentMonth){
    case 1: 
        currentMonthsDays = 31;
        months++;
    case 2:
        currentMonthsDays = 28;
        if(isLeap) currentMonthsDays = 29;
        months++;
    case 3:
        currentMonthsDays = 31;
        months++;
    case 4:
        currentMonthsDays = 30
        months++;
    case 5:
        currentMonthsDays = 31;
        months++;
    case 6:
        currentMonthsDays = 30;
        months++;
    case 7:
        currentMonthsDays = 31;
        months++;
    case 8:
        currentMonthsDays = 31;
        months++;
    case 9:
        currentMonthsDays = 30;
        months++;
    case 10:
        currentMonthsDays = 31;
        months++;
    case 11:
        currentMonthsDays = 30;
        months++;
    case 12:
        currentMonthsDays = 31;
      

}
//console.log("Days: ",currentMonthsDays-365+leftTimeMs);
days = Math.floor(currentMonthsDays-365+leftTimeMs);
if(isLeap) days++;
//console.log("Months: ", months)



showTimeOnScreen();

}
updateTime();
setInterval(updateTime, 1000);
