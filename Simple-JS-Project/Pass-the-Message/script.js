
let messageInput = document.querySelector("#message")
let btn = document.querySelector("#btn")
btn.addEventListener("click" , showMessage )

function showMessage(){
    document.querySelector("#myLabel").innerHTML = messageInput.value;
    messageInput.value = ""
}
messageInput.addEventListener("keydown" , function(event){
    if(event.key == "Enter")
    showMessage()
})


