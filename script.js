const numeros = document.querySelectorAll('input')
const telaResultado = document.querySelector('#result')
const buttonDarkMode = document.querySelector('.mode')
let conta;

function botao(value) {
    conta = telaResultado.value += value
} 

function limpar() {
  telaResultado.value = ""
}

function calc() {

  const resultado = eval(conta)
  telaResultado.value = resultado
}

 function retirar() {
      const palavraCompleta = telaResultado.value
      const ultimaLetra = palavraCompleta.substring(0, telaResultado.value.length - 1)
      console.log(ultimaLetra)
    
      telaResultado.value = ultimaLetra
    }

buttonDarkMode.addEventListener('click', function() {
  document.documentElement.classList.toggle('ativo')
  buttonDarkMode.classList.toggle('ativo')
})