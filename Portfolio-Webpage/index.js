
const contactEl = document.querySelector("#contact")
const projectEl = document.querySelector("#project")
const buttonEl = document.querySelector("#btn")
const imageEl = document.querySelector("image")

project.addEventListener("click" , (event)=>{
     window.scrollBy(0 , 700)
})
contactEl.addEventListener("click" , (event)=>{
     window.scrollBy(0 , 1720)
})
buttonEl.addEventListener("click" , (event)=>{
     window.scrollBy(0 , -1720)
})
