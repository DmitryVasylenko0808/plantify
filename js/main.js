const header = document.querySelector(".header");
const menuMobBtn = document.querySelector(".mob-menu");
const navMob = document.querySelector(".mob-menunav");

const questions = document.querySelectorAll(".questions-content__item");

menuMobBtn.onclick = () => {
    header.classList.toggle("_color");
    navMob.classList.toggle("_showmenu");
}
questions.forEach(q => {
    q.onclick = () => {
        q.classList.toggle("_showanswer");
    }
})