//Random Background Changer

const btn = document.querySelector("#btn")
let colors = ["red","blue","orange","aqua","tomato","green","yellow","grey","pruple","black"]
btn.addEventListener("click" , changeColor) 

function changeColor(event){
    let pickColor = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[pickColor]
}