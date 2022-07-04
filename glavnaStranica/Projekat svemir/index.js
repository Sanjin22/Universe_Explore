var dan = document.getElementById("dani");
var mjesec = document.getElementById("mjeseci");
var godina = document.getElementById("godine");

var dani = 0;
var mjeseci = 0;
var godine = 0;

function rastDana() {
    dani += 1;
    dan.innerHTML = dani;
    if (dani == 365) {
        dani = 0;
        mjeseci = 0;
        godina.innerHTML = godine += 1;
    }
    if (dani % 30 == 0) {
        mjeseci += 1
        if (mjeseci != 13)
            mjesec.innerHTML = mjeseci;
    }
}

var daniRast = setInterval(rastDana, 27.7777778);

