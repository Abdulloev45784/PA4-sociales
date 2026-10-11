/**
 * main.js - Archivo principal de JavaScript
 * Proyecto: Facultad de Ciencias Sociales - Universidad Continental
 */

// Esperamos a que todo el contenido HTML cargue correctamente
document.addEventListener('DOMContentLoaded', function () {
    
    // 1. VALIDACIÓN DE FORMULARIOS (Cumple requisito de Usabilidad)
    // Seleccionamos todos los formularios que tienen la clase 'needs-validation'
    const forms = document.querySelectorAll('.needs-validation');

    // Convertimos a un array y los iteramos
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            
            // Si el formulario detecta que hay campos vacíos o incorrectos
            if (!form.checkValidity()) {
                event.preventDefault(); // Evita que se envíe
                event.stopPropagation(); // Detiene el proceso
            } else {
                // 2. RETROALIMENTACIÓN VISUAL DE ÉXITO
                // Si todo está correcto, mostramos un mensaje y evitamos que la página se recargue (simulación)
                event.preventDefault(); 
                alert('¡Gracias por tu interés! Tu solicitud a la Universidad Continental ha sido enviada con éxito. Un asesor académico se pondrá en contacto contigo muy pronto.');
                
                // Limpiamos el formulario para que quede como nuevo
                form.reset();
                form.classList.remove('was-validated');
                return; // Salimos de la función
            }

            // Agregamos esta clase de Bootstrap para que muestre los colores rojo (error) o verde (éxito)
            form.classList.add('was-validated');
            
        }, false);
    });

    // Pequeño mensaje en consola para demostrar que el JS está conectado correctamente
    console.log("Sistema de validación de la Universidad Continental iniciado correctamente.");
});
