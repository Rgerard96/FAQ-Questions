const arrows = document.querySelectorAll('.fas');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');
const questionHeaders = document.querySelectorAll('.question-header');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const navItems = document.querySelector('.nav-items');
const burgerLines = document.querySelectorAll('.burger-line');

questionHeaders.forEach(questionHeader =>{
  questionHeader.addEventListener('click', () =>{
    questionHeader.children[1].classList.toggle('fas-rotate');
    questionHeader.children[0].classList.toggle('question-color');
    questionHeader.nextElementSibling.classList.toggle('answer-display');
    questionHeader.classList.toggle('question-header-border');
  });
})

burgerMenu.addEventListener('click', () =>{
  navItems.classList.toggle('nav-items-show');
  overlay.classList.toggle('overlay-show');
  burgerLines.forEach(burgerLine =>{
    burgerLine.classList.toggle('switch-color');
  })
  burgerMenu.children[0].classList.toggle('first-burger-line');
  burgerMenu.children[1].classList.toggle('second-burger-line');
  burgerMenu.children[2].classList.toggle('third-burger-line');
})
