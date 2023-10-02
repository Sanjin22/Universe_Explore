function prikazi() {
    var divovi = document.querySelectorAll(".box");

    for (var i = 0; i < divovi.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = divovi[i].getBoundingClientRect().top;
        var vidljivost = 300;

        if (elementTop < windowHeight - vidljivost) {
            divovi[i].classList.add("active");
        } else {
            divovi[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", prikazi);