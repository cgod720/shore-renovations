const mondrian = document.querySelector('.mondrian')

const images = document.querySelectorAll('.mondrian img')


images.forEach((img, i) => {
    img.setAttribute('data-num', i)
})
console.log(mondrian)
// mondrian.addEventListener('click', (e) => {
//     console.log(e.target)
// })