const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
    ];


var numEjercicio = 0;


//---------EJERCICIO 01 : Mostrar el carrito de la compra----------//

console.log("------------------------ EJERCICIO " + ++numEjercicio + " ------------------------");

for (i=0; i<carrito.length; i++) {
    console.log(i+1 + " "  + carrito[i].name)
}

//---------EJERCICIO 02 : Eliminar el producto con id 54657 del carrito de la compra----------//

console.log("------------------------ EJERCICIO " + ++numEjercicio + " ------------------------");

const carrito2 = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
    ];


function findTarget() {
    var find = []; 
    for (i=0; i<carrito2.length; i++) {
            find.push(carrito2[i].id);
            pos = find.indexOf(54657)
    }
    return pos;
}

var deleteTarget = carrito2.splice(findTarget(), 1);

//console.log(deleteTarget)

for (product of carrito2){
    showConsole2(product)
}


function showConsole2(carrito2) {
    console.log("------------Ticket ID: " + carrito2.id + "------------");
        console.log("Product name: " + carrito2.name);
        console.log("Product price: " + carrito2.price + "€");
        console.log("units: " + carrito2.count);
        console.log("Final pay: " + carrito2.price * carrito2.count + "€");
        console.log("Product Premium: " + carrito2.premium);

}

//---------EJERCICIO 03 : Calcular el total del carrito de la compra 
//(el coste de una línea es precio * cantidad)----------//

console.log("------------------------ EJERCICIO " + ++numEjercicio + " ------------------------");

function totalPrice() {
    var total = 0 ;
    for (i=0; i<carrito.length; i++) {
        total += carrito[i].price * carrito[i].count;
    }
    return total
}

console.log("The total price to pay for the cart is: " + totalPrice() + "€")

//---------EJERCICIO 04 : Filtrar por los productos que sean prime)----------//

console.log("------------------------ EJERCICIO " + ++numEjercicio + " ------------------------");


const carrito3 = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
    ];


var prime = []; 
for (i=0; i<carrito3.length; i++) {
    if (carrito3[i].premium == true){
        prime.push(carrito3[i])
    }
}


for (product of prime){
    showConsole2(product)
}


//---------EJERCICIO 05 : OPCIONAL(Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido
//tiene gastos de envío".) ----------//

console.log("------------------------ EJERCICIO " + ++numEjercicio + " ------------------------");

var freeDelivery = true;

for (product of carrito){
    if(product.premium == false){
        freeDelivery = false;
    }
}

if(freeDelivery == true){
    console.log("This order does not include shipping costs")
} else{
    console.log(" this order has shipping costs")
}


//---------EJERCICIO 06 : OPCIONAL(Mostrar el carrito en un listado de html básico) ----------//
console.log("------------------------ EJERCICIO " + ++numEjercicio + " ------------------------");


//---------EJERCICIO 07 : OPCIONAL(Aplicar un descuento del 5% si la compra es mayor de 100 €) ----------//
console.log("------------------------ EJERCICIO " + ++numEjercicio + " ------------------------");

function totalPriceDiscount() {
    var total = 0 ;
    for (i=0; i<carrito.length; i++) {
        total += carrito[i].price * carrito[i].count;
    } if (total < 100){
        return total
    } else {
        discount = total * 0.05;
        total -= discount;
        newTotal = total;
        return newTotal;

    }
    
}
console.log("The total cost is: " + totalPriceDiscount())