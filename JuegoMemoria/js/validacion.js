// Validacion de formularios
$().ready(function() {
	$("#registro").validate({
        rules: {
            nombre: {
                required: true,
            },
            usuario: {
                required: true,
                minlength: 3 
            },
            contraseña: {
                required: true,
                minlength: 5
            },
         
            email: {
                required: true,
                email: true
            },

        },
        messages: {

            nombre: {
                required: "Por favor ingrese su nombre",
            },
            usuario: {
                required: "Por favor ingrese su usuario",
                minlength: "El usuario debe contener al menos 5 caracteres."
            },
            contraseña: {
                required: "Por favor ingrese una contraseña",
                minlength: "La contraseña debe contener al menos 5 caracteres"
              
            },
            email: {
                required: "Por favor ingrese su email"
            }
        
        }
    });

});
