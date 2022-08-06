// test sheet
// https://script.google.com/macros/s/AKfycbwH5wiLI_ZhpCgJgJvLh1Bs976ssEqC8svUXdkuYGOewKFQ1Ts/exec

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.classList.add("responsive");
    } else {
      x.classList.remove("responsive");
    }
  }