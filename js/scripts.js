const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card_about-more')


for (let card of cards){
    card.addEventListener('click', ()=>{
       const iframeId =  card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `../projetos/${iframeId}.html`
    })
}

document.querySelector('.close-modal').addEventListener('click', ()=>{
    modalOverlay.classList.remove('active')
})

