//Ejercicio 1 - Calculo IVA

const product ={ count: 3, price: 12.55, type: "ropa" };

//Identificamos el tipo de IVA para el calculo
/**let typeIVA = 0;
if (product.type === "alimentacion") {
    typeIVA = 0.1;
}
if (product.type === "libro"){
    typeIVA = 0.04;
}
else {
    typeIVA = 0.21;
}**/

switch(product.type){
    case "alimentacion":
        typeIVA = 0.1; break;
    case "libros":
        typeIVA = 0.04; break;
    default: typeIVA = 0.21; 
}
//Calculo total del IVA
const totalIVA  = product.count * product.price * typeIVA;




//Identficamos si el resultado es negativo y en ese caso le decimos que lo transforme en 0 en caso contrario dejamos el calculo anterior.
let totalIVAPos = 0;

if (totalIVA <= 0){
    totalIVAPos = 0;
}
else {
    totalIVAPos = totalIVA;
}
console.log("El IVA de la compra es ", totalIVAPos ,  "€")

//Mirar como se redondean los floats a X num.


// Ejercicio 2 - Calcular precio total

//Otro metodo mas encapsulado de hacer el identificador 
let total;
product.count >= 0 && product.price >= 0 ? total = product.count * product.price : total = 0;



const totalMasIVA = totalIVAPos + total;

console.log("El precio total sin IVA es: ", total, "€")

console.log("El precio total mas IVA es: ",totalMasIVA , "€")

/*Ejercicio 2-2 Avanzado:
Utilizando la función anterior, crearemos una para calcular el total de IVA (IVA por unidad multiplicado por cantidad):
Es decir una función que se llama getTotalVat(product) que devuelva el número de productos pedidos multiplacado por el precio con IVA*/

function getTotal(product) {
    return product.count > 0 ? product.count * product.price : 0;
}


function getVat(product) {
    return product.count > 0 ? product.price * typeIVA : 0;
}

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
  }


function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;
  
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}

const print = printProductPrice(product)




//Sueldo bruto año. Número de hijos. Número de pagas. Tenemos la siguiente estrcutura:

const empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 14,
};

/*Las condiciones:

Por rango de salario:

    Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
    Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
    Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
    Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%*/
/*Adicionalmente:

    Si el empleado tiene hijos, restarle a la retencion 2 puntos. Con esto sacaríamos el neto anual en nómina.*/

/*Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)*/

function sueldoMensualPrint() {
    switch (true) {
        case empleado.bruto < 12000:
            console.log(`La retencion es del 0%`);
            break;
        case empleado.bruto < 24000:
            retencion = 0.08;
            console.log(`La retencion es del 8%`);
            break;
        case empleado.bruto < 34000:
            retencion = 0.16;
            console.log(`La retencion es del 16%`);
            break;
        default: retencion = 0.3;
            console.log(`La retencion es del 30% `);
    }
    const retencionMensual =  empleado.hijos > 0 && retencion > 0 ? retencion - 0.02 : 0 ;
    const brutoMensual = empleado.bruto / empleado.pagas;
    const retencionTotal = retencionMensual > 0 ? brutoMensual * retencionMensual : 0 ;
    const sueldoNetTotal = brutoMensual - retencionTotal

    console.log("El sueldo mensual Bruto es:", brutoMensual,"€")
    console.log("La retencion mensual total es:", retencionTotal,"€")
    console.log("El sueldo mensual neto es:", sueldoNetTotal,"€")
}

//const printCalculadoraSalario = sueldoMensualPrint(empleado)

sueldoMensualPrint(empleado);
