let dogruSayi = Math.floor(Math.random() * 10) + 1; // Rastgele sayı üret
let hak = 3; // Tahmin hakkı

function basla() {
    let mesaj = document.getElementById("mesaj");
    mesaj.innerText = "1 ile 10 arasında bir sayı tuttum. Bakalım bulabilecek misin!";

    while (hak > 0) {
        let tahmin = prompt("Tahminin nedir?");
        tahmin = parseInt(tahmin);

        if (tahmin === dogruSayi) {
            mesaj.innerText = "Tebrikler! Doğru tahmin ettin!";
            return;
        } else if (tahmin < dogruSayi) {
            alert("Daha büyük bir sayı dene!");
        } else {
            alert("Daha küçük bir sayı dene!");
        }

        hak--;
        if (hak === 0) {
            mesaj.innerText = `Maalesef kaybettin. Doğru sayı: ${dogruSayi}`;
            return;
        }
    }
}
