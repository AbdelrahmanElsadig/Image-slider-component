let btns = document.querySelectorAll('[data-btn]');
let gallery = document.querySelector('.gallery');
let cards = [...gallery.children];
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let offset = btn.dataset.btn === 'next' ? 1: -1;
        let active_card = btn.closest('.card');
        let new_index = cards.indexOf(active_card) + offset
        if (new_index >= cards.length) new_index = 0;
        if (new_index < 0 ) new_index = cards.length -1
        cards[new_index].dataset.active = true;
        delete active_card.dataset.active
    })
})