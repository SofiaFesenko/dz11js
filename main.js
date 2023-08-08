let input = document.querySelector('.input')
let form = document.querySelector('.form')
let button = document.querySelector('.button')
let ul = document.querySelector('.ul')

button.addEventListener('click', () => {
    let inputValue = input.value
    let formValue = form.value

    updateList(inputValue, formValue)
})

function updateList(a, b) {
    ul.innerHTML += `<li>${a}</li> <li>${b}</li> <span>------</span>`
}