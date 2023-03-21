const bodyEl = document.querySelector("body")
const boxCover = document.querySelector(".box-cover");
const boxBody = document.querySelector(".box-body");
const image = document.querySelector(".img1");
const image1 = document.querySelector(".img2");
const image2 = document.querySelector(".img3");
const image3 = document.querySelector(".img4");
const image4= document.querySelector(".img5");
const image5 = document.querySelector(".img6");
const image6 = document.querySelector(".img7");
const image7 = document.querySelector(".img8");

const image8 = document.querySelector(".img9");
const image9 = document.querySelector(".img10");
const image10 = document.querySelector(".img11");

const img = document.querySelectorAll(".img");
const head = document.querySelector(".head")
const head1 = document.querySelector(".head1")

const music = document.querySelector(".music");

boxCover.addEventListener("click" , ()=>{
    boxCover.classList.remove("box-cover")
    boxCover.classList.add("box-cover-click");
    music.play();
    setTimeout(display , 1000);

    function display(){
    image.style.display = "flex";
    image.style.width = "600px";
    image.addEventListener("click" , ()=>{
        image.style.display = "none"
        image1.style.display = "flex";
        image1.style.width = "600px";
    })
    image1.addEventListener("click" , ()=>{
        image1.style.display = "none"
        image2.style.display = "flex";
        image2.style.width = "600px";
    })
    image2.addEventListener("click" , ()=>{
        image2.style.display = "none"
        image3.style.display = "flex";
        image3.style.width = "600px";
    })
    image3.addEventListener("click" , ()=>{
        image3.style.display = "none"
        image4.style.display = "flex";
        image4.style.width = "600px";
    })
    image4.addEventListener("click" , ()=>{
        image4.style.display = "none"
        image5.style.display = "flex";
        image5.style.width = "600px";
    })
    image5.addEventListener("click" , ()=>{
        image5.style.display = "none"
        image9.style.display = "flex";
        image9.style.width = "600px";
    })
    image9.addEventListener("click" , ()=>{
        image9.style.display = "none"
        image10.style.display = "flex";
        image10.style.width = "600px";
    })
    image10.addEventListener("click" , ()=>{
        image10.style.display = "none"
        image8.style.display = "flex";
        image8.style.width = "600px";
                img.forEach((event) => {
            event.style.display = "none";
            boxCover.classList.remove("box-cover-click");
            head.style.display = "flex";
            head.style.width = "1000px";
            head1.style.display = "flex";
            head1.style.width = "1000px";
            boxBody.style.display = "none"
            image6.style.display = "flex"
            image7.style.display = "flex"

        })
    })
    };
})



bodyEl.addEventListener("mousemove" , (event)=>{
    const xPosition = event.offsetX 
    const yPosition = event.offsetY

    const spanEl = document.createElement("span")
    spanEl.style.left = xPosition + "px"
    spanEl.style.top = yPosition + "px"
    const size = Math.random() * 50
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"

    bodyEl.appendChild(spanEl)

    setTimeout(() =>{
        spanEl.remove()
    },3000)
})