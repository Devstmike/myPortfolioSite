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
let texts = ["My name is Timilehin","I am a Web Designer and Developer","I have Expertise in HTML, CSS and Javascript","I will turn your imaginations to reality"]
function getAll(){
    textLength = texts.length;
    for (let i = 0; i < textLength; i++){
        EachLength[i] =(texts[i].split("")).length;
    }
}

getAll()
//console.log(textLength)
//console.log(EachLength)




let index1 = 0, index2 = 0;
typingElement.innerHTML = ""
function typingEffect (){
   // console.log(typingElement.innerHTML)
    if ((texts[index1].split(""))[index2] != undefined){
    typingElement.innerHTML = typingElement.innerHTML + (texts[index1].split(""))[index2]
    }
 //   console.log("typing = " + index1 + " " + index2 )
}

function setTyping(){

    let myInter = setInterval(() => {
    typingEffect()
    index2++
    if(index2 == EachLength[0] & index1 == 0 || index2 == EachLength[1] & index1 == 1 || index2 ==  EachLength[2] & index1 == 2){
        index1++
        index2 = 0;
        typingElement.innerHTML = ""
    }
   // console.log("interval = " + index1 + " " + index2 )
    
    if(index1 == textLength - 1 && index2 == EachLength[3]){
        clearInterval(myInter)
    }

    }, 100);
}


let cancel = document.querySelector(".fa-xmark");
let menuIcon = document.querySelector(".menuIcon");
let uparrow = document.querySelector(".fa-arrow-up");


menuIcon.onclick = () => {
    header.classList.add("showNav")
    header.classList.add("headerColor");
    menuIcon.classList.add("hideMenu")
    uparrow.style.display = "none"
}


cancel.onclick = () => {
    header.classList.remove("showNav");
    header.classList.remove("headerColor");
    menuIcon.classList.remove("hideMenu")
    uparrow.style.display = "none";
}


window.onscroll = () => {
        if((header.classList.contains("showNav")) || window.scrollY < 100){
            uparrow.style.display = "none";
            console.log("up arrow in")
        }
        // uparrow.setAttribute("data-aos","fade-down-left")
         else{
            uparrow.style.display = "block"
            console.log("none")
        }
} 

uparrow.onclick = () => { 
    window.scrollTo(0,0);
   // console.log("clicked")
}







const element = document.querySelector('.allProjects> div:nth-child(2)');
const observer = new IntersectionObserver(entries => {
//   element.classList.add("animate__animated", entries[0].isIntersecting );
//   element.classList.add("animate__bounceInDown", entries[0].isIntersecting );
  console.log("adding")
});

observer.observe( element );



let down = setInterval(() => {
    // console.log(window.scrollY)
    // if(window.scrollY > 622){
    //     const element = document.querySelector('.allProjects');
    //     const observer = new IntersectionObserver(entries => {
    //     element.classList.add("animate__animated", entries[0].isIntersecting );
    //     element.classList.add("animate__bounceInDown", entries[0].isIntersecting );
    //     console.log("adding")
    // });
    //     observer.observe( element );
    //    clearInterval(down)
    // }

    //let item = document.querySelector('.allProjects');
    function isInViewport(item) {

    var bounding = item.getBoundingClientRect(),
        myElementHeight = item.offsetHeight,
        myElementWidth = item.offsetWidth;

    if(bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
        return true;
    } else {
        return false;
    }

//    isInViewport()

    if (isInViewport() ==   true){
        const observer = new IntersectionObserver(entries => {
        element.classList.add("animate__animated", entries[0].isIntersecting );
        element.classList.add("animate__bounceInDown", entries[0].isIntersecting );

        observer.observe( element );
        console.log("adding")
    });
        
    }
}
}, 1000);




portfoliTextCount = 0
let portfoliTextInterval = setInterval(() => {
    if(portfoliTextCount == 0){
        document.querySelector(".entranceAnimation .text h3").innerHTML = "To"
       }else if(portfoliTextCount == 1){
        document.querySelector(".entranceAnimation .text h3").innerHTML = "my"
    }else if(portfoliTextCount == 2){
        document.querySelector(".entranceAnimation .text h3").innerHTML = "Portfolio"
    }else if(portfoliTextCount == 3){
        document.querySelector(".entranceAnimation").style.display = "none";
        document.querySelector("body").style.overflow = "auto"
        clearInterval(portfoliTextInterval)
        setTyping()

    }
    
    portfoliTextCount++
}, 1000);


let linkToProject =  document.querySelector(".portfolio .about a");
linkToProject.onclick = (e) => {
    e.preventDefault()
     linkToProject.innerText = "Still working on it"
     linkToProject.classList.add("notFinished")
     setTimeout(() => {
        linkToProject.innerText = "Project Link"
         linkToProject.classList.remove("notFinished")
     }, 2000);
     
}



function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    //alert("prevented")
    for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function(event) {
    event.preventDefault();
    SendData()
    });
    }
}

 window.addEventListener("load", preventFormSubmit); 

// I used Google Apps Script to handle Email
function SendData() {
    // e.preventDefault()
     const formEle = document.querySelector(".wrapper form");
     const formDatab = new FormData(formEle);
     console.log("sent")
     console.log(formDatab)
     formDatab.forEach(el => {
         console.log(el)
     })
     fetch(
     "https://script.google.com/macros/s/AKfycbwcGmdLuLK81k02EvRmvsexi8iiah0Cz-qmV7-JyzCxMjJR9CVDEkzMVx2jCmDX2SjEEw/exec",
     {
         method: "POST",
         body: formDatab
     }
     )
     .then((res) => res.text())
     .then((data) => {
         console.log(data);
     })
     .catch((error) => {
         console.log(error);
     });

    formEle.reset()
    
    let thankyou =  `<div class="thanks" style="text-align:center">
         <p style="Color:green;font-size:2rem;margin-bottom:10px">
             Thank You!
         </p>
         <p style="font-size:2rem;">
             Your Message has been Sent.
        </p>
     </div>`;
    document.querySelector(".wrapper .others").style.display = "none";
     document.querySelector(".form").innerHTML = thankyou
 }
 
