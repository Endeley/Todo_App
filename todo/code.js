const form = document.getElementById('input-form')
const SubmitBtn = document.getElementById('submitBtn')
const itemList = document.getElementById('ul-list')

function todo(e) {
    e.preventDefault()
    const newItems = document.getElementById('input-text').value

    let div = document.createElement('div')
    div.className = 'li-list'
    div.innerHTML = newItems
    const newList = document.getElementById('ul-list')

    let iBtn = document.createElement('i')
    iBtn.className = 'fa-solid fa-trash'

    newList.appendChild(div)
    div.appendChild(iBtn)
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains('li-list')) e.target.parentElement.remove()
}

form.addEventListener('submit', todo)
itemList.addEventListener('click', removeItem)
