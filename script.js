let calculator = document.querySelector(".calculator");
let btns = document.querySelectorAll("button");
let input = document.querySelector("#show"); 

let string = " ";

btns.forEach((button) =>{
    button.addEventListener("click",(e) =>{
        if(e.target.innerText === "="){
           string = eval(string);
           input.value = string;
        }else if(e.target.innerText === "AC"){
            string="";
            input.value=string;
        }else if(e.target.innerText === "DEL"){
            string = string.slice(0,-1);
            input.value = string;
        }
        else{
            string += e.target.innerText;
            input.value = string;
        }
    })
})