
// sidebar open and close
let nav = document.querySelector('nav');
let burger_icon = document.querySelector('.threeDots');

let open_nav = () => {
    nav.toggleAttribute("opened");
    burger_icon.toggleAttribute("close_icon");
}
burger_icon.addEventListener('click', () =>open_nav());
    
document.querySelector('section').addEventListener('click', () => {
    toggle_class('remove');
     nav.removeAttribute("opened");
     burger_icon.removeAttribute("close_icon");
});
let toggle_class = (ele) => {
    ele == 'remove'
         ? sub_lis.forEach((el)=>el.classList.remove('clicked'))
        : ele.classList.toggle("clicked");
}
// show ul on click
let sub_lis = document.querySelectorAll('.arrow');
sub_lis.forEach((ele) => ele.addEventListener('click', () => toggle_class(ele)));

// body onclick to hide sub_lis