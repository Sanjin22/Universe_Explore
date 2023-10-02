window.onscroll = () => {
    funkcija()
};

function funkcija() {
    var pocetna = document.documentElement.scrollTop;
    var visinaGl = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var skrolano = (pocetna / visinaGl) * 100;
    document.getElementById("slajder").style.width = skrolano + "%";
}

var images = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg"],
    brojac = 0,
    zamjena = setInterval(function () {
        if (brojac >= images.length)
            brojac = 0;
        document.getElementById("zavrsniDio").style.backgroundImage = 'url(' + images[brojac++] + ')';
    }, 5000); 