const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}
const body = document.querySelector('body')
document.querySelector("#button_switch_mode").onclick = function(){
  body.classList.add('black_mode')
}

document.querySelector("#button_switch_mode").onclick = function(){
  if (body.hasClass('black_mode')){
    body.classList.remove('black_mode')
  }
}