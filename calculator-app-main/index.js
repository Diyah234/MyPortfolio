

document.getElementById("indicator").addEventListener("click", toggle )
 function toggle(){
    var indicator = document.getElementById("indicator")

    if (indicator.style.left === "2px") {
        indicator.style.left = "16px";
        document.querySelector("body").classList.add("main2")
    }
    else if (indicator.style.left === "16px") {
        indicator.style.left ="30px";
        document.querySelector("body").classList.remove("main2")
        document.querySelector("body").classList.add("main3")
    }
    else{
        indicator.style.left ="2px"
        document.querySelector("body").classList.remove("main2")
        document.querySelector("body").classList.remove("main3")
    }
}

let inputBox = document.getElementById("inputBox")
let buttons = document.querySelectorAll('button')

let string = ''


buttons.forEach(element =>{
    element.addEventListener('click',(b)=>{
        if (b.target.innerText == '=') {
            string = String(eval(string))
            inputBox.value = Number(string).toFixed(1);
        }
        else if(b.target.innerText == 'RESET'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0, string.length-1)
            inputBox.value = string
        }
        else{
            string += b.target.innerText
            inputBox.value = string
        }
    })
})