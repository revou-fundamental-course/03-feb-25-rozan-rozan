var input;                                                                  //--DEKLARASI--//
var rumus;
var suhu1;
var suhu2;
var satuan1;
var satuan2;
var hasil;

function CF(){                                                              //--BUTTON CF
    rumus = "1";
    suhu1 = "Celsius";
    suhu2 = "Fahrenheit";
    satuan1 = "C";
    satuan2 = "F";
    document.getElementById("suhu1").innerHTML = suhu1;
    document.getElementById("suhu2").innerHTML = suhu2;
    document.getElementById("satuan1").innerHTML = satuan1;
    document.getElementById("satuan2").innerHTML = satuan2;
    document.getElementById("suhu1text").innerHTML = suhu1;
    document.getElementById("suhu2text").innerHTML = suhu2;
    document.getElementById("satuan1text").innerHTML = satuan1;
    document.getElementById("satuan2text").innerHTML = satuan2;

    input = document.getElementById("input").value;                             //--hitungan CF

    if (input == "") {                                                              //--jika tidak ada nilai input hitungan tidak dijalankan
        console.log("-----CF-----");
        console.log("input:", input);
        console.log("rumus:", rumus);
        console.log("suhu1:", suhu1);
        console.log("suhu2:", suhu2);
        console.log("satuan1:", satuan1);
        console.log("satuan2:", satuan2);
        console.log("hasil:", hasil);
        console.log("");
        return
    }else{
        hasil = input * (9/5) + 32;

        console.log("-----CF-----");
        console.log("input:", input);
        console.log("rumus:", rumus);
        console.log("suhu1:", suhu1);
        console.log("suhu2:", suhu2);
        console.log("satuan1:", satuan1);
        console.log("satuan2:", satuan2);
        console.log("hasil:", hasil);
        console.log("");
    }

    document.getElementById("hasil").innerHTML = hasil;
}
function FC(){                                                              //--BUTTON FC
    rumus = "2";
    suhu1 = "Fahrenheit";
    suhu2 = "Celsius";
    satuan1 = "F";
    satuan2 = "C";
    document.getElementById("suhu1").innerHTML = suhu1;
    document.getElementById("suhu2").innerHTML = suhu2;
    document.getElementById("satuan1").innerHTML = satuan1;
    document.getElementById("satuan2").innerHTML = satuan2;
    document.getElementById("suhu1text").innerHTML = suhu1;
    document.getElementById("suhu2text").innerHTML = suhu2;
    document.getElementById("satuan1text").innerHTML = satuan1;
    document.getElementById("satuan2text").innerHTML = satuan2;

    input = document.getElementById("input").value;                             //--hitungan FC--//

    if (input == "") {                                                              //--jika tidak ada nilai input hitungan tidak dijalankan
        console.log("-----FC-----");
        console.log("input:", input);
        console.log("rumus:", rumus);
        console.log("suhu1:", suhu1);
        console.log("suhu2:", suhu2);
        console.log("satuan1:", satuan1);
        console.log("satuan2:", satuan2);
        console.log("hasil:", hasil);
        console.log("");
        return
    }else{
        hasil = (input - 32) * 9/5;

        console.log("-----FC-----");
        console.log("input:", input);
        console.log("rumus:", rumus);
        console.log("suhu1:", suhu1);
        console.log("suhu2:", suhu2);
        console.log("satuan1:", satuan1);
        console.log("satuan2:", satuan2);
        console.log("hasil:", hasil);
        console.log("");
    }

    document.getElementById("hasil").innerHTML = hasil;

    
}

function perhitungan(){                                                     //--BUTTON KONVERSI
    input = document.getElementById("input").value;                             //--hitungan konversi

    if (input == "") {                                                              //--jika tidak ada nilai input hitungan tidak dijalankan
        console.log("-----GAGAL KONVERSI-----");
        console.log("");
        return
    }else{
        if (rumus == "2") {
            hasil = (input - 32) * 9/5;
        }else{
            hasil = input * (9/5) + 32;
        }
    }

    document.getElementById("hasil").innerHTML = hasil;

    console.log("-----BERHASIL KONVERSI-----");
    console.log("input:", input);
    console.log("rumus:", rumus);
    console.log("suhu1:", suhu1);
    console.log("suhu2:", suhu2);
    console.log("satuan1:", satuan1);
    console.log("satuan2:", satuan2);
    console.log("hasil:", hasil);
    console.log("");
}

function buttonreset(){                                                     //--BUTTON RESET
    input = "";
    rumus = "1";
    suhu1 = "Celsius";
    suhu2 = "Fahrenheit";
    satuan1 = "C";
    satuan2 = "F";
    hasil = "";

    document.getElementById("forminput").reset();                               //--hapus nilai input (termasuk 0)
    document.getElementById("hasil").innerHTML = " ";
    document.getElementById("suhu1").innerHTML = suhu1;
    document.getElementById("suhu2").innerHTML = suhu2;
    document.getElementById("satuan1").innerHTML = satuan1;
    document.getElementById("satuan2").innerHTML = satuan2;

    console.log("-----BERHASIL RESET-----");
    console.log("input:", input);
    console.log("rumus:", rumus);
    console.log("suhu1:", suhu1);
    console.log("suhu2:", suhu2);
    console.log("satuan1:", satuan1);
    console.log("satuan2:", satuan2);
    console.log("hasil:", hasil);
    console.log("");
}

function reverse(){  
    input = document.getElementById("input").value;

    if (input == "") {                                                              //--jika tidak ada nilai input hitungan tidak dijalankan
        if (rumus == 2) {
            rumus = 1;
            suhu1 = "Celsius";
            suhu2 = "Fahrenheit";
            satuan1 = "C";
            satuan2 = "F";
            hasil = ""
        }else{
            rumus = "2";
            suhu1 = "Fahrenheit";
            suhu2 = "Celsius";
            satuan1 = "F";
            satuan2 = "C";
            hasil = ""
        }
    }else{
        if (rumus == 2) {
            rumus = 1;
            suhu1 = "Celsius";
            suhu2 = "Fahrenheit";
            satuan1 = "C";
            satuan2 = "F";
        }else{
            rumus = "2";
            suhu1 = "Fahrenheit";
            suhu2 = "Celsius";
            satuan1 = "F";
            satuan2 = "C";
        }

        if (rumus == "2") {
            hasil = (input - 32) * 9/5;
        }else{
            hasil = input * (9/5) + 32;
        }
    }

    document.getElementById("hasil").innerHTML = hasil;

    document.getElementById("suhu1").innerHTML = suhu1;
    document.getElementById("suhu2").innerHTML = suhu2;
    document.getElementById("satuan1").innerHTML = satuan1;
    document.getElementById("satuan2").innerHTML = satuan2;
    document.getElementById("suhu1text").innerHTML = suhu1;
    document.getElementById("suhu2text").innerHTML = suhu2;
    document.getElementById("satuan1text").innerHTML = satuan1;
    document.getElementById("satuan2text").innerHTML = satuan2;

    console.log("-----BERHASIL REVERSE-----");
    console.log("input:", input);
    console.log("rumus:", rumus);
    console.log("suhu1:", suhu1);
    console.log("suhu2:", suhu2);
    console.log("satuan1:", satuan1);
    console.log("satuan2:", satuan2);
    console.log("hasil:", hasil);
    console.log("");
}