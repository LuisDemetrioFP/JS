//document.getElementById("full-name").innerHTML = "Luis Demetrio";

/*function submitName() {
    var fullName;
    // Obtengo nombre
    var name = document.getElementById("input-name").value;
    fullName = name;
    // Obtengo apellido 1
    var surName1 = document.getElementById("input-surname01").value;
    fullName = fullName + " " + surName1;
    // Obtengo apellido 2
    var surName2 = document.getElementById("input-surname02").value;
    fullName = fullName + " " + surName2;
    // Pintamos el nombre completo
    document.getElementById("full-name").innerText = fullName;
    }
    // Por último, registramos la función submitName() bajo el evento
    // 'click' del botón submit.
    document.getElementById("button-submit").addEventListener("click", submitName);
    // Versión alternativa a submitName()
    // function submitName() {
    // var name = document.getElementById("input-name").value;
    // var surname1 = document.getElementById("input-surname1").value;
    // var surname2 = document.getElementById("input-surname2").value;
    // // Pintamos el nombre completo
    // document.getElementById("full-name").innerText = name + " " + surname1 + " " + surname2;
    // }

    function getName() {
        return document.getElementById("input-name").value;
    }

    function getSurname01() {
        return document.getElementById("input-surname01").value;
    }

    function getSurname02() {
        return document.getElementById("input-surname02").value;
    }

    function getFullNAme() {
        return getName() + " " + getSurname01() + " " + getSurname02();
    }

    function submitName() {
        document.getElementById("full-name").innerText = getFullNAme();
    }

    */

    //arrowFunction:

    var getName = () => document.getElementById("input-name").value;

    var getSurname01 = () => document.getElementById("input-surname01").value;

    var getSurname02 = () => document.getElementById("input-surname02").value;

    var getFullNAme = () => getName() + " " + getSurname01() + " " + getSurname02();

    var submitName = () => {
        document.getElementById("full-name").innerText = getFullNAme();
    }

    //document.getElementById("button-submit").addEventListener("click", submitName);
    
//Evento (mas)reactivo:

    document.getElementById("input-name").addEventListener("keyup", submitName);
    document.getElementById("input-surname01").addEventListener("keyup", submitName);
    document.getElementById("input-surname02").addEventListener("keyup", submitName);