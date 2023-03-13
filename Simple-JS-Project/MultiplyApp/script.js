
const questionID = document.querySelector("#question")
const inputID = document.querySelector("#input")
const formID = document.querySelector("#form")
const scoreID = document.querySelector("#score")

const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10)

let correctAnswer = num1 * num2 
let score = JSON.parse(localStorage.getItem("score"))
scoreID.textContent = `Score: ${score}`
questionID.textContent = `What is ${num1} multiply by ${num2} ?`

formID.addEventListener("submit" , () =>{
    const userAnswer = +inputID.value
    if(userAnswer === correctAnswer){
        score += 1
        updateLocalStorage()
    }else{
        score -= 1
        updateLocalStorage()    
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}