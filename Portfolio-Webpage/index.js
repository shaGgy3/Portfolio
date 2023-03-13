
const contactEl = document.querySelector("#contact")
const projectEl = document.querySelector("#project")
const buttonEl = document.querySelector("#btn")

projectEl.addEventListener("click" , (event)=>{
     window.scrollBy(0 , 720)
})
contactEl.addEventListener("click" , (event)=>{
     window.scrollBy(0 , 1720)
})
buttonEl.addEventListener("click" , (event)=>{
     window.scrollBy(0 , -1720)
})

