let elementoH1 = window.document.getElementById('titulo')
elementoH1.innerHTML = "Aula - Data: 08/06"

// let elementoParagrafo = document.getElementsByTagName('p')
// let elementoParagrafo = document.getElementsByClassName('par')
let elementoParagrafo = document.getElementsByName('par')
// 0 / 1 / 2 / 3
// elementoParagrafo[1].style.color = 'Red'

for (let cont = 0; cont < elementoParagrafo.length; cont++) {
    if (cont %2) {
        elementoParagrafo[cont].style.color = 'Red'
    } else {
        elementoParagrafo[cont].style.color = 'Blue'
    }
}