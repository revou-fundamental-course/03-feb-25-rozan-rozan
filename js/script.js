var input;                                                                  //--DEKLARASI
var suhu1;
var suhu2;
var tmpsuhu1;
var tmpsuhu2;
var hasil;

suhu1 = "Celsius";                                                          //--DEFAULT
suhu2 = "Fahrenheit";

function satuC(){                                                           //--PILIHAN 1 CELSIUS
    console.log("--function satuC");  
    if (suhu2 != "Celsius") {                                                   //--jika suhu2 != C, maka set suhu1 = C
        suhu1 = "Celsius";

        document.getElementById("suhu1").innerHTML = suhu1;
        document.getElementById("suhu2").innerHTML = suhu2;
        document.getElementById("suhu1text").innerHTML = suhu1;
        document.getElementById("suhu2text").innerHTML = suhu2;
        document.getElementById("singkat1").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2").innerHTML = suhu2.charAt(0);
        document.getElementById("singkat1text").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2text").innerHTML = suhu2.charAt(0);

        console.log("  suhu1 : ", suhu1);
        console.log("  suhu2 : ", suhu2);
    }else{                                                                      //--jika suhu2 == C, maka tukar pilihan
        tmpsuhu1 = suhu1;
        tmpsuhu2 = suhu2;
        suhu1 = tmpsuhu2;
        suhu2 = tmpsuhu1;

        document.getElementById("suhu1").innerHTML = suhu1;
        document.getElementById("suhu2").innerHTML = suhu2;
        document.getElementById("suhu1text").innerHTML = suhu1;
        document.getElementById("suhu2text").innerHTML = suhu2;
        document.getElementById("singkat1").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2").innerHTML = suhu2.charAt(0);
        document.getElementById("singkat1text").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2text").innerHTML = suhu2.charAt(0);

        console.log("  suhu1 : ", suhu1);
        console.log("  suhu2 : ", suhu2);
    } 
    
    input = document.getElementById("input").value;

    if (input == "") {                                                          //--jika input tidak ada = return
        document.getElementById("hasil").innerHTML = "";
        
        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
        return
    }else{
        if (suhu1 == "Celsius") {                                                   //--jika suhu1 == C pada kasus ini otomatis suhu2 == F
            hasil = input * (9 / 5) + 32;
            document.getElementById("cara").innerHTML = input + "C&deg; * (9/5) + 32 = " + hasil + "F&deg;";
        }else{                                                                      //--sebaliknya
            hasil = (input - 32) * 9 / 5;
            document.getElementById("cara").innerHTML = "(" + input + "F&deg; - 32) * 9/5 = " + hasil + "C&deg;";
        }
        document.getElementById("hasil").innerHTML = hasil;

        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
    }
}
function satuF(){ 
    console.log("--function satuF");  
    if (suhu2 != "Fahrenheit") {                                                //--jika suhu2 != F, maka set suhu1 = F
        suhu1 = "Fahrenheit";

        document.getElementById("suhu1").innerHTML = suhu1;
        document.getElementById("suhu2").innerHTML = suhu2;
        document.getElementById("suhu1text").innerHTML = suhu1;
        document.getElementById("suhu2text").innerHTML = suhu2;
        document.getElementById("singkat1").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2").innerHTML = suhu2.charAt(0);
        document.getElementById("singkat1text").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2text").innerHTML = suhu2.charAt(0);

        console.log("  suhu1 : ", suhu1);
        console.log("  suhu2 : ", suhu2);
    }else{                                                                      //--jika suhu2 == F, maka tukar pilihan
        tmpsuhu1 = suhu1;
        tmpsuhu2 = suhu2;
        suhu1 = tmpsuhu2;
        suhu2 = tmpsuhu1;

        document.getElementById("suhu1").innerHTML = suhu1;
        document.getElementById("suhu2").innerHTML = suhu2;
        document.getElementById("suhu1text").innerHTML = suhu1;
        document.getElementById("suhu2text").innerHTML = suhu2;
        document.getElementById("singkat1").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2").innerHTML = suhu2.charAt(0);
        document.getElementById("singkat1text").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2text").innerHTML = suhu2.charAt(0);

        console.log("  suhu1 : ", suhu1);
        console.log("  suhu2 : ", suhu2);
    }  
    
    input = document.getElementById("input").value;

    if (input == "") {                                                          //--jika input tidak ada = return
        document.getElementById("hasil").innerHTML = "";

        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
        return
    }else{
        if (suhu1 == "Celsius") {                                                   //--jika suhu1 == C pada kasus ini otomatis suhu2 == F
            hasil = input * (9 / 5) + 32;
            document.getElementById("cara").innerHTML = input + "C&deg; * (9/5) + 32 = " + hasil + "F&deg;";
        }else{                                                                      //--sebaliknya
            hasil = (input - 32) * 9 / 5;
            document.getElementById("cara").innerHTML = "(" + input + "F&deg; - 32) * 9/5 = " + hasil + "C&deg;";
        }
        document.getElementById("hasil").innerHTML = hasil;

        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
    }
}
function duaC(){                                                           //--PILIHAN 1 CELSIUS
    console.log("--function duaC");  
    if (suhu1 != "Celsius") {                                                   //--jika suhu1 != C, maka set suhu2 = C
        suhu2 = "Celsius";

        document.getElementById("suhu1").innerHTML = suhu1;
        document.getElementById("suhu2").innerHTML = suhu2;
        document.getElementById("suhu1text").innerHTML = suhu1;
        document.getElementById("suhu2text").innerHTML = suhu2;
        document.getElementById("singkat1").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2").innerHTML = suhu2.charAt(0);
        document.getElementById("singkat1text").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2text").innerHTML = suhu2.charAt(0);

        console.log("  suhu1 : ", suhu1);
        console.log("  suhu2 : ", suhu2);
    }else{                                                                      //--jika suhu1 == C, maka tukar pilihan
        tmpsuhu1 = suhu1;
        tmpsuhu2 = suhu2;
        suhu1 = tmpsuhu2;
        suhu2 = tmpsuhu1;

        document.getElementById("suhu1").innerHTML = suhu1;
        document.getElementById("suhu2").innerHTML = suhu2;
        document.getElementById("suhu1text").innerHTML = suhu1;
        document.getElementById("suhu2text").innerHTML = suhu2;
        document.getElementById("singkat1").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2").innerHTML = suhu2.charAt(0);
        document.getElementById("singkat1text").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2text").innerHTML = suhu2.charAt(0);

        console.log("  suhu1 : ", suhu1);
        console.log("  suhu2 : ", suhu2);
    } 

    input = document.getElementById("input").value;

    if (input == "") {                                                          //--jika input tidak ada = return
        document.getElementById("hasil").innerHTML = "";
        
        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
        return
    }else{
        if (suhu1 == "Celsius") {                                                   //--jika suhu1 == C pada kasus ini otomatis suhu2 == F
            hasil = input * (9 / 5) + 32;
            document.getElementById("cara").innerHTML = input + "C&deg; * (9/5) + 32 = " + hasil + "F&deg;";
        }else{                                                                      //--sebaliknya
            hasil = (input - 32) * 9 / 5;
            document.getElementById("cara").innerHTML = "(" + input + "F&deg; - 32) * 9/5 = " + hasil + "C&deg;";
        }
        document.getElementById("hasil").innerHTML = hasil;

        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
    }
}
function duaF(){ 
    console.log("--function duaF");  
    if (suhu1 != "Fahrenheit") {                                                //--jika suhu1 != F, maka set suhu2 = F
        suhu2 = "Fahrenheit";

        document.getElementById("suhu1").innerHTML = suhu1;
        document.getElementById("suhu2").innerHTML = suhu2;
        document.getElementById("suhu1text").innerHTML = suhu1;
        document.getElementById("suhu2text").innerHTML = suhu2;
        document.getElementById("singkat1").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2").innerHTML = suhu2.charAt(0);
        document.getElementById("singkat1text").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2text").innerHTML = suhu2.charAt(0);

        console.log("  suhu1 : ", suhu1);
        console.log("  suhu2 : ", suhu2);
    }else{                                                                      //--jika suhu1 == F, maka tukar pilihan
        tmpsuhu1 = suhu1;
        tmpsuhu2 = suhu2;
        suhu1 = tmpsuhu2;
        suhu2 = tmpsuhu1;

        document.getElementById("suhu1").innerHTML = suhu1;
        document.getElementById("suhu2").innerHTML = suhu2;
        document.getElementById("suhu1text").innerHTML = suhu1;
        document.getElementById("suhu2text").innerHTML = suhu2;
        document.getElementById("singkat1").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2").innerHTML = suhu2.charAt(0);
        document.getElementById("singkat1text").innerHTML = suhu1.charAt(0);
        document.getElementById("singkat2text").innerHTML = suhu2.charAt(0);

        console.log("  suhu1 : ", suhu1);
        console.log("  suhu2 : ", suhu2);
    }  
    
    input = document.getElementById("input").value;

    if (input == "") {                                                          //--jika input tidak ada = return
        document.getElementById("hasil").innerHTML = "";
        
        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
        return
    }else{
        if (suhu1 == "Celsius") {                                                   //--jika suhu1 == C pada kasus ini otomatis suhu2 == F
            hasil = input * (9 / 5) + 32;
            document.getElementById("cara").innerHTML = input + "C&deg; * (9/5) + 32 = " + hasil + "F&deg;";
        }else{                                                                      //--sebaliknya
            hasil = (input - 32) * 9 / 5;
            document.getElementById("cara").innerHTML = "(" + input + "F&deg; - 32) * 9/5 = " + hasil + "C&deg;";
        }
        document.getElementById("hasil").innerHTML = hasil;

        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
    }
}

