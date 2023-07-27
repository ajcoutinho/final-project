// This code will toggle the 'debug' class on the body element
// when the 'debug' class is added, styling is applied
// to add a red border around all elements on the page

window.addEventListener('click', function() {
  
  document.querySelector('body').classList.toggle('debug')

})