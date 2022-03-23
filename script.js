let resBtn = document.querySelector('.resBtn');
let showUl = document.querySelector('.showUL')

resBtn.addEventListener('click', () => {
    showUl.style.display = 'block';
    setTimeout(() => {
        showUl.style.display = 'none';
    }, 10000)

})