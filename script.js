// Selección del formulario y la sección de resultados
const form = document.getElementById('moderacion-form');
const resultadoDiv = document.getElementById('resultado');

// Escucha el evento de envío del formulario
form.addEventListener('submit', function (event) {
    // Prevenir el comportamiento por defecto
    event.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const pais = document.getElementById('pais').value.trim();
    const provincia = document.getElementById('provincia').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const codigoPostal = document.getElementById('codigo-postal').value.trim();

    // Validar campos (simple)
    if (!nombre || !apellido || !pais || !provincia || !ciudad || !codigoPostal) {
        resultadoDiv.innerHTML = `<div class="alert alert-danger">Por favor, completa todos los campos.</div>`;
        return;
    }

    // Mostrar los datos ingresados
    resultadoDiv.innerHTML = `
        <div class="alert alert-success">
            <h4>Datos Ingresados:</h4>
            <ul>
                <li><strong>Nombre:</strong> ${nombre}</li>
                <li><strong>Apellido:</strong> ${apellido}</li>
                <li><strong>País:</strong> ${pais}</li>
                <li><strong>Provincia:</strong> ${provincia}</li>
                <li><strong>Ciudad:</strong> ${ciudad}</li>
                <li><strong>Código Postal:</strong> ${codigoPostal}</li>
            </ul>
        </div>
    `;

    // Opcional: Limpiar el formulario
    form.reset();
});
