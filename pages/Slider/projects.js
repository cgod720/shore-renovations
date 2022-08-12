const slider = document.querySelector('.slider')
const subContainer = document.querySelector('.sub-container')

slider.addEventListener('input', (e) => {
    subContainer.style.setProperty('--position', `${e.target.value}%`)
})