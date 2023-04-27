$( document ).ready(function() {
    // Handler for .ready() called.

    $('main > div').click(function(event){
        event.stopPropagation();
        console.log('epa click in the div, click in the div');
    })

    $('#twoBtn > button:first-child').click(function(event){
        event.stopPropagation();

        var nodo = document.createTextNode('yea click');
        var line = document.createElement('p');
        line.appendChild(nodo);
        $('#list').append(line);
        // $('#list').before('<p>this is the before</p>');
        // $('#list').after('<p>this is the after</p>');
    })

    $('#twoBtn > button:last-child').click(function(event){
        event.stopPropagation();

        var nodo = document.createTextNode('omg click');
        var line = document.createElement('p');
        line.appendChild(nodo);
        $('#list').append(line);
    })
    
    $('#form-1 > input:last-child').click(function(){
        
        let theText = $('#form-1 #nameform').val();
        console.log(theText)
        
        $('#formSesion > h4').text(`Hola! ${theText}.`);
    })

    $('#colorChange').click(function(){
        $('#formSesion').toggleClass('bg-dark rounded-3 shadow')
        $('#formSesion > h4').toggleClass('text-white');
    })

    //Cards
    // GATO GENIAL
    $('#card-1 > button').click(function(){
        $('#card-1 > div').fadeToggle();
    })
    $('#card-2 > button').click(function(){
        $('#card-2 > div').slideToggle();
    })
    $('#card-3').click(function(){
        // $('#card-3 > div').();
    })

});

