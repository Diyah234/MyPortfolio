const lists = document.getElementById("lists")
const menu = document.querySelector(".hamburger .menu")
const Close = document.querySelector(".hamburger .close")

menu.addEventListener("click", function(){
    lists.style.display = "block"
    menu.style.display = "none"
    Close.style.display = "block"
})
Close.addEventListener("click", function(){
    lists.style.display = "none"
    menu.style.display = "block"
    Close.style.display = "none"
})