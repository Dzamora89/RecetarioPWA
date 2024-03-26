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
        console.log(response)
        $("#NombreReceta").val(response.Nombre)
        $("#DescripcionReceta").val(response.Descripcion)
        response.Ingredientes.forEach(ingrediente => {
            $("#listaIngredientes").append(`
            <input type="text" class="form-control mb-1" name="ingredientes" placeholder="Inserte ingrediente" value="${ingrediente}">
            `)
        })
        response.Pasos.forEach(paso => {
            $("#listaPasos").append(`
             <input type="text" class="form-control mb-1" name ="paso" placeholder="Inserte Paso " value="${paso}">
            `)
        })

    },
    error : () => {
        console.log(response)
    },
};
$.ajax(settings).done(function (response) {

});

$("#editarReceta").on("click", () => {
    let settings = {
        "url": `https://parseapi.back4app.com/classes/Recetas/${parametros.get("id")}`,
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "X-Parse-Application-Id": "uLPAGLPSXkrZlc46hIIXxArceEKsWIio46RaC61N",
            "X-Parse-REST-API-Key": "CJf04j4j48S9ZNXdevYZeMbjQmJBBGsluhv1AMqG",
            "Content-Type": "application/json"
        },
        success : () => {
            console.log("Exito")
            Swal.fire({
                title: 'Guardado!',
                text: 'La Receta ha sido guardada',
                icon: 'success',
                confirmButtonText: 'Salir'
            }).then( () => {
                location.href = "./Recetario.html"
            })
        },
        error : () => {
            console.log("Error")
            Swal.fire({
                title: 'No Guardado!',
                text: 'La Receta ha sido guardada',
                icon: 'error',
                confirmButtonText: 'Volver'
            })
        },
        "data": JSON.stringify({
            "Nombre" :  $("#NombreReceta").val(),
            "Descripcion" : $("#DescripcionReceta").val(),
            "Ingredientes" : $("input[name='ingredientes']").map(function(){return $(this).val();}).get(),
            "Pasos" : $("input[name='paso']").map(function(){return $(this).val();}).get()
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

})