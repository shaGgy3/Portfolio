let display = document.querySelector("#printScreen")
let buttons = Array.from(document.querySelectorAll(".number"))
let equal = document.querySelector("#equal")

buttons.map( button => {
    button.addEventListener("click", (event) =>{
        switch(event.target.innerText){
            case "C":
                display.innerText = ""
                break
            case "←":
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1)
                }
                break
            case "=":
                try{
                    display.innerText = eval(display.innerText)
                }catch{
                    display.innerText = "ERROR!"
                }

                break
            default:
                display.innerText += event.target.innerText
        }
    })
})
