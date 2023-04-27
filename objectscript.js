$(document).ready(function(){

    $('#juego > button').click(punch);
    
    
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
        console.log('ñlasjdfñldsafgñldsaflgjsdlkfgjlksjdfg');
        this.puntaje += 1
    }
    setscore(score){
        this.puntaje = score;
    }
}
var player = '';

function registro(){
    event.stopPropagation();
    
    nombre = $('#myForm')[0].nombre.value;
    contraseña = $('#myForm')[0].contraseña.value;
    cuenta = $('#myForm')[0].cuenta.value;

    player = new Jugador(nombre,contraseña,cuenta);
    console.log(player)
    
    launch(player);
    hideRegister();

}

function launch(player){
    if ($('#juego').hasClass('d-none')){
        $('#juego').removeClass('d-none');
        $('#juego').addClass('d-flex');
    }
    $('#juego > p').append(`Hola ${player.nombre}, Pegale al botón el botón!`);
}

function hideRegister(){
    $('#myForm').removeClass('d-flex')
    $('#myForm').addClass('d-none')
}

function punch(){
    player.scoreup();
    $('#juego > h3').text(player.puntaje);
}