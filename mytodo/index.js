const inputBox = document.getElementById("input-box")
const button = document.getElementById("btn")
const lists = document.getElementById("list")
const search = document.getElementById('search')

button.addEventListener('click', function(){
    if (inputBox.value == "") {
        alert("You must type something")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = `<div><input type='checkbox'><span>${inputBox.value}</span></div> <div class="x"><i class="fa-solid fa-x f-xs" style="color: #000000;"></i></div>`
        lists.append(li)
        li.querySelector('i').addEventListener('click', function(){
            li.remove();
        })
    }
    inputBox.value = ""
})


