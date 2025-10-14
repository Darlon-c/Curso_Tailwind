const dropBtn = document.getElementById('dropBtn')
const menuDrop = document.getElementById('menuDrop')

dropBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if(menuDrop.classList.contains('hidden')) {
        menuDrop.classList.remove('hidden')
    } else {
        menuDrop.classList.add('hidden')
    }
})












