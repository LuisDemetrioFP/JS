const bookings = [
    { id: 1, price: 45.30, count: 3, room: "standard", prepaid: false,
    succeeded: true },
    { id: 2, price: 92.45, count: 4, room: "superior", prepaid: false,
    succeeded: false },
    { id: 3, price: 63.50, count: 7, room: "standard", prepaid: true,
    succeeded: false },
    { id: 3, price: 37.50, count: 2, room: "standard", prepaid: true,
    succeeded: false },
    { id: 5, price: 87.90, count: 5, room: "superior", prepaid: true,
    succeeded: false }
    ];


//-------------------EJERCICIO 01------------------
/*for (i = 0; i < bookings.length; i++) {
    showConsole(bookings[i]);
}


function showConsole(booking) {
    console.log("----RESERVA " + booking.id + "------");
    console.log(" Price: " + booking.price * booking.count + " €");
    console.log(" Habitación: " + booking.room);
    console.log(" Pagada: " + booking.prepaid);
    console.log(" Error: " + !booking.succeeded);
}*/



/*for (booking of bookings){
    showConsole(booking);
}

function showConsole(bookings) {
    console.log("------------")

    for (booking in bookings){  
    
        console.log(booking + ": " + bookings[booking]);
}
}

function existError() {
    var succeeded = true;

    for (booking of bookings) {
        succeeded = succeeded && booking.succeeded;
    }

    return !succeeded;
}

console.log ("exiete una reserva con error: " + existError())
---------------------------------------------------------
---------------------------------------------------------*/

//---------------EJERCICIO 02---------------------------------

/*for (booking of bookings){
    if (!booking.prepaid) showConsole(booking);
}


function showConsole(bookings) {
    console.log("------------")

    for (Attr in bookings){  
    
        console.log(Attr.toUpperCase() + ": " + bookings[Attr]);
}
}*/
//-----------------------------------------------------------
//-----------------------------------------------------------

//---------------------EJERCICIO 03--------------------------

/*for (booking of bookings){
    
    booking.price = (booking.price * 0.9)

}

for (booking of bookings){
    showConsole(booking)
}

function showConsole(bookings) {
    console.log("------------")

    for (Attr in bookings){  
    
        console.log(Attr.toUpperCase() + ": " + bookings[Attr]);
    }
}
*/
//-----------------------------------------------------------
//-----------------------------------------------------------

//---------------------EJERCICIO 04--------------------------

/*for (booking of bookings){
    if (booking.prepaid && !booking.succeeded) showConsole(booking);
}


function showConsole(bookings) {
    console.log("------------")

    for (Attr in bookings){  
    
        console.log(Attr.toUpperCase() + ": " + bookings[Attr]);
    }
}
*/
//-----------------------------------------------------------
//-----------------------------------------------------------

//---------------------EJERCICIO 05--------------------------

/*var repeat = false;

for (i=0; i < bookings.length; i++) {

    for (x = i + 1; x < bookings.length; x++) {

        repeat = repeat || bookings[i].id === bookings[x].id;
    }
    
}
console.log("ID. repetidos: " + repeat);



function showConsole(bookings) {
    console.log("------------")

    for (Attr in bookings){  
    
        console.log(Attr.toUpperCase() + ": " + bookings[Attr]);
    }
}*/

//-----------------------------------------------------------
//-----------------------------------------------------------

//--------------------- BUSCADOR DE ID: ---------------------

var repetido = false; 

for (i=0; i < bookings.length; i++) {
    var id = bookings[i].id;

    repetido = repetido || buscarId(id)

    buscarId(id);
    }
    
function buscarId(id){
    var encontrar = false;
    for (x = 0; x < bookings.length; x++) {
        encontrar = encontrar || bookings[x].id == id;
    }
    return encontrar
}

console.log("ID. repetidos: " + repetido);



function showConsole(bookings) {
    console.log("------------")

    for (Attr in bookings){  
    
        console.log(Attr.toUpperCase() + ": " + bookings[Attr]);
    }
}