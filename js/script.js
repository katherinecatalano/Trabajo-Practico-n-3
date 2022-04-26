const lista = Document.getElementById('lista')
console.log(lista)

const li = document.createElement('li')
li.textContent = 'primer elemento'

lista.appendChild(li)