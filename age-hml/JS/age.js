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
    //------------------------------------------------------------------
    //Planets
    let mercury = 4.19;
    let venus = 1.62;
    let mars = 0.53;
    let jupiter = 0.084
    let saturn = 0.034;
    let uranus = 0.012;
    let neptune = 0.006;
    let plute = 0.004032;
    //---------------------------------------------------------------
    calculate_mercury.innerHTML = "0 " + "Años";
    calculate_venus.innerHTML = "0 " + "Años";
    calculate_earth.innerHTML = "0 " + "Años";
    calculate_mars.innerHTML = "0 " + "Años";
    calculate_jupiter.innerHTML = "0 " + "Años";
    calculate_saturno.innerHTML = "0 " + "Años";
    calculate_urano.innerHTML = "0 " + "Años";
    calculate_neptune.innerHTML = "0 " + "Años";
    calculate_pluto.innerHTML = "0 " + "Años";
    document.querySelector("#Resu_division").innerHTML = "0" + " Años";
    //-----------------------------------------------------------------
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
            document.querySelector("#Resu_division").innerHTML = age + " Años";
            let a1 = age * mercury;
            let a2 = age * venus;
            let a3 = age * mars;
            let a4 = age * jupiter;
            let a5 = age * saturn;
            let a6 = age * uranus;
            let a7 = age * neptune;
            let a8 = age * plute;
            //Edad marte
            calculate_mercury.innerHTML = a1.toFixed(3) + " Años";
            //Edad venus
            calculate_venus.innerHTML = a2.toFixed(3) + " Años";
            //Edad Tierra
            calculate_earth.innerHTML = age + " Años";
            //Edad marte
            calculate_mars.innerHTML = a3.toFixed(3) + " Años";
            //Edad jupiter
            calculate_jupiter.innerHTML = a4.toFixed(3) + " Años";
            //Edad Saturno
            calculate_saturno.innerHTML = a5.toFixed(3) + " Años";
            //Edad urano
            calculate_urano.innerHTML = a6.toFixed(3) + " Años";
            //Edad Neptuno
            calculate_neptune.innerHTML = a7.toFixed(3) + " Años";
            //Edad pluton
            calculate_pluto.innerHTML = a8.toFixed(3) + " Años";
        }

    }

    bn_calculate.addEventListener("click", function () {
        calculate_age();
    });

    /*https://www.mediavida.com/foro/off-topic/calcula-tu-edad-diferentes-planetas-462109
        https://www.exploratorium.edu/ronh/age/

    */

});