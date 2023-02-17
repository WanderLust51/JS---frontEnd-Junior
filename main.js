var cantAlumnos;
var alumnoCedula = [];
var alumnoNombre = [];
var notas1 = [];
var notas2 = [];
var notas3 = [];

var nota1
var nota2
var nota3

var cedulaValida = false;

do{
    cantAlumnos = parseInt(prompt('Cantidad de alumnos:'));

}while(cantAlumnos <= 0 || isNaN(cantAlumnos))

for (i = 0; i < cantAlumnos; i++){
    
    cedula = parseInt(prompt(`Nº ${i + 1}. Ingrese la Cedula`));

    while (alumnoCedula.includes(cedula)){
        cedula = parseInt(prompt('La cedula ya está registrada.'));
    }
    alumnoCedula.push(cedula);




    nombre = prompt('Ingrese el Nombre');
    alumnoNombre.push(nombre);

    nota1 = parseInt(prompt('Ingrese la nota 1'));
    notas1.push(nota1);

    nota2 = parseInt(prompt('Ingrese la nota 2'));
    notas2.push(nota2);

    nota3 = parseInt(prompt('Ingrese la nota 3'));
    notas3.push(nota3);

}

console.log(`Cedula: ${alumnoCedula[0]}`);
console.log(`Alumno: ${alumnoNombre[0]}`);
console.log(`Nota1: ${notas1[0]}`);
console.log(`Nota2: ${notas2[0]}`);
console.log(`Nota3: ${notas3[0]}`);