

let nav = document.querySelector('nav');
let burger_icon = document.querySelector('.threeDots');

burger_icon.addEventListener('click', () => {
    nav.toggleAttribute('opened');
    burger_icon.toggleAttribute('close_icon');
});
    