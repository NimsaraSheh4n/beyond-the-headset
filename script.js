/* ===========================
   LOADING SCREEN
=========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        loader.style.transition = "1s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 3000);

});


/* ===========================
   TYPEWRITER HERO
=========================== */

const titleText =
"BEYOND THE HEADSET";

const typewriter =
document.getElementById("typewriter");

let index = 0;

function typeText() {

    if (index < titleText.length) {

        typewriter.innerHTML +=
        titleText.charAt(index);

        index++;

        setTimeout(typeText, 120);

    }

}

typeText();


/* ===========================
   COUNTER ANIMATION
=========================== */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 100;

        if (count < target) {

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        }

        else {

            counter.innerText =
            target;

        }

    };

    updateCounter();

});


/* ===========================
   SCROLL REVEAL
=========================== */

function revealSections() {

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        section.getBoundingClientRect().top;

        const visible =
        150;

        if (elementTop <
            windowHeight - visible) {

            section.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
revealSections
);

revealSections();


/* ===========================
   ARCHITECTURE IMAGE MODAL
=========================== */

const architectureImage =
document.getElementById(
"architectureImage"
);

const imageModal =
document.getElementById(
"imageModal"
);

const modalImage =
document.getElementById(
"modalImage"
);

const closeModal =
document.getElementById(
"closeModal"
);

if (architectureImage) {

    architectureImage.addEventListener(
    "click",
    () => {

        imageModal.style.display =
        "flex";

        modalImage.src =
        architectureImage.src;

    });

}

if (closeModal) {

    closeModal.addEventListener(
    "click",
    () => {

        imageModal.style.display =
        "none";

    });

}

window.addEventListener(
"click",
(e) => {

    if (e.target === imageModal) {

        imageModal.style.display =
        "none";

    }

});


/* ===========================
   SMOOTH NAVIGATION
=========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e) {

        e.preventDefault();

        document
        .querySelector(
        this.getAttribute("href")
        )
        .scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ===========================
   NAVBAR GLOW ON SCROLL
=========================== */

window.addEventListener(
"scroll",
() => {

    const nav =
    document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow =
        "0 0 30px rgba(0,212,255,.25)";

    }

    else {

        nav.style.boxShadow =
        "none";

    }

});


/* ===========================
   FLOATING PARTICLES
=========================== */

const particles =
document.getElementById(
"particles"
);

for (let i = 0; i < 35; i++) {

    const particle =
    document.createElement("div");

    particle.classList.add(
    "particle"
    );

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.top =
    Math.random() * 100 + "%";

    particle.style.animationDuration =
    5 + Math.random() * 10 + "s";

    particle.style.animationDelay =
    Math.random() * 5 + "s";

    particles.appendChild(
    particle
    );

}


/* ===========================
   PARALLAX HERO
=========================== */

window.addEventListener(
"scroll",
() => {

    const scrolled =
    window.pageYOffset;

    const hero =
    document.querySelector(
    "header"
    );

    hero.style.transform =
    `translateY(${scrolled * 0.2}px)`;

});


/* ===========================
   CARD HOVER TILT
=========================== */

const cards =
document.querySelectorAll(
".innovation-card, .glass-card, .future-card"
);

cards.forEach(card => {

    card.addEventListener(
    "mousemove",
    (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        (x - rect.width / 2) / 15;

        const rotateX =
        -(y - rect.height / 2) / 15;

        card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-10px)`;

    });

    card.addEventListener(
    "mouseleave",
    () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/* ===========================
   FUTURE READY MESSAGE
=========================== */

console.log(

"%cBEYOND THE HEADSET",
"color:#00d4ff; font-size:28px; font-weight:bold;"

);

console.log(

"%cSynchronized External Visual Feedback System",
"color:white; font-size:14px;"

);