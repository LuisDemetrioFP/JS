/*encapsulated functions:


function getOperandA() {
    //I get value from the first operand
    return parseInt(document.getElementById("input-OperandA").value);
}

function getOperandB() {
    //I get value from the second operand
    return parseInt(document.getElementById("input-OperandB").value);
}


function calculationSum() {
    //I calculate the value of the sum
    return getOperandA() + getOperandB();
}

function getResultSum() {
    document.getElementById("result").innerHTML = "The result of the sum is: " + calculationSum();
}

function calculationSub() {
 //I calculate the value of the subtract
    return getOperandA() - getOperandB();
}

function getResultSub() {
    document.getElementById("result").innerHTML = "The result of the subtract is: " + calculationSub();
}

function calculationMul() {
    //I calculate the value of the multiply
    return getOperandA() * getOperandB();
}

function getResultMul() {
    document.getElementById("result").innerHTML = "The result of the multiply is: " + calculationMul();
}


function calculationDiv() {
    //I calculate the value of the divide
    return getOperandA() / getOperandB();
}

function getResultDiv() {
    document.getElementById("result").innerHTML = "The result of the divide is: " + calculationDiv();
}

document.getElementById("button-sum").addEventListener("click", getResultSum);
document.getElementById("button-subtract").addEventListener("click", getResultSub);
document.getElementById("button-multiply").addEventListener("click", getResultMul);
document.getElementById("button-divide").addEventListener("click", getResultDiv);
*/


//No he podido sacar el ejercicio opcional de error y me corroe por dentro. El problema es que cuando el programa lee la excepcion siempre es antes de 
//introducir el input y nada mas iniciar muestra el error y no espera a el click del addEventLinstener para comprobar y mostrar. Tiene que haber
//alguna manera de pasar el click del evento como boleano para que de un true o false o alguna manera mas facil aun que no he podido encontrar...


//arrows functions:

var getOperandA = () => parseInt(document.getElementById("input-OperandA").value);

var getOperandB = () => parseInt(document.getElementById("input-OperandB").value);

var getResultSum = () => document.getElementById("result").innerHTML = "The result of the sum is: " + (getOperandA() + getOperandB());

var getResultSub = () => document.getElementById("result").innerHTML = "The result of the subtract is: " + (getOperandA() - getOperandB());

var getResultMul = () => document.getElementById("result").innerHTML = "The result of the multiply is: " + (getOperandA() * getOperandB());

var getResultDiv = () => document.getElementById("result").innerHTML = "The result of the divide is: " + (getOperandA() / getOperandB());

document.getElementById("button-sum").addEventListener("click", getResultSum);
document.getElementById("button-subtract").addEventListener("click", getResultSub);
document.getElementById("button-multiply").addEventListener("click", getResultMul);
document.getElementById("button-divide").addEventListener("click", getResultDiv);


//En el caso de poder pasar por una excepcion con boleanas el evento se podria simplificar y hacer mas smart el programa 
//llamando en cada caso al tipo de operacion aritmetica y ahorrandonos alguna linea de codigo o al menos haciendolo mas practico.