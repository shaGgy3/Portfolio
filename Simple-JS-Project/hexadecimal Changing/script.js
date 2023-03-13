
let btn = document.querySelector(".button")
let hexCodes = Array.from(document.querySelectorAll(".col-lg-3"))
let codePlace = Array.from(document.querySelectorAll("#hexCode"))
btn.addEventListener("click", changeColor)



function changeColor(event){
    let hex_number = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let hexCode = ''
////////////////////////////////////////////////////////////////////////////
    for(let i = 0 ; i < 6 ; i++){
        let randomIndex = Math.floor(Math.random() * hex_number.length)
        hexCode += hex_number[randomIndex]
    }
    codePlace[0].innerHTML = "Hex Code #"+ hexCode
    hexCodes[0].style.backgroundColor = "#"+hexCode
////////////////////////////////////////////////////////////////////////////
    let hexCode2 = ''
    for(let i = 0 ; i < 6 ; i++){
        let randomIndex = Math.floor(Math.random() * hex_number.length)
        hexCode2 += hex_number[randomIndex]
    }
    codePlace[1].innerHTML = "Hex Code #"+ hexCode2
    hexCodes[1].style.backgroundColor = "#"+hexCode2
////////////////////////////////////////////////////////////////////////////
    let hexCode3 = ''
    for(let i = 0 ; i < 6 ; i++){
        let randomIndex = Math.floor(Math.random() * hex_number.length)
        hexCode3 += hex_number[randomIndex]
    }
    codePlace[2].innerHTML = "Hex Code #"+ hexCode3
    hexCodes[2].style.backgroundColor = "#"+hexCode3
////////////////////////////////////////////////////////////////////////////
    let hexCode4 = ''
    for(let i = 0 ; i < 6 ; i++){
        let randomIndex = Math.floor(Math.random() * hex_number.length)
        hexCode4 += hex_number[randomIndex]
    }
    codePlace[3].innerHTML = "Hex Code #"+ hexCode4
    hexCodes[3].style.backgroundColor = "#"+hexCode4
////////////////////////////////////////////////////////////////////////////    
    let hexCode5 = ''
    for(let i = 0 ; i < 6 ; i++){
        let randomIndex = Math.floor(Math.random() * hex_number.length)
        hexCode5 += hex_number[randomIndex]
    }
    codePlace[4].innerHTML = "Hex Code #"+ hexCode5
    hexCodes[4].style.backgroundColor = "#"+hexCode5
////////////////////////////////////////////////////////////////////////////    
    let hexCode6 = ''
    for(let i = 0 ; i < 6 ; i++){
        let randomIndex = Math.floor(Math.random() * hex_number.length)
        hexCode6 += hex_number[randomIndex]
    }
    codePlace[5].innerHTML = "Hex Code #"+ hexCode6
    hexCodes[5].style.backgroundColor = "#"+hexCode6

////////////////////////////////////////////////////////////////////////////    
    let hexCode7 = ''
    for(let i = 0 ; i < 6 ; i++){
        let randomIndex = Math.floor(Math.random() * hex_number.length)
        hexCode7 += hex_number[randomIndex]
    }
    codePlace[6].innerHTML = "Hex Code #"+ hexCode7
    hexCodes[6].style.backgroundColor = "#"+hexCode7

    let hexCode8 = ''
    for(let i = 0 ; i < 6 ; i++){
        let randomIndex = Math.floor(Math.random() * hex_number.length)
        hexCode8 += hex_number[randomIndex]
    }
    codePlace[7].innerHTML = "Hex Code #"+ hexCode8
    hexCodes[7].style.backgroundColor = "#"+hexCode8

}

