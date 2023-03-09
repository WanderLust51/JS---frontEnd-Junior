superBtn = document.getElementById('superBtn')

superBtn.addEventListener('click', presion)

function presion(){
    console.log('Me siento presionado')
}

function abrirVentanita(){
    alto = 0.5 * screen.availHeight;
    ancho = 0.5 * screen.availWidth;

    tamañoAlto = screen.availHeight / 2;
    tamañoAncho = screen.availWidth / 2;


    window.open('./hola.html','_blank',"width=200,height=200");
    window.moveTo(ancho,alto);
    window.resizeTo(tamañoAlto, tamañoAncho);
}

function superFuncion(){
    var nombre = prompt('Ingrese nombre');
    elTitulo = document.getElementById('superTitulo');
    elTitulo.innerHTML = nombre;
}
function superColor(){
    var color = prompt('Super color:');
    elTitulo = document.getElementById('superTitulo');
    elTitulo.style.color = color;
}

function facturar(){
    let superfactura = document.factura;
    let facturaFinal = document.getElementById('facturaFinal');
    
    let nombre = superfactura.nombre.value;
    let desc = superfactura.descripcion.value;
    let precio = superfactura.precio.value;
    let cantidad = superfactura.cantidad.value;

    facturaFinal.innerHTML = `<p>${nombre}</p>`
    console.log(facturaFinal)
}