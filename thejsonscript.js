let usuarios;
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => usuarios = json)

let newUser = {
    "id": 11,
    "name": "Foggel",
    "username": "Mclovin",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Honolulu",
        "zipcode": "33263",
        "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
        }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
    }
}


$(document).ready(function(){

    $('#myForm > button').click(inicio)


})

function inicio(){
    event.preventDefault();
    console.log(usuarios);
    user = $('#myForm')[0].nombre.value;
    let encontrado = usuarios.find(e => e.username === user);
    if (encontrado){
        inicioDeSesion(user);

    }else{
        $('#b').text('')
        $('body > div > p').text('Mal hecho, ese noere tu.');
    }
}

function inicioDeSesion(user){
    $('#b').text('Iniciaste desgraciado.');
    $('body > div > p').text(`omg is ${user}`);

    
}



