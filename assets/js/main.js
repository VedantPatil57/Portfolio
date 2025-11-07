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

// Dark mode toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    // Toggle dark mode on the body
    document.body.classList.toggle('dark-mode');

    // Toggle dark-mode class for navigation elements
    document.querySelector('.nav__logo').classList.toggle('dark-mode');
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => link.classList.toggle('dark-mode'));

    // Toggle icons (moon to sun or vice versa)
    const moonIcon = document.getElementById("moon-icon");
    const sunIcon = document.getElementById("sun-icon");

    if (document.body.classList.contains('dark-mode')) {
        moonIcon.style.display = "none"; // Hide moon icon
        sunIcon.style.display = "inline"; // Show sun icon
    } else {
        moonIcon.style.display = "inline"; // Show moon icon
        sunIcon.style.display = "none"; // Hide sun icon
    }

    // Save the user’s theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check the saved theme preference from localStorage
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById("moon-icon").style.display = "none";
        document.getElementById("sun-icon").style.display = "inline";
    }
});


// Apply the saved theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.nav__logo').classList.add('dark-mode');
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => link.classList.add('dark-mode'));
    }
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true


});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
