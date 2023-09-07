// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgCoockie = document.querySelector("#imgCoockie")
const btnReset = document.querySelector("#btnReset")

//Frases...
let phrases = [
  "Você é mais forte do que imagina.",
  "O sucesso é uma escolha, escolha ser bem-sucedido.",
  "Não desista, a vitória está logo ali.",
  "Você é capaz de alcançar seus sonhos.",
  "Tudo é possível se você acredita.",
  "Se você quer algo, vá atrás dele.",
  "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
  "Não importa o quão lento você vá, desde que não pare.",
  "A determinação é a chave do sucesso.",
  "Não importa o que aconteça, nunca desista dos seus sonhos.",
  "É em meio a dificuldade que se encontra a oportunidade"
  ]

let randomPhrase = document.querySelector("#randomPhrase")
let generateRandomPhrase

// Eventos
imgCoockie.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)


// Função callback
function handleTryClick(event){
  event.preventDefault() // Não faça o padrão (envio do formulário)
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  
  generateRandomPhrase = Math.floor(Math.random()*(phrases.length));
  randomPhrase.innerText = phrases[generateRandomPhrase]
}

function handleResetClick() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}