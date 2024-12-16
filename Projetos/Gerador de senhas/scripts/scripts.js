//seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")
// novas funcionalidades
const openCloseGeneratorButton = document.querySelector(
  "#open-generate-password"
)
const generatePasswordContainer = document.querySelector("#generate-options")
const lenghtInput = document.querySelector("#lenght")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")
//funções
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
  const symbols = "!@#$%¨&*():{}[],|=+-_"
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = ""
  const passwordLenght = +lenghtInput.value

  const generators = []
  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase)
  }
  if (numbersInput.checked) {
    generators.push(getNumber)
  }
  if (symbolsInput.checked) {
    generators.push(getSymbol)
  }
  if (generators.length === 0) {
    return
  }
  for (i = 0; i < passwordLenght; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]()

      password += randomValue
    })
  }
  password = password.slice(0, passwordLenght)
  generatedPasswordElement.style.display = "block"
  generatedPasswordElement.querySelector("h4").innerText = password
}

//eventos
generatePasswordButton.addEventListener("click", () => {
  generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})

openCloseGeneratorButton.addEventListener("click", () => {
  generatePasswordContainer.classList.toggle("hide")
})

copyPasswordButton.addEventListener("click", (e) => {
  e.preventDefault()

  const password = generatedPasswordElement.querySelector("h4").innerText
  navigator.clipboard.writeText(password).then(() => {
    copyPasswordButton.innerHTML = "senha copiada com sucesso!"
    setTimeout(() => {
      copyPasswordButton.innerText = "Copiar"
    }, 1000)
  })
})
