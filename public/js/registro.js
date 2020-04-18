var getData = function() {
        var nombre = document.getElementById('nombre').value;
        var usuario = document.getElementById('usuario').value;
        var contraseña = document.getElementById('contraseña').value;
        var correo = document.getElementById('correo').value;

        var usuarion = { nombre, usuario, contraseña, correo };

        fetch("http://localhost:3000/usuarios", {
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


        var usuarioi = { usuario, contraseña, };
        //         console.log(nombre + " " + usuario + " " + contraseña + " " + correo);

        fetch("http://localhost:3000/usuarios", {
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