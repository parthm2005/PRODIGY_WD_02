let start=document.getElementById("start")
let reset=document.getElementById("reset")
let lap=document.getElementById("lap")
let time=document.getElementById("time")    
let laplist=document.getElementById("lapList")

let running=false
let seconds=0,minutes=0,hours=0;
let interval;
let lapCounter=1;

function startwatch(){
    if(!running){
        running=true;
        start.textContent="Stop"
        interval=setInterval(updateTime,1000)
    }
    else{
        running=false;
        start.textContent="Start"
        clearInterval(interval) 
    }
}
function updateTime(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    time.textContent=formatTime(hours,minutes,seconds)
}
function formatTime(hours, minutes, seconds) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}
function padZero(number) {
    return number < 10 ? '0' + number : number;
}
function resetwatch() 
{
    running=false;
    clearInterval(interval);
    seconds=0
    minutes=0
    hours=0
    time.textContent="00:00:00"
    start.textContent="Start"
    laplist.innerHTML=""
    lapCounter=1
} 
function recordlap(){
    if(running){
        let lapTime=formatTime(hours,minutes,seconds)
        let lapItem=document.createElement('li')
        lapItem.textContent=`Lap ${lapCounter}: ${lapTime}`
        laplist.appendChild(lapItem)
        lapCounter++
    }
}