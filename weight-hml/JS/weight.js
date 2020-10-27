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
    let mercury = 0.38;
    let venus = 0.9;
    let mars = 0.38;
    let jupiter = 2.353;
    let saturn = 1.07;
    let uranus = 0.91;
    let neptune = 1.13;
    let plute = 0.07;
    //---------------------------------------------------------------
    calculate_mercury.innerHTML = "0 ";
    calculate_venus.innerHTML = "0 ";
    calculate_earth.innerHTML = "0 ";
    calculate_mars.innerHTML = "0 ";
    calculate_jupiter.innerHTML = "0 ";
    calculate_saturno.innerHTML = "0 ";
    calculate_urano.innerHTML = "0 ";
    calculate_neptune.innerHTML = "0 ";
    calculate_pluto.innerHTML = "0 ";
    document.querySelector("#Resu_division").innerHTML = "0";
    //-----------------------------------------------------------------
    function calculate_weigth() {
        let weight = parseFloat(document.querySelector("#age").value);
        if (weight <= 0) {
            alert("No puedes tener un peso negativo negativa");
        } else if (weight >= 300) {
            alert("!UY¡ Algo salió mal");
        } else if (isNaN(weight)) {
            alert("!UY¡ Algo salió mal");
        } else {
            console.log("calculado....");
            document.querySelector("#Resu_division").innerHTML = weight.toFixed(1);
            let a1 = weight * mercury;
            let a2 = weight * venus;
            let a3 = weight * mars;
            let a4 = weight * jupiter;
            let a5 = weight * saturn;
            let a6 = weight * uranus;
            let a7 = weight * neptune;
            let a8 = weight * plute;
            //Edad marte
            calculate_mercury.innerHTML = a1.toFixed(1);
            //Edad venus
            calculate_venus.innerHTML = a2.toFixed(1);
            //Edad Tierra
            calculate_earth.innerHTML = weight.toFixed(1);
            //Edad marte
            calculate_mars.innerHTML = a3.toFixed(1);
            //Edad jupiter
            calculate_jupiter.innerHTML = a4.toFixed(1);
            //Edad Saturno
            calculate_saturno.innerHTML = a5.toFixed(1);
            //Edad urano
            calculate_urano.innerHTML = a6.toFixed(1);
            //Edad Neptuno
            calculate_neptune.innerHTML = a7.toFixed(1);
            //Edad pluton
            calculate_pluto.innerHTML = a8.toFixed(1);
        }

    }

    bn_calculate.addEventListener("click", function () {
        calculate_weigth();
    });


});