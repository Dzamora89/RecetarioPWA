let settings = {
    "url": "https://parseapi.back4app.com/classes/Recetas",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "X-Parse-Application-Id": "uLPAGLPSXkrZlc46hIIXxArceEKsWIio46RaC61N",
        "X-Parse-REST-API-Key": "CJf04j4j48S9ZNXdevYZeMbjQmJBBGsluhv1AMqG"
    },
    success : (response) => {
        (response.results.forEach((receta) => {
            console.log(receta)
            $("#containerRecetas").append(`
                <div class="card" id="${receta.objectId}">
                    <div class="card-body">
                        <h5 class="card-title">${receta.Nombre}</h5>
                        <p class="card-text">${receta.Descripcion}</p>
                        <a href="./verReceta.html?id=${receta.objectId}" class="btn btn-primary">Ver Receta</a>
                        <a href="" class="btn btn-warning" >Editar Receta</a>
                        <a href="" class="btn btn-danger btnBorrar" id="${receta.objectId}" >Borrar Receta</a>
                    </div>
                    <div class="card-footer">
                        <a href="" class="btn btn-success" >Añadir al plan semanal</a>
                    </div>
                </div>
            `)
        }))
        
        $(".btnBorrar").on('click', (objeto) => {
            console.log(objeto.target.id)
            borrarReceta(objeto.target.id)
        })
    },
    error : () => {
    },
};

$.ajax(settings).done(function (response) {
    
});

function borrarReceta(id) {
    let settings = {
        "url": `https://parseapi.back4app.com/classes/Recetas/${id}`,
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
            }).then(() => location.reload())
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
    
}