function perhitungan(){  
    console.log("--function perhitungan--");                               //--BUTTON KONVERSI
    input = document.getElementById("input").value;

    if (input == "") {                                                          //--jika input tidak ada = return
        document.getElementById("hasil").innerHTML = "";                          
        
        console.log("  suhu1 : ", suhu1);
        console.log("  suhu2 : ", suhu2);
        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
        return
    }else{
        if (suhu1 == "Celsius") {                                                   //--jika suhu1 == C pada kasus ini otomatis suhu2 == F
            hasil = input * (9 / 5) + 32; 
            document.getElementById("cara").innerHTML = input + "C&deg; * (9/5) + 32 = " + hasil + "F&deg;";
        }else{                                                                      //--sebaliknya
            hasil = (input - 32) * 9 / 5; 
            document.getElementById("cara").innerHTML = "(" + input + "F&deg; - 32) * 9/5 = " + hasil + "C&deg;";
        }
        document.getElementById("hasil").innerHTML = hasil;
        
        console.log("  suhu1 : ", suhu1);
        console.log("  suhu2 : ", suhu2);
        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
    }
}

function buttonreset(){                                                     //--BUTTON RESET
    console.log("--function buttonreset--");
    
    suhu1 = "Celsius";
    suhu2 = "Fahrenheit";
    input = "";
    hasil = "";

    document.getElementById("forminput").reset(); 
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("cara").innerHTML = "";

    document.getElementById("suhu1").innerHTML = suhu1;
    document.getElementById("suhu2").innerHTML = suhu2;
    document.getElementById("suhu1text").innerHTML = suhu1;
    document.getElementById("suhu2text").innerHTML = suhu2;
    document.getElementById("singkat1").innerHTML = suhu1.charAt(0);
    document.getElementById("singkat2").innerHTML = suhu2.charAt(0);
    document.getElementById("singkat1text").innerHTML = suhu1.charAt(0);
    document.getElementById("singkat2text").innerHTML = suhu2.charAt(0);

    console.log("  suhu1 : ", suhu1);
    console.log("  suhu2 : ", suhu2);
    console.log("  input : ", input);
    console.log("  hasil : ", hasil);
    console.log("");
}

