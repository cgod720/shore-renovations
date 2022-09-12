// test sheet
// https://script.google.com/macros/s/AKfycbwH5wiLI_ZhpCgJgJvLh1Bs976ssEqC8svUXdkuYGOewKFQ1Ts/exec


const scriptURL = 'https://script.google.com/macros/s/AKfycbwH5wiLI_ZhpCgJgJvLh1Bs976ssEqC8svUXdkuYGOewKFQ1Ts/exec'
const form = document.querySelector('form')
const leftArrow = document.querySelector('#left-arrow')
const rightArrow = document.querySelector('#right-arrow')
const carousel = document.querySelector('#carousel')

const imageArr = ['./images/bath-redone.jpg', './images/bathroom2-refinished.jpg', './images/kitch-finished1.jpg']
let imageIndex = 0


form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.classList.add("responsive");
    } else {
      x.classList.remove("responsive");
    }
}

rightArrow.addEventListener('click', () => {
  imageIndex++
  if(imageIndex >= imageArr.length) {
    imageIndex = 0
  }
  carousel.src = imageArr[imageIndex]
})

leftArrow.addEventListener('click', () => {
  imageIndex--
  if(imageIndex <= -1){
    imageIndex = imageArr.length - 1
  }
  carousel.src = imageArr[imageIndex]
})

setInterval(() => {
  imageIndex++
  if(imageIndex >= imageArr.length) {
    imageIndex = 0
  }
  carousel.src = imageArr[imageIndex]
}, 5000)