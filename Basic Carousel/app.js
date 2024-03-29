const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length

document
  .getElementById('carousel-button-next')
  .addEventListener('click', moveToNextSlide)
document
  .getElementById('carousel-button-prev')
  .addEventListener('click', moveToPrevSlide)

const displayRandomSlideOnLoad = Math.floor(Math.random() * totalSlides)
slides[displayRandomSlideOnLoad].classList.add('carousel-item-visible')

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.add('carousel-item-hidden')
    slide.classList.remove('carousel-item-visible')
  }
}

function moveToNextSlide() {
  hideAllSlides()

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0
  } else {
    slidePosition++
  }

  slides[slidePosition].classList.add('carousel-item-visible')
}

function moveToPrevSlide() {
  hideAllSlides()

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition--
  }

  slides[slidePosition].classList.add('carousel-item-visible')
}
