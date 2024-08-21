document.title = 'jemlok'
const body = document.body
const newText = document.createElement('p')
const btn = document.getElementById('btn')

const defaultText = 'GASS'
btn.textContent = defaultText

btn.style.border = 'none'
btn.style.padding = '8px'
btn.style.fontSize = '24px'
btn.style.background = 'tomato'

function jemlok() {
    btn.style.background = 'aqua'
    newText.textContent = 'WOIII LAGI SANTAY KAWANDDDD'
    body.append(newText)
}

function amlah() {
    btn.textContent = 'OMETE'
    newText.textContent = 'SYAHRUL RAMADHON'
    body.append(newText)
    newText.style.color = 'black'
}

function bamli() {
    btn.textContent = defaultText
    newText.style.color = 'tomato'
}