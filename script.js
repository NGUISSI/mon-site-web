
/* =====================================================
   MENU MOBILE
===================================================== */

const menuButton =
    document.getElementById("menu-button");

const mobileNavigation =
    document.getElementById("mobile-navigation");


menuButton.addEventListener("click", function () {

    mobileNavigation.classList.toggle("show");

});


/* Fermer le menu après avoir cliqué */

const mobileLinks =
    mobileNavigation.querySelectorAll("a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileNavigation.classList.remove("show");

    });

});


/* =====================================================
   ANNÉE AUTOMATIQUE
===================================================== */

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


/* =====================================================
   NAVIGATION ACTIVE
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   FORMULAIRE
===================================================== */

const form =
    document.getElementById("contact-form");

const status =
    document.getElementById("form-status");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const projectType =
        document.getElementById("project-type").value;

    const message =
        document.getElementById("message").value.trim();


    /* Vérification */

    if (
        name === "" ||
        email === "" ||
        projectType === "" ||
        message === ""
    ) {

        status.textContent =
            "Veuillez remplir tous les champs obligatoires.";

        status.classList.add("show");

        return;

    }


    /* Message de confirmation */

    status.textContent =
        "Votre demande a bien été enregistrée. Je reviendrai vers vous rapidement.";

    status.classList.add("show");


    /* Réinitialisation du formulaire */

    form.reset();

});
