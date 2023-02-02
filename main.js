var descuento;
var edad = Math.round(Math.random() * (75 - 0) + 0);
var dolar = 22.41;

var sexo = "F"
descuento = 1

if (edad <= 2){
    descuento = 0,100;

}
if (edad >= 3 && edad <= 6){
    descuento = 0,50;

}
if (edad >= 7 && edad <= 15){
    descuento = 0,25;

}
else{
    if ((sexo == "F" && edad >= 55 ) || (sexo == "M" && edad >= 60)){
        descuento = 0,30;
    }
}

var precio = (17 * dolar) * descuento;

console.log(`Edad: ${edad}`)
console.log(sexo)
console.log(`Descuento: ${descuento}`)
console.log(`El precio final es ${precio}`)