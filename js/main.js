// select
let key = document.getElementById("key");
let value = document.getElementById("value");
let btns = document.querySelectorAll(".btns button");
btns.forEach(button =>{
    button.addEventListener("click", (e) =>{
        if(button.classList.contains("add")){
            localStorage.setItem(`${key.value}`, `${value.value}`)
            document.querySelector(".error").innerHTML = "";
            key.value = "";
            value.value = "";
            document.querySelector(".result p").innerHTML = "";
        }
        else if(button.classList.contains("delete")){
            localStorage.removeItem(`${key.value}`)
            document.querySelector(".error").innerHTML = "";
            document.querySelector(".error").setAttribute("style","padding0px;")
            key.value = "";
            value.value = "";
            document.querySelector(".result p").innerHTML = "";
        }else if(button.classList.contains("show")){
            if(localStorage.getItem(`${key.value}`)){
                document.querySelector(".result p").innerHTML = localStorage.getItem(`${key.value}`);
                document.querySelector(".error").innerHTML = "";
                document.querySelector(".error").setAttribute("style","padding0px;")
                key.value = "";
                value.value = "";
            }else{
                document.querySelector(".error").innerHTML = "the Key is not found";
                document.querySelector(".error").setAttribute("style","padding: 10px 0px;")
                document.querySelector(".result p").innerHTML = "";
            }
        }else if(button.classList.contains("showall")){
            for(let i = 0; i<localStorage.length; i++){
                document.querySelector(".result p").innerHTML +=`${localStorage.key(i)} : ${localStorage.getItem(localStorage.key(i))} ||`;
                key.value = "";
                value.value = "";
            }
        }
        else if(button.classList.contains("clear")){
            localStorage.clear()
            document.querySelector(".error").innerHTML = "";
            document.querySelector(".error").setAttribute("style","padding0px;")
            key.value = "";
            value.value = "";
            document.querySelector(".result p").innerHTML = "";
        }
    })
})