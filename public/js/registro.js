var getData = function() {
    let nombre = document.getElementById('nombre').value;
    let usuario = document.getElementById('usuario').value;
    let contrasena = document.getElementById('contrasena').value;
    let correo = document.getElementById('correo').value;

    let usuarion = { nombre, usuario, contrasena, correo };

    fetch("http://localhost:3002/usuarios/registrarusuario", {
            method: "post",
            body: JSON.stringify(usuarion),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });

}

//         console.log(nombre + " " + usuario + " " + contraseña + " " + correo);



var sesion = function() {


    let usuario = document.getElementById('usuariov').value;
    let contrasena = document.getElementById('contrasenav').value;


    var usuarioi = { usuario, contrasena, };

    fetch("http://localhost:3002/usuarios/validarusuario", {
            method: "post",
            body: JSON.stringify(usuarioi),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });

}