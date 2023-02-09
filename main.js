

var cliente = "";
var cantidad = 0;
var talla = "";
var descuento = 0;
var precioUnitario = 0;
var montoDescuento = 0;
var total = 0;
var valid = true;


//Entradas
cliente = prompt('Ingrese su nombre');
do{
    cantidad = parseInt(prompt('Indique la cantidad de franelas a comprar'));

}
while(isNaN(cantidad))

do{
    talla = prompt('Elija la talla [S, M, L y XL]').toUpperCase();
    switch(talla){
        case 'S':
            precioUnitario = 50000;
            valid = true;
            break;
        case 'M':
            precioUnitario = 55000;
            valid = true;
            break;
        case 'L':
            precioUnitario = 60000;
            valid = true;
            break;
        case 'XL':
            precioUnitario = 65000;
            valid = true;
            break;
        default:
            alert('Aprende a leer pibe')
            valid = false;
    }
}
while(!valid)


if (cantidad >= 6 && cantidad <= 11){
    montoDescuento = precioUnitario * 0.05;
    descuento = '5%'
}
if (cantidad >= 12 && cantidad <= 24){
    montoDescuento = precioUnitario * 0.10;
    descuento = '10%'
}
if (cantidad > 24){
    montoDescuento = precioUnitario * 0.15;
    descuento = '15%'
}

total = precioUnitario - montoDescuento;

alert(`Cliente: ${cliente} - | - Cantidad: ${cantidad} - | - Talla: ${talla}\nPrecio de la unidad (${precioUnitario}) - Monto del descuento: ${montoDescuento} - (${descuento})\nTotal: ${total}`)