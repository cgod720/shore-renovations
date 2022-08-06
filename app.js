// test sheet
// https://script.google.com/macros/s/AKfycbwH5wiLI_ZhpCgJgJvLh1Bs976ssEqC8svUXdkuYGOewKFQ1Ts/exec

const scriptURL = 'https://script.google.com/macros/s/AKfycbwH5wiLI_ZhpCgJgJvLh1Bs976ssEqC8svUXdkuYGOewKFQ1Ts/exec'
const form = document.querySelector('form')

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