function reverse(){ 
    console.log("--function reverse--");

    tmpsuhu1 = suhu1;
    tmpsuhu2 = suhu2;
    suhu1 = tmpsuhu2;
    suhu2 = tmpsuhu1;

    document.getElementById("suhu1").innerHTML = suhu1;
    document.getElementById("suhu2").innerHTML = suhu2;
    document.getElementById("suhu1text").innerHTML = suhu1;
    document.getElementById("suhu2text").innerHTML = suhu2;
    document.getElementById("singkat1").innerHTML = suhu1.charAt(0);
    document.getElementById("singkat2").innerHTML = suhu2.charAt(0);
    document.getElementById("singkat1text").innerHTML = suhu1.charAt(0);
    document.getElementById("singkat2text").innerHTML = suhu2.charAt(0);

    console.log("  suhu1 : ", suhu1);
    console.log("  suhu2 : ", suhu2);

    input = document.getElementById("input").value;

    if (input == "") {                                                          //--jika input tidak ada = return
        document.getElementById("hasil").innerHTML = "";
        
        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
        return
    }else{
        if (suhu1 == "Celsius") {                                                   //--jika suhu1 == C pada kasus ini otomatis suhu2 == F
            hasil = input * (9 / 5) + 32;
            document.getElementById("cara").innerHTML = input + "C&deg; * (9/5) + 32 = " + hasil + "F&deg;";
        }else{                                                                      //--sebaliknya
            hasil = (input - 32) * 9 / 5;
            document.getElementById("cara").innerHTML = "(" + input + "F&deg; - 32) * 9/5 = " + hasil + "C&deg;";
        }
        document.getElementById("hasil").innerHTML = hasil;
        
        console.log("  input : ", input);
        console.log("  hasil : ", hasil);
        console.log("");
    }
}