import throttle from 'lodash.throttle'

//Get the button
let mybutton = document.querySelector("button.btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = throttle(scrollFunction,300)

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}