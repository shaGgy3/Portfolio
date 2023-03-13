
const button = document.querySelector(".btn")
const close = document.querySelector(".exit")
const trailer = document.querySelector(".trailer-container")
const video = document.querySelector("video")

button.addEventListener("click" , ()=>{
    trailer.classList.remove("active")
    video.play()
})

close.addEventListener("click", ()=>{
    trailer.classList.add("active")
    video.pause()
    video.currentTime = 0
    
})