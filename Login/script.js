const interface = document.querySelector("#interface");
const login = document.querySelector(".centro");
const botaoClick = document.querySelector(".login-btn");

botaoClick.addEventListener('click', ()=>{
    login.classList.toggle('ativar')
    interface.classList.toggle('ativar')
});