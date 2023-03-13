
const total = document.querySelector("#total")
const remain = document.querySelector("#remain")
const text = document.querySelector("#textArea")

updateCounter()

text.addEventListener("keyup", () =>{
    updateCounter()
})

function updateCounter(){
    total.innerText = `Total Character: ${text.value.length}`
    remain.innerText = `Remainig: ${text.getAttribute("maxLength") -
    text.value.length}`
}

