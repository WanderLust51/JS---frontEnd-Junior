let isBloody = false;

let limitS = 10
let limitMs = limitS * 1000;

$(document).ready(function(){

    mostrarBotonFinal(false);


    $('#bloody').click(function(){
        isBloody = $('#bloody')[0].checked;
    })

    $('#finalBtn').click(launch)

    
    
})

// Constructor del jugador

class Jugador{
    constructor(a,b,c){
        this.nombre = a;
        this.contraseña = b;
        this.cuenta = c;
        this.puntaje = 0;
    }

    scoreup(){
        this.puntaje += 1;
    }
    setscore(score){
        this.puntaje = score;
    }
}

// GLOBAL
var player = '';

function registro(){
    event.stopPropagation();
    
    nombre = $('#myForm')[0].nombre.value;
    contraseña = $('#myForm')[0].contraseña.value;
    cuenta = $('#myForm')[0].cuenta.value;

    player = new Jugador(nombre,contraseña,cuenta);
    
    launch();
    hideRegister();

}

function launch(){
    mostrarBotonFinal(false);

    if ($('#juego').hasClass('d-none')){
        $('#juego').removeClass('d-none');
        $('#juego').addClass('d-flex');
    }
    if (!isBloody){
        $('#juego > p').text(`Hi ${player.nombre}, hit the button!`);
        $('#juego > button').addClass('gamehit');
    }else{
        $('#juego > p').text(`Hi ${player.nombre}, hit the frog!!`);
        $('#juego > div').addClass('gamehit');
    }
    $('#juego > .gamehit').removeClass('d-none').addClass('d-flex');
    if ($('#juego > .gamehit')[0].localName == 'button'){
        $('#juego > .gamehit').addClass('btn');
    }
    $('#juego > .gamehit').click(punch);
}

function hideRegister(){
    $('#myForm').removeClass('d-flex');
    $('#myForm').addClass('d-none');
}

function punch(){
    player.scoreup();

    if (player.puntaje == 1){

        $('#progress').animate({
            width: 0
        }, limitMs)
        setTimeout(finish,limitMs);
    }

    $('#juego > h3').text(player.puntaje);
}

function finish(){
    
    $('#finalDiv > h1').text(`Tu puntaje fué de ${player.puntaje}!!!`)

    mostrarBotonFinal(true);
}

// CAMBIAR ESTADO DEL BOTÓN FINAL
function mostrarBotonFinal(valor){
    if (valor){
        $('#finalBtn').addClass('d-flex');
        $('#finalBtn').removeClass('d-none');
    }else{
        $('#finalBtn').removeClass('d-flex');
        $('#finalBtn').addClass('d-none');
    }
}