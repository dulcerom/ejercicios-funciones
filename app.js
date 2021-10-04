// let base = parseInt(prompt('Ingrese la base'));
// let altura = parseInt(prompt('Ingrese la altura'));

// function obtenerArea(base,altura){
//     let area=base*altura;
//     return area;
// }

// let area=obtenerArea(base,altura);
// console.log(area);

//////////////////////////////////////////////////////////

/* 1) Calcular el total que una persona debe pagar en un llantera, si el precio de cada llanta
es de $800 si se compran menos de 5 llantas y de $700 si se compran 5 o mas. */

let numLlantas = parseInt(prompt('¿Cuántas llantas va a comprar?'));

function costoTotalllantas(numLlantas){
    let descuentoLlantas;
    if(numLlantas < 5){
          descuentoLlantas = parseFloat(numLlantas*800);
        }else{
           descuentoLlantas = parseFloat(numLlantas*700);
        }
    return descuentoLlantas;
}
let descuentoLlantas=costoTotalllantas(numLlantas);
console.log(`Usted compró ${numLlantas} llantas, total a pagar es ${descuentoLlantas}`);

/* 2) En un supermercado se hace una promoción, mediante la cual el cliente obtiene un
descuento dependiendo de un numero que se escoge al azar. Si el numero escogido es
menor que 74 el descuento es del 15% sobre el total de la compra, si es mayor o igual a
74 el descuento es del 20%. Obtener cuanto dinero se le descuenta. */

let numAzar = parseInt(prompt('Elija un número'));
let totalCompra = parseFloat(prompt('¿Cuál fue el total de su compra?'));

function descuentoSuper(numAzar,totalCompra){
    let descuentoSupermercado,totalPago;
if(numAzar < 74){
    descuentoSupermercado = parseFloat(totalCompra * 0.15);
    totalPago = (parseFloat(totalCompra) - parseFloat(descuentoSupermercado)); 
    
}else {
    descuentoSupermercado = parseFloat(totalCompra*0.20);
    totalPago = (parseFloat(totalCompra) - parseFloat(descuentoSupermercado)); 
}
    return totalPago;
}

let totalPago=descuentoSuper(numAzar,totalCompra);
console.log(`Usted escogio el número ${numAzar} el total a pagar es $ ${totalPago} `);

/* 3) Calcular el numero de pulsaciones que debe tener una persona por cada 10 segundos
de ejercicio aerobico; la formula que se aplica cuando el sexo es femenino es:
num. pulsaciones = (220 - edad)/10
y si el sexo es masculino:
num. pulsaciones = (210 - edad)/10 */

let genero = prompt('Ingrese su genero');
let edadPersona = parseInt(prompt('¿Cuál es su edad'));

function calculaPulsaciones(){
let numPulsaciones;
switch(genero){
    case 'femenino':
        numPulsaciones = parseFloat((220 - edadPersona)/10);
        break;
    case 'masculino':
        numPulsaciones = parseFloat((210 -edadPersona)/10);
        break;
    default:
        console.log('Ingrese correctamente tu sexo');
}
    return numPulsaciones;
}

let numPulsaciones=calculaPulsaciones(genero,edadPersona);
console.log(`Su genero es ${genero} y sus pulsaciones son ${numPulsaciones}`);


/* 4) Una compañía de seguros esta abriendo un depto. de finanzas y estableció un
programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se
efectúa la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el
monto es mayor que $50 000 la cuota a pagar será el 2% del monto. La afianzadora
desea determinar cual será la cuota que debe pagar un cliente. */

let monto = parseFloat(prompt('Ingrese el monto  a solicitar'));

function calculaIntereses(){
let interes, cuotaTotal;
if(monto < 50000) {
    interes = parseFloat((monto*0.03));
    cuotaTotal = parseFloat(monto + interes);
}else if(monto > 50000){
    interes = parseFloat((monto*0.02));
    cuotaTotal = parseFloat(monto + interes);
}else
{
    console.log('No hay nada por aplicar');
}
return cuotaTotal
}

let cuotaTotal=calculaIntereses(monto);
console.log(`Cuota total a pagar es ${cuotaTotal}`);



/* 5) En una escuela la colegiatura de los alumnos se determina según el numero de
materias que cursan. El costo de todas las materias es el mismo.
Se ha establecido un programa para estimular a los alumnos, el cual consiste en
lo siguiente: si el promedio obtenido por un alumno en el ultimo periodo es mayor o
igual que 9, se le hará un descuento del 30% sobre la colegiatura y no se le cobrara
IVA; si el promedio obtenido es menor que 9 deberá pagar la colegiatura completa, la
cual incluye el 10% de IVA.
Obtener cuanto debe pagar un alumno. */

let materias= parseInt(prompt('¿Cuántas materias va a cursar?'));
let costoMateria = parseFloat(prompt('¿Cuál es el costo de cada materia?'));
let promedioAlumno = parseFloat(prompt('Ingrese su promedio.'));


function pagoTotalcolegiatura(materias,costoMateria,promedioAlumno){
    let colegiatura = (materias*costoMateria),colegiaturaTotal;
    if(promedioAlumno >= 9){
    descuentoColegiatura = parseFloat(colegiatura*0.30);
    colegiaturaTotal= parseFloat(colegiatura-descuentoColegiatura);

    }else if (promedioAlumno < 9){   
    colegiaturaTotal = parseFloat(colegiatura + (colegiatura*0.10));
    }
     return colegiaturaTotal;
}

let colegiaturaTotal=pagoTotalcolegiatura(materias,costoMateria,promedioAlumno);
console.log(`Tu promedio ha sido de ${promedioAlumno} y el total a pagar es $ ${colegiaturaTotal}`);


/* 6) Una empresa de bienes raíces ofrece casas de interés social, bajo las siguientes
condiciones: Si los ingresos del comprador son de menos de $8000, el enganche será del
15% del costo de la casa y el resto se distribuirá en pagos mensuales, a pagar en diez
años. Si los ingresos del comprador son de $8000 o mas el enganche será del 30% del
costo de la casa y el resto se distribuirá en pagos mensuales a pagar en 7 años.
La empresa quiere obtener cuanto debe pagar un comprador por concepto de
enganche y cuanto por cada pago parcial. */

let costoCasa = parseFloat(prompt('¿Cuál es el costo de la casa?'));
let ingresoComprador = parseFloat(prompt('¿Cuáles son sus ingresos?'));
 
function calculaPagocasa(){
    let enganche,pagoAnual;   
if( ingresoComprador < 8000){
    enganche = parseFloat(costoCasa* 0.15);
    pagoAnual = parseFloat(costoCasa-enganche)/(12*10);
}else if(ingresoComprador >= 8000){
    enganche = parseFloat(costoCasa* 0.30);
    pagoAnual = parseFloat(costoCasa-enganche)/(12*7);
}
return pagoAnual;
}

let pagoAnual=calculaPagocasa(costoCasa,ingresoComprador);
console.log(`El pago anual será de $ ${pagoAnual} `);

/* 7) En una fabrica de computadoras se planea ofrecer a los clientes un descuento que
dependerá del numero de computadoras que compre. Si las computadoras son menos de
cinco se les dará un 10% de descuento sobre el total de la compra; si el numero de
computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de
descuento; y si son 10 o mas se les da un 40% de descuento. El precio de cada
computadora es de $11,000 */

let numComputadoras = parseInt(prompt('¿Cuántas computadoras compró?'));

function descuentoComputadoras(numComputadoras){
    let descuentoCompu,subtotalCompu,totalPagocompu;
if(numComputadoras < 5){
    subtotalCompu = parseInt(numComputadoras * 11000);
    descuentoCompu = parseFloat(subtotalCompu*0.10);
    totalPagocompu= parseFloat(subtotalCompu-descuentoCompu);
}else if(numComputadoras >= 5  && numComputadoras < 10)
{
    subtotalCompu = numComputadoras * 11000;
    descuentoCompu = parseFloat(subtotalCompu*0.20);
    totalPagocompu = subtotalCompu - descuentoCompu; 
}else if(numComputadoras >=10){
    subtotalCompu = numComputadoras * 11000;
    descuentoCompu = parseFloat(subtotalCompu*0.40);
    totalPagocompu = subtotalCompu - descuentoCompu; 
}
return totalPagocompu;
}
let totalPagocompu=descuentoComputadoras(numComputadoras);
console.log(`Usted compró ${numComputadoras} computadoras, el total a pagar es$ ${totalPagocompu}`);


/* 8) En una llantera se ha establecido una promoción de las llantas marca "Ponchadas",
dicha promoción consiste en lo siguiente:
Si se compran menos de cinco llantas el precio es de $300 cada una, de $250 si
se compran de cinco a 10 y de $200 si se compran mas de 10.
Obtener la cantidad de dinero que una persona tiene que pagar por cada una de
las llantas que compra y la que tiene que pagar por el total de la compra. */

let numLlantasponch = parseInt(prompt('¿Cuántas llantas de la marca "Ponchadas compró"?'));
function descuentoLlantasPonchadas(){
    let totalLlantasponch;

if(numLlantasponch < 5){
    let costoLlantaponch=300;
    totalLlantasponch = numLlantasponch  * costoLlantaponch;
}else if(numLlantasponch >= 5  && numLlantasponch <= 10)
{
    let costoLlantaponch=250;
    totalLlantasponch = numLlantasponch  * costoLlantaponch;
    
}else if(numLlantasponch >10){
    let costoLlantaponch=200;
    totalLlantasponch = numLlantasponch  * costoLlantaponch;
}
return totalLlantasponch;
}

let totalLlantasponch=descuentoLlantasPonchadas(numLlantasponch);
console.log(`Usted compró ${numLlantasponch} llantas, el total a pagar es$ ${totalLlantasponch}`);

/* 9) Un proveedor de estéreos ofrece un descuento del 10% sobre el precio sin IVA, de
algún aparato si este cuesta $2000 o mas. Además, independientemente de esto, ofrece
un 5% de descuento si la marca es "NOSY". Determinar cuanto pagara, con IVA
incluido, un cliente cualquiera por la compra de su aparato. */

let precioAparato = parseFloat(prompt('Ingrese el precio del estereo'));
let marca = prompt('Ingrese la marca del estereo');

function calculaPagoEstereo( precioAparato, marca){
    let desc10siniva,descNosy,descTotest,totalEstereo,iva,totalfinalEstereo;

if (precioAparato >= 2000 && marca == "NOSY" ){
    desc10siniva = parseFloat(precioAparato * 0.10);
    descNosy= parseFloat(precioAparato*0.05);
    descTotest = parseFloat(desc10siniva+descNosy);
    totalEstereo=parseFloat((precioAparato)-(descTotest));
    iva = parseFloat(totalEstereo * 0.16);
    totalfinalEstereo= parseFloat(totalEstereo+ iva);  
}else if (precioAparato <= 2000){
    desc10siniva = parseFloat(precioAparato * 0.10);
    totalEstereo=parseFloat((precioAparato)-(desc10siniva));
    iva = parseFloat(totalEstereo * 0.16);
    totalfinalEstereo= parseFloat(totalEstereo+ iva); 
}
return totalfinalEstereo;
}
let totalfinalEstereo=calculaPagoEstereo(precioAparato,marca)
console.log(`El precio del aparato es de $ ${precioAparato}, el total a pagar es de $ ${totalfinalEstereo}`);



/* 12) Una tienda de helado ofrece un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

Costo del helado $70
Tipo A 10% de descuento
Tipo B 15% de descuento
Tipo C 20% de descuento */

let heladosComp = parseInt(prompt('¿Cuántos helados compró?'));
let tipoMembresia = prompt('¿Cuál es el tipo de su membresia a, b, c?');


function descuentoHelados(heladosComp,tipoMembresia){
    let subtHelado, descHelado, totalHelado;
switch(tipoMembresia){
    case 'a':
        subtHelado = parseFloat(heladosComp*70);
        descHelado = parseFloat(subtHelado * 0.10);
        totalHelado = parseFloat(subtHelado - descHelado);
        break;

    case 'b':
        subtHelado = parseFloat(heladosComp*70);
        descHelado = parseFloat(subtHelado * 0.15);
        totalHelado = parseFloat(subtHelado - descHelado);
    break;

    case 'c':
        subtHelado = parseFloat(heladosComp*70);
        descHelado = parseFloat(subtHelado * 0.20);
        totalHelado = parseFloat(subtHelado - descHelado);
    break;
    default:
    console.log('No cuenta con membresia')

}
return totalHelado;
}

let totalHelado=descuentoHelados(heladosComp,tipoMembresia);
console.log(`Usted compró ${heladosComp} helados, su membresia es tipo ${tipoMembresia}, el total a pagar es de ${totalHelado}`);



/* 13) Determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%. */

let sueldoBase = parseInt(prompt('¿Cuál es su ingreso monetario?'));

function calculaSueldo( sueldoBase){
let aumento, sueldoTotal;
if(sueldoBase > 2000){
    aumento =  parseInt((sueldoBase * 0.05));
    sueldoTotal = (parseInt(aumento + sueldoBase));
}else {
    aumento =  parseInt((sueldoBase * 0.10));
    sueldoTotal = (parseInt(aumento + sueldoBase));
}
    return sueldoTotal;
}

let sueldoTotal=calculaSueldo(sueldoBase);
console.log(`Usted ganaba ${sueldoBase}  su sueldo ahora es $ ${sueldoTotal}`);

