// Tilni almashtirish funksiyasi
function changeLanguage() {
    let lang = document.getElementById("language").value;
    let currentPage = window.location.pathname;
    if (lang === "en") {
        window.location.href = currentPage.replace("_uz", "");
    } else {
        window.location.href = currentPage.replace(".html", "_uz.html");
    }
}

// Kontakt formani tekshirish
document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Barcha maydonlarni to‘ldiring!");
                event.preventDefault();
            }
        });
    }
});
