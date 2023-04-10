superBtn = document.getElementById('superBtn');

superBtn.addEventListener('click', presion);

createLife();

function presion(){
    console.log('Me siento presionado');
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

    console.log(facturaFinal)
    facturaFinal.innerHTML = `<p>Nombre: ${nombre}</p> <p>Descripción: ${desc}</p> <p>Total: ${precio}</p>`
}

function createLife(){
    var lifeObj = document.getElementById('newLife');
    var newInput = document.createElement('input');
    var newBtn = document.createElement('button');
    var newList = document.createElement('ul');

    newList.style.backgroundColor = 'rgba(238, 130, 238, 0.200)';
    newList.style.height = 'fit-content'

    var btnText = document.createTextNode('The button');
    newBtn.appendChild(btnText);

    newBtn.addEventListener('click', function(){
        var newLi = document.createElement('li');
        var inputContent = document.createTextNode(newInput.value);

        newLi.appendChild(inputContent);

        newList.appendChild(newLi);
    })
    lifeObj.appendChild(newBtn);
    lifeObj.appendChild(newInput);
    lifeObj.appendChild(newList);
}

function addRow(){
    var tableObj = document.getElementById('superTable');
    
    dataArray = [];

    dataArray[0] = document.getElementById('Cedula').value;
    dataArray[1] = document.getElementById('Nombre').value;
    dataArray[2] = document.getElementById('Materia').value;
    dataArray[3] = document.getElementById('Calificacion').value;


    var newRow = tableObj.insertRow(-1);
    for (let i = 0; i < dataArray.length; i++){
        let newCell = newRow.insertCell(dataArray[-1]);
        newCell.innerText = dataArray[i];
    }
}

// CLASE 2

function controlForm(){
    form = document.getElementById('newForm');
    if (
        formValidation(form.usuario, 'mira desgraciado quien tuere') == true ||
        formValidationEmail(form.correo, 'mira desgraciado tu correo') == true ||
        formValidation(form.clave, 'mira desgraciado la clave cual e') == true ||
        formValidation(form.telefono, 'mira desgraciado y tu número?') == true
    ){
        console.log('mal hecho')
        return false;
    }
    else{
        console.log('Se envió el peo jaja');
        return true
    }
}


function formValidation(input, msg){
    if (input.value == ''){
        window.alert(msg);
        return true
    }else{
        return false
    }
}

function formValidationEmail(input, msg){
    let regularExp = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    if (input.value == '' || !regularExp.test(input.value)){
        window.alert(msg);
        return true
    }else{
        return false
    }
}


