
let counter = 0 
document.querySelector("#increase").onclick = function(){
    counter += 1 
    document.querySelector("#number").innerHTML = counter
}
document.querySelector("#reset").onclick = function(){
    counter = 0
    document.querySelector("#number").innerHTML = counter
}
document.querySelector("#decrease").onclick = function(){
    counter -= 1 
    document.querySelector("#number").innerHTML = counter   
}