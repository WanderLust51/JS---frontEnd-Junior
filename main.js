var superNum;
var otherNum;

superNum = 15;
otherNum = 8;

var bigNum = superNum + otherNum;

var newNum = 5;
newNum += bigNum;

console.log('La variable newNum es la suma de newNum (5) y bigNum (23)')
console.log(`Resultado de newNum = ${newNum}`)

var randNum
randNum = Math.random() * (superNum - otherNum) + otherNum
console.log(`randNum es: ${randNum}`)
console.log(`randNum con toFixed es: ${randNum.toFixed(2)}`)
console.log(`randNum con toPrecision es: ${randNum.toPrecision(2)}}`)
console.log(`randNum redondeado es: ${Math.ceil(randNum)}`)
console.log(`randNum redondeado abajo es: ${Math.floor(randNum)}`)

console.log(`El valor de los tickets es de: ${Math.round(Math.random() * 100)}`)