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

    $('#myForm > button').click(inicio);


})

function inicio(){
    event.preventDefault();
    // console.log(usuarios);
    userLogin = $('#myForm')[0].nombre.value;
    let encontrado = usuarios.find(e => e.username === userLogin);
    // let userObj = usuarios
    if (encontrado){
        user = objOfUsername(userLogin, usuarios);
        inicioDeSesion(user);

    }else{
        $('#b').text('')
        $('body > div > p').text('Mal hecho, ese noere tu.');
    }
}

function inicioDeSesion(user){
    $('#b').text('Iniciaste desgraciado.');
    $('body > div > p').text(`omg is ${user.username}`);

    guardarDatos(user);
}

function guardarDatos(user){
    let item = JSON.stringify({
        'username': user.username,
        'password': user.password
    });
    localStorage.setItem('loggedUser', item);
}

function objOfUsername(username, usuarios){
    for (e in usuarios){
        if (username == usuarios[e].username){
            userObj = usuarios[e];
            return userObj
        } 
     }
}


