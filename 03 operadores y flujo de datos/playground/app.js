//A partir de una reserva de habitación con el número de noches 
//y el precio por noches, calcular el precio total
//y aplicar un descuento del 20% si este supera los 500€

const booking = {count: 5, price: 127.95 };
const total = booking.count * booking.price;
const discount = total > 500 ? total * 0.2 : 0;
const discounted = total - discount;

console.log("total: ", total + "€");

if(total > 500 && discount > 0) {
    const discounted = total - discount;
    console.log("Total con descuento del 20%: ", discounted + "€")
}


const booking1 = { count: 3, price: 127.95 };
const booking2 = { count: 5, price: 112.95 };

a = booking.count * booking1.price
b = booking2.count * booking2.price

console.log(a)
console.log(b)
//Comparar si dos reservas son iguales.
if (booking1.count == booking2.count && booking1.price == booking2.price) {
    console.log("Son iguales")
} else {
    console.log("No son iguales")
}

//Mostrar la suma del número de noches de las dos reservas.

console.log(booking1.count + booking2.count);


//Comparar dos reservas para mostrar la de mayor número de noches.

if (booking1.count === booking2.count) {
    console.log("Las dos tienen el mismo numero de noches")
} else if (booking1.count > booking2.count) {
    console.log("La primera reserva tienes mas noches que la segunda")
}else {
    console.log("La segunda reserva tiene mas noches que la primera")
}

//Ampliar una noche más una reserva.

let bookingAdd1 = booking1.count++; 
console.log(booking1.count)

//Calcular la diferencia de precio total entre dos reservas (incluidos descuentos).


const total1 = booking1.count * booking1.price;
console.log("total de la primera reserva: ", total1 + "€");

if(total1 > 500 && discount > 0) {
    const discounted1 = total1 - discount;
    console.log("Total primera reserva con descuento del 20%: ", discounted1 + "€")

}

const total2 = booking2.count * booking2.price;
console.log("total de la segunda reserva: ", total2 + "€");

if(total2 > 500 && discount > 0) {
    const discounted2 = total2 - discount;
    console.log("Total segunda reserva con descuento del 20%: ", discounted2 + "€")
}

//No se exactamente porquen no puedo llamar a la variable discounted1 y 2
//supongo que debe tratarse de que lo que va entre corchetes es informacion que tiene sector de memoria
//propio y es una variable ¿local? y no la puedo llamar fuera de sus corchetes.
//Ademas la misma solucion se podria conseguir con un switch, no lo he conseguido con un solo ternario.
//No se si habra algun modo de capìtalizar los numeros negativos a positivos.No la he encontrado.

const difReservas = (total1 - discount) - (total2 - discount);
const difPrecios = difReservas > 0 ? difReservas : difReservas * -1;

console.log("La diferencia de precios entre la primera y segunda reserva es:", difPrecios + "€")

//Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos).

const discounted1 = total1 - discount;
const discounted2 = total2 - discount;

const compPrecios = discounted1 > discounted2 ?  discounted1 : discounted2;
console.log("La reserva con un mayor precio es:", compPrecios)

//Mostrar número de reservas a las que se podrían aplicar descuento.
let numResConDesc = 0

if (total > 500) {
numResConDesc = ++numResConDesc
console.log("La primera reserva tiene descuento:", total * 0.2 + "€")
}
if (total1 > 500) {
    numResConDesc = ++numResConDesc
    console.log("La segunda reserva tiene descuento:", total1 * 0.2 + "€")
}
if (total2 > 500) {
    numResConDesc = ++numResConDesc
    console.log("La tercera reserva tiene descuento:", total2 * 0.2 + "€")
} 
  

console.log("El numero de reservas con descuento es:", numResConDesc)

//Mostrar "Todas con descuento" si las dos reservas tienen descuentos.

const allConDesc = total && total1 && total2 > 500 ? "Todas con descuento" : "No";
console.log(allConDesc)

//Mostrar la suma del precio total con descuentos de las dos reservas.

console.log("El precio total de las tres reservas con descuento es:", discounted + discounted1 + discounted2 + "€");