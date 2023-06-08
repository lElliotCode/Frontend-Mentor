const mainConteiner = document.querySelector('.main');
const main1 = document.querySelector('.main1');
const main2 = document.querySelector('.main2');
const buttonsRate = document.querySelectorAll('.rate');
const submitBtn = document.getElementById('submit');
let valueRated = 0;

buttonsRate.forEach(btn => {
    btn.addEventListener('click', () => {
        valueRated = btn.id;
        btn.style.transform = 'rotate(360deg) scale(1.3)';
        btn.style.background = 'hsl(25, 97%, 53%)';
        btn.style.color = '#fff';
        submitBtn.innerText = `SUBMIT ${valueRated}`;
        setTimeout(()=>{
            btn.style.transform = 'rotate(0)';
            btn.style.background = 'hsl(214, 18%, 23%)';
            btn.style.color = '#aaa';
        }, 1500)
    })
})

submitBtn.addEventListener('click', () => {
    if (valueRated !== 0) {
        document.querySelector('.ty-subtitle').textContent = `You selected ${valueRated} out of 5`;
        main1.style.display = 'none';
        main2.style.display = 'flex';
    } else alert('Please, pick a rate')
}) 