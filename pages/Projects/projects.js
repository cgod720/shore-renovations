const scriptURL = 'https://script.google.com/macros/s/AKfycbwH5wiLI_ZhpCgJgJvLh1Bs976ssEqC8svUXdkuYGOewKFQ1Ts/exec'
const form = document.querySelector('form')

const mondrian = document.querySelector('.mondrian')

const images = document.querySelectorAll('.mondrian img')

const modal = document.querySelector('.modal-container')

// Navigation arrows on modal
const leftArrow = document.querySelector('#left-arrow')
const rightArrow = document.querySelector('#right-arrow')

const image = document.querySelector('#image')


const imageArr = ["../../images/kitchen1-finished.jpg", "../../images/kitchen2-finished.jpg", "../../images/kitch-finished1.jpg", "../../images/open-room-finished.jpg", "../../images/bathroom2-refinished.jpg", "../../images/deck-finished.jpg", "../../images/bath-redone.jpg", "../../images/rest2-done.jpg", "../../images/IMG_3024.jpg", "../../images/IMG_3029.jpg", "../../images/IMG_3042.jpg", "../../images/IMG_3043.jpg", "../../images/IMG_3044.jpg", "../../images/IMG_3059.jpg", "../../images/IMG_3088.jpg", "../../images/IMG_3094.jpg"]
let index

images.forEach((img, i) => {
    img.setAttribute('data-num', i)
})
// console.log(mondrian)
mondrian.addEventListener('click', (e) => {
    if(e.target.tagName === "IMG"){
        modal.classList.remove('hidden')
        index = e.target.dataset.num
        image.src = imageArr[index]
    }
})

rightArrow.addEventListener('click', () => {
    index++
    if(index >= imageArr.length) {
      index = 0
    }
    image.src = imageArr[index]
  })
  
  leftArrow.addEventListener('click', () => {
    index--
    if(index <= -1){
      index = imageArr.length - 1
    }
    image.src = imageArr[index]
  })


modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-container')){
        modal.classList.add('hidden')
    }
})


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