'use strict';

const questions = document.querySelectorAll('#question');
const arrowsBtn = document.querySelectorAll('.arrow-icon');
const boxes = document.querySelectorAll('.box');

questions.forEach((question, i) => {
  question.addEventListener('click', () => {
    boxes[i].classList.toggle('active');
  });
});

arrowsBtn.forEach((arrow, i) => {
  arrow.addEventListener('click', () => {
    boxes[i].classList.toggle('active');
  });
});
