/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) => {
  const accoordionHeader = item.querySelector('.value__accordion-header')

  accoordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if (openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})
const toggleItem = (item) => {
  const accordionContent = item.querySelector('.value__accordion-content')

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.toggle('active-link', (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight))
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll");
}

window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain th current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

//we validate if the user previously chose a topic 
if(selectedTheme){
  // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  document.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// actvate / deactiate the theme manually with the button
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //we save the thee and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon()) 
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
