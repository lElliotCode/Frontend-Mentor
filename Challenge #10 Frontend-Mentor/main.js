const blocks = document.querySelectorAll('.main-container__s2__block');
const questions = document.querySelectorAll('.main-container__s2__block__question');


questions.forEach((cadaquestion, i) => {

    questions[i].addEventListener('click', () => {
        if (blocks[i].classList[1] != undefined) {
            blocks[i].classList.toggle('activo');
            return
        }
        blocks.forEach((block, i) => {
            blocks[i].classList.remove('activo')
        });
        blocks[i].classList.toggle('activo');
    })

})



