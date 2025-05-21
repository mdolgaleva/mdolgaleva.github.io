/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

/*===== ACCORDION DROPDOWNS FOR WORK SECTION =====*/
/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}*/

const accordionContent = document.querySelectorAll(".accordion__content");
const accordionHeader = document.querySelectorAll(".accordion__header");

function toggleAccordion() {
  const parent = this.parentNode;
  const isOpen = parent.classList.contains("accordion__open");

  // Close all
  accordionContent.forEach((item) => {
    item.classList.remove("accordion__open");
    item.classList.add("accordion__close");
  });

  // Open the clicked one if it was closed
  if (!isOpen) {
    parent.classList.remove("accordion__close");
    parent.classList.add("accordion__open");
  }
}

accordionHeader.forEach((el) => {
  el.addEventListener("click", toggleAccordion);
});

// Language switch
const langEN = document.getElementById('lang-en');
const langRU = document.getElementById('lang-ru');
const languageTitle = document.getElementById('language-title');

langEN.addEventListener('click', () => {
    languageTitle.innerHTML = 'Russian <br>Court Interpreter';
    langEN.classList.add('selected');
    langRU.classList.remove('selected');
});

langRU.addEventListener('click', () => {
    languageTitle.innerHTML = 'Русский <br>судебный переводчик';
    langRU.classList.add('selected');
    langEN.classList.remove('selected');
});


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .skills__container, .contact__input',{interval: 200}); 
sr.reveal('.accordion__content', { interval: 200 }); 
