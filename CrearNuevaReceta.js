
$("#AddIngredienteInput").on("click", () => {
        $("#listaIngredientes").append(` <input type="text" class="form-control mb-1" name="ingredientes[]" placeholder="Inserte ingrediente">`)
    })
// Evento para add un nuevo campo de Pasos
$("#AddPasoInput").on("click", () => {
    $("#listaPasos").append(`<input type="text" class="form-control mb-1" name ="paso" placeholder="Inserte Paso ">`)
})
$("#guardarReceta").on("click", () => {
        let settings = {
        "url": "https://parseapi.back4app.com/classes/Recetas",
        "method": "POST",
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
