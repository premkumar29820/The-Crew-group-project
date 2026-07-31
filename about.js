/* =====================================================
         TEAM MEMBERS
      ===================================================== */

const members = [

    {
        name: "Prem Kumar",
        role: "Founder & Product Lead",
        about: "Turning innovative ideas into reality and building premium digital experiences.",
        image: "./image/bg3.JPG",
        background: "bg1.jpg",

        skills: [
            "Leadership",
            "Project Management",
            "UI Planning",
            "Problem Solving"
        ],

        social: {
            instagram: "#",
            linkedin: "https://www.linkedin.com/in/prem-kumar-b6a012415/?skipRedirect=true",
            github: "#"
        }
    },

    {
        name: "Pratheesh",
        role: "UI / UX Designer",
        about: "Designs beautiful interfaces with a strong focus on user experience.",
        image: "./image/Pratheesh.jpg",
        background: "bg2.jpg",

        skills: [
            "Figma",
            "Wireframing",
            "UI Design",
            "UX Research"
        ],

        social: {
            instagram: "https://www.instagram.com/revan.pratheesh/",
            linkedin: "https://www.linkedin.com/in/pratheesh-selvaraj-567859413/",
            github: "https://github.com/Pratheeshselvaraj"
        }
    },

    {
        name: "Lithish",
        role: "Frontend Engineer",
        about: "Builds responsive and engaging digital experiences using modern frontend technologies.",
        image: "./image/lithish-prof.jpeg",
        background: "bg.jpg",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],

        social: {
            instagram: "https://www.instagram.com/lithishhh.17_?igsh=MW85OWphbTQ0cnh6dw==",
            linkedin: "https://www.linkedin.com/in/lithishhh-luther-7b3897413?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            github: "https://github.com/lithishhhh"
        }
    },

    {
        name: "Thanushiya",
        role: "Backend Engineer",
        about: "Develops secure APIs and builds reliable database-driven systems.",
        image: "./image/tha.jpg",
        background: "bg4.jpg",

        skills: [
            "Node.js",
            "Express",
            "MongoDB",
            "REST APIs"
        ],

        social: {
            instagram: "#",
            linkedin: "https://www.linkedin.com/in/thanushiya-t-389782360",
            github: "#"
        }
    },

    {
        name: "Jayasri",
        role: "Marketing & Growth",
        about: "Focused on growth, brand visibility and creating meaningful digital impact.",
        image: "./image/jayasri.jpg",
        imageAlign: "center",
        background: "bg5.jpg",

        skills: [
            "Marketing",
            "SEO",
            "Brand Strategy",
            "Branding"
        ],

        social: {
            instagram: "#",
            linkedin: "https://www.linkedin.com/in/jayasri-ravichandran-614067370?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            github: "#"
        }
    }

];

let current = 0;

function showMember(index) {

    current = index;

    const member = members[index];

    document.getElementById("background").style.backgroundImage =
        `url(${member.background})`;

    document.getElementById("mainImage").src =
        member.image;

    document.getElementById("memberName").textContent =
        member.name;

    document.getElementById("memberRole").textContent =
        member.role;

    document.getElementById("memberAbout").textContent =
        member.about;

    document.getElementById("instagramLink").href =
        member.social.instagram;

    document.getElementById("linkedinLink").href =
        member.social.linkedin;

    document.getElementById("githubLink").href =
        member.social.github;

    document.getElementById("skills").innerHTML =
        member.skills
            .map(skill => `<li>${skill}</li>`)
            .join("");

    document
        .querySelectorAll(".member-card")
        .forEach(card => {

            card.classList.remove("active");

        });

    document
        .querySelectorAll(".member-card")[index]
        .classList.add("active");

}

document
    .querySelectorAll(".member-card")
    .forEach((card, index) => {

        card.addEventListener("click", () => {

            showMember(index);

        });

    });

showMember(0);


/* =====================================================
   MOBILE NAVIGATION
===================================================== */
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = "0%"
}

)

closenav.addEventListener("click", function () {
    sidenav.style.right = "-70%"
})


/* =====================================================
   NAVBAR SCROLL
===================================================== */

window.addEventListener("scroll", () => {

    const navbar =
        document.getElementById("navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   PROJECT SLIDER
===================================================== */

let currentSlide = 0;

const slides =
    document.querySelectorAll(".work-slide");

const dots =
    document.querySelectorAll(".dot");

function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    dots.forEach(dot => {

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

function changeSlide(step) {

    currentSlide += step;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

function goToSlide(index) {

    currentSlide = index;

    showSlide(currentSlide);

}


/* =====================================================
   STARTUP LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("startupLoader")
            .classList.add("hide");

    }, 2000);

});



/* =====================================================
   CIRCLE TOUCH / CLICK POP EFFECT
===================================================== */

const imageCircle =
    document.querySelector(".image-box");

imageCircle.addEventListener("click", () => {

    imageCircle.classList.toggle("circle-active");

});
