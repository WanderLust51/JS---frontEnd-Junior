function abrirVentanita(){
    alto = 0.5 * screen.availHeight;
    ancho = 0.5 * screen.availWidth;

    tamañoAlto = screen.availHeight / 2;
    tamañoAncho = screen.availWidth / 2;


    window.open('./hola.html','_blank',"width=200,height=200");
    window.moveTo(ancho,alto);
    window.resizeTo(tamañoAlto, tamañoAncho);
}

// abrirVentanita()