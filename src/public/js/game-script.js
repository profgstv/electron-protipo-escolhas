const escolhas = document.querySelectorAll('.btn-link')

escolhas.forEach(escolha => {
    escolha.addEventListener('click', () => {
        const linkId = `tela-${escolha.getAttribute('data-link')}`

        document.querySelector('.mostrar').classList.remove('mostrar')
        document.getElementById(linkId).classList.add('mostrar')
    })
})