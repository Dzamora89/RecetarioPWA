var parametros = new URLSearchParams(window.location.search);



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
    },
    error : () => {
    },
};

$.ajax(settings).done(function (response) {

});

