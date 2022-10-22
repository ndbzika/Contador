const divNumero = document.querySelector("#num");

const numero = document.createElement("span");
numero.classList.add("numero");
numero.textContent = 0;

divNumero.appendChild(numero);

const botaoAdd = document.querySelector("#add");
const botaoZerar = document.querySelector("#zerar");
const botaoSubtrair = document.querySelector("#sub");

botaoAdd.addEventListener("click", () => {
    ++numero.textContent;
})

botaoSubtrair.addEventListener("click", function() {
    if(numero.textContent > 0){
        --numero.textContent;
    }
})

botaoZerar.addEventListener("click", () => {
    numero.textContent = 0;
})
