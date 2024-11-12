let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let charset = "abcdefghijklmnopqrsuvwxyz";
let novaSenha = "";

sizePassword.innerHTML = " : "+sliderElement.value+" caracteres";

sliderElement.oninput = function(){
    sizePassword.innerHTML =" : "+this.value+" caracteres";;
}

function generatePassword(){
    let pass ="";
    for(let i = 0, n = charset.length;i < sliderElement.value;++i){
        pass += charset.charAt(Math.floor(Math.random()*n));   
    }
    password.innerHTML = pass;
    containerPassword.classList.remove("hide");
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso");
    navigator.clipboard.writeText(novaSenha);
}