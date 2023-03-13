const timeDisplay = document.querySelector("#timeDisplay")
const startButton = document.querySelector("#startButton")
const pauseButton = document.querySelector("#pauseButton")
const resetButton = document.querySelector("#resetButton")

let startTime = 0 
let elapsedTime = 0
let currentTime = 0
let paused = true
let intervalID;
let milisec = 0
let sec = 0
let min = 0 
let hour = 0

startButton.addEventListener("click", () =>{
    if(paused){
        paused = false
        startTime = Date.now() - elapsedTime
        intervalID = setInterval(updateTime , 75)
    }
})
pauseButton.addEventListener("click", () =>{
    if(!paused){
        paused = true
        elapsedTime = Date.now() - startTime
        clearInterval(intervalID)
    }
})
resetButton.addEventListener("click", () =>{
    paused = true
    clearInterval(intervalID)
    startTime = 0 
    elapsedTime = 0
    currentTime = 0
    milisec = 0
    sec = 0
    min = 0 
    hour = 0
    timeDisplay.textContent = "00:00:00:00"

})

function updateTime(){
    elapsedTime = Date.now() - startTime

    milisec = Math.floor((elapsedTime / 1) % 99)
    sec = Math.floor((elapsedTime / 1000) % 60)
    min = Math.floor((elapsedTime / (1000 * 60)) % 60)
    hour = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

    milisec = pad(milisec)
    sec = pad(sec)
    min = pad(min)
    hour = pad(hour)

    timeDisplay.textContent = `${hour}:${min}:${sec}:${milisec}`

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }
}