const container = document.querySelectorAll('.content-question');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.question-answer');
const arrows = document.querySelectorAll('.arrow');
let count = 0;

container.forEach(question => {
    question.addEventListener('click', () => {
        if (count == 0) {
            question.classList.toggle('show');
            count++;
        } else {
            container.forEach(qstion => qstion.classList.remove('show'));
            count --;
        };
    });
});