let parametros = new URLSearchParams(window.location.search);



let settings = {
    "url": `https://parseapi.back4app.com/classes/Recetas/${parametros.get("id")}`,
    "method": "GET",
    "timeout": 0,
    "headers": {
        "X-Parse-Application-Id": "uLPAGLPSXkrZlc46hIIXxArceEKsWIio46RaC61N",
        "X-Parse-REST-API-Key": "CJf04j4j48S9ZNXdevYZeMbjQmJBBGsluhv1AMqG"
    },
    success : (response) => {
        $("#Nombre").html(response.Nombre)
        $("#Descripcion").html(response.Descripcion)
        response.Ingredientes.forEach( (ingrediente) => {
            $("#Ingredientes").append(`<li> ${ingrediente}</li>`)
        })
        response.Pasos.forEach(paso => {
            $("#Pasos").append(`<li> ${paso} </li>`)
        })
        $("#showReceta").removeClass("invisible")
        $("#borrarReceta").attr("id", `${response.objectId}`)
        $("#editarReceta").attr('href', `./editarReceta.html?id=${response.objectId}`)
    },
    error : () => {
    },
};

$.ajax(settings).done(function (response) {

});

$("#borrarReceta").on('click', (element) => {
    let settings = {
        "url": `https://parseapi.back4app.com/classes/Recetas/${element.target.id}`,
        "method": "DELETE",
        "timeout": 0,
        "headers": {
            "X-Parse-Application-Id": "uLPAGLPSXkrZlc46hIIXxArceEKsWIio46RaC61N",
            "X-Parse-REST-API-Key": "CJf04j4j48S9ZNXdevYZeMbjQmJBBGsluhv1AMqG",
            "Content-Type": "application/json"
        },
        success : () => {
            console.log("Exito")
            Swal.fire({
                title: 'Borrado!',
                text: 'La Receta ha sido Borrada',
                icon: 'success',
                confirmButtonText: 'Salir'
            }).then(() => window.location.href = "./Recetario.html")
        },
        error : () => {
            console.log("Error")
            Swal.fire({
                title: 'No Borrada!',
                text: 'La Receta no ha sido Borrada',
                icon: 'error',
                confirmButtonText: 'Volver'
            }).then(() => location.reload())

        },
        "data": {},
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
})
