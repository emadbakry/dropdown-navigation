let links = document.querySelectorAll("a");
let pics = document.querySelectorAll("img");

for (i=0;i<links.length;i++) {
    links[i].setAttribute("href","#");
}
for (i=0;i<pics.length;i++) {
    pics[i].setAttribute("alt","IMG NOT FOUND");
}


// let arrow = document.querySelector(".arrow");

// arrow.onclick = function() {
//     arrow.style.setProperty("--down", "url(./images/icon-arrow-up.svg)");
// }

    