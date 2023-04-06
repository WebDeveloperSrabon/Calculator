
// select a variable 

let srabon = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((Element)=>{
    Element.addEventListener("click", (e)=>{

        if(e.target.innerHTML == "="){
            srabon = eval(srabon)
            document.querySelector("input").value = srabon
            console.log("hello world")
        }
        else if(e.target.innerHTML == "C"){
            srabon = ""
            document.querySelector("input").value = srabon
            console.log("hello world")
        }
        else{
            srabon = srabon + e.target.innerHTML
        document.querySelector("input").value = srabon
        console.log(e.target)
        console.log("this is right")
        }


        
    })
})