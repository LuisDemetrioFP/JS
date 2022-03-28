document.getElementById("full-name").innerText = "Raimunda de la Mata Rodríguez"

function submitName() {
    var fullName;
    // Obtengo nombre
    var name = document.getElementById("input-name").value;
    fullName = name;
    // Obtengo apellido 1
    var surname1 = document.getElementById("input-surname1").value;
    fullName = fullName + " " + surname1;
    // Obtengo apellido 2
    var surname2 = document.getElementById("input-surname2").value;
    fullName = fullName + " " + surname2;
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