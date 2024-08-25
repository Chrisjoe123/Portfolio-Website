// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active section for animation on scroll
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });

    // sticky header

    let header = document.querySelector('header')

    header.classList.toggle('sticky',window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

    let footer = document.querySelector('footer');
    let scrollPosition = this.innerHeight + this.scrollY;
    let scrollHeight = document.scrollingElement.scrollHeight;

    if (scrollPosition >= scrollHeight - 10) {
        footer.classList.add('show-animate');
    } else {
        footer.classList.remove('show-animate');
}

}

// Contact Email

function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_hh2n5d4","template_8ndizyj",parms).then(alert("Email Successfully Sent"))
}