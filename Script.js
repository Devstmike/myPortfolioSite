let header = document.querySelector("header");
// window.onscroll = () => {
//     if(scrollY > 30){
//         header.classList.add("sticky")
//     }else{
//         header.classList.remove("sticky")
//     }   
// }


let typingElement = document.querySelector(".typingText");
let textLength,EachLength = []
let texts = ["My name is Timilehin","I am a Web Designer and Developer","I have Expertise in HTML, CSS and Javascript","Web Developer and Designer"]
function getAll(){
    textLength = texts.length;
    for (let i = 0; i < textLength; i++){
        EachLength[i] =(texts[i].split("")).length;
    }
}

getAll()
console.log(textLength)
console.log(EachLength)




let index1 = 0, index2 = 0;
typingElement.innerHTML = ""
function typingEffect (){
    console.log(typingElement.innerHTML)
    if ((texts[index1].split(""))[index2] != undefined){
    typingElement.innerHTML = typingElement.innerHTML + (texts[index1].split(""))[index2]
    }
    console.log("typing = " + index1 + " " + index2 )
}


let myInter = setInterval(() => {
    typingEffect()
    index2++
    if(index2 == EachLength[0] & index1 == 0 || index2 == EachLength[1] & index1 == 1 || index2 ==  EachLength[2] & index1 == 2){
        index1++
        index2 = 0;
        typingElement.innerHTML = ""
    }
    console.log("interval = " + index1 + " " + index2 )
    
    if(index1 == textLength - 1 && index2 == EachLength[3]){
        clearInterval(myInter)
    }

}, 100);



let cancel = document.querySelector(".fa-xmark");
let menuIcon = document.querySelector(".menuIcon");
let uparrow = document.querySelector(".fa-arrow-up");


menuIcon.onclick = () => {
    header.classList.add("showNav")
    header.classList.add("headerColor");
    menuIcon.style.display = "none"
    uparrow.style.display = "none"
}


cancel.onclick = () => {
    header.classList.remove("showNav")
    header.classList.remove("headerColor")
    menuIcon.style.display = "inline-block"
    uparrow.style.display = "none"
}


window.onscroll = () => {
    if(window.scrollY > 100){
        uparrow.style.display = "block";
        // uparrow.setAttribute("data-aos","fade-down-left")
    }else{
        uparrow.style.display = "none";
        // uparrow.removeAttribute("data-aos","")
    }
}

uparrow.onclick = () => { 
    window.scrollTo(0,0);
    console.log("clicked")
}