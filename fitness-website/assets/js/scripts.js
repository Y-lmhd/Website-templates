
let scrollcontainer = document.querySelector('.gallery-wrapper');
let btnNext = document.getElementById('next');
let btnPrevious = document.getElementById('previous');
let btnCollapse = document.querySelector('.btn-collapse');


scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
})
btnNext.addEventListener("click", () => {
    scrollcontainer.scrollLeft += 200;
})
btnPrevious.addEventListener("click", () => {
    scrollcontainer.scrollLeft -= 200;
})
scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
})

// window.addEventListener('resize', function(evt){
// });

btnCollapse.addEventListener("click", () => {
    let menu = document.querySelector('.nav-menu-top');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
    }
})