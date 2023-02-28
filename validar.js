const datos = {
    nombre: '',
    email: '',
    mensaje:''
}
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '' ) {
        
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // Detiene la ejecución de esta función
    } else {
        mostrarAlerta('Mensaje enviado correctamente');
    }

});
   
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    }, 5000);
}

    
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {

    datos[e.target.id] = e.target.value;

    console.log(datos);
}
    

