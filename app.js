// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
const amigos = [];

// Obtener las referencias a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultadoElemento = document.getElementById('resultado');

/**
 * Función para agregar un amigo a la lista.
 * Se llama al hacer clic en el botón "Añadir".
 */
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    // Validar si el campo de texto está vacío
    if (nombre === '') {
        alert('Por favor, digite un nombre válido.');
        return; // Termina la función si no hay nombre
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista en el DOM
    actualizarLista();
}

/**
 * Función que actualiza la lista de amigos en la interfaz.
 */
function actualizarLista() {
    // Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = '';

    // Iterar sobre el array de amigos y crear elementos de lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

/**
 * Función para sortear un amigo secreto.
 * Se llama al hacer clic en el botón "Sortear amigo".
 */
function sortearAmigo() {
    // Validar si hay al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('Añade al menos un amigo para sortear.');
        return;
    }

    // Obtener un índice aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Seleccionar el amigo secreto usando el índice aleatorio
    const amigoSecreto = amigos[indiceAleatorio];

    // Limpiar resultados anteriores
    resultadoElemento.innerHTML = '';

    // Crear un elemento de lista para mostrar el resultado
    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultadoElemento.appendChild(li);
}