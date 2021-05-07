
const nav = document.querySelector('#header__nav');
const headerBurger = document.querySelector('#header__burger');

headerBurger.addEventListener("click",  () => {
  nav.classList.toggle(`header__nav--current`);
  headerBurger.classList.toggle('burger--current');
});
