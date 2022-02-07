function myFunction() {
    let text;
    let user = prompt("Adınız nedir?");
    if (user == null || user == "") {
        text = "undefined";
    } else {
        text = user;
    }
    document.getElementById("myName").innerHTML = text;
}




showTime = () => {
    var tarih = new Date();
    var gun = tarih.getDay();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();

    switch (gun) {

        case 1:
            gun = "Pazartesi";
            break;
        case 2:
            gun = "Salı";
            break;
        case 3:
            gun = "Çarşamba";
            break;
        case 4:
            gun = "Perşembe";
            break;
        case 5:
            gun = "Cuma";
            break;

        case 6:
            gun = "Cumartesi";
            break;
        case 7:
            gun = "pazar";
            break;
    }
    var data = saat + ":" + dakika + ":" + saniye + " " + gun;
    document.getElementById('myClock').innerHTML = data;
}

setInterval(showTime, 1000);

