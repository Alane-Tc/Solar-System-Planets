window.addEventListener("load", function () {
    var bn_calculate = document.querySelector("#calculate");
    var bn_clear = document.querySelector("#btn_clear");
    var calculate_mercury = document.querySelector("#mercury_age");
    var calculate_venus = document.querySelector("#venus_age");
    var calculate_earth = document.querySelector("#tierra_age");
    var calculate_mars = document.querySelector("#marte_age");
    var calculate_jupiter = document.querySelector("#jupiter_age");
    var calculate_saturno = document.querySelector("#saturno_age");
    var calculate_urano = document.querySelector("#urano_age");
    var calculate_neptune = document.querySelector("#neptuno_age");
    var calculate_pluto = document.querySelector("#pluton_age");

    //Planets
    let mercury = parseFloat(87);
    let venus = parseFloat(225);
    let earth = 365;
    let mars = 687;
    let jupiter = 12; //0.084
    let saturn = 29.46;
    let uranus = 84.01;
    let neptune = 164.79;
    let plute = 248.59;

    Math.trunc(mercury);



    calculate_mercury.innerHTML = "0 " + "Años";
    calculate_venus.innerHTML = "0 " + "Años";
    calculate_earth.innerHTML = "0 " + "Años";
    calculate_mars.innerHTML = "0 " + "Años";
    calculate_jupiter.innerHTML = "00 " + "Años";
    calculate_saturno.innerHTML = "0 " + "Años";
    calculate_urano.innerHTML = "0 " + "Años";
    calculate_neptune.innerHTML = "0 " + "Años";
    calculate_pluto.innerHTML = "0 " + "Años";
    function calculate_age() {
        let age = parseInt(document.querySelector("#age").value);

        if (age <= 0) {
            alert("No puedes tener una edad negativa");
        } else if (age >= 110) {
            alert("Imposible vivir hasta esa edad");
        } else if (isNaN(age)) {
            alert("!UY¡ Algo salió mal");
        } else {
            console.log("calculado....");
            let period_eart = parseFloat(age * earth);


            //Edad marte
            calculate_mercury.innerHTML = " Años";
            //Edad venus
            calculate_venus.innerHTML =  + " Años";
            //Edad Tierra
            calculate_earth.innerHTML = age + " Años";
            //Edad marte
            calculate_mars.innerHTML =  " Años";
            //Edad jupiter
            calculate_jupiter.innerHTML = parseFloat(age/jupiter) + " Años";
            //Edad Saturno
            calculate_saturno =  + " Años";
            //Edad urano
            calculate_urano =  + " Años";
            //Edad Neptuno
            calculate_neptune =  + " Años";
            //Edad pluton
            calculate_pluto =  + " Años";
        }

    }




    bn_calculate.addEventListener("click", function () {
        calculate_age();
    });

/*https://www.mediavida.com/foro/off-topic/calcula-tu-edad-diferentes-planetas-462109
    https://www.exploratorium.edu/ronh/age/

*/ 

});
