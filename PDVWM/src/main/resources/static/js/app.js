function mostrarAgregarProducto() {
    cargarCategorias();
    document.getElementById('inputAgregarProducto').style.display = 'block';
}
function cancelarAgregarProducto() {
    document.getElementById('inputAgregarProducto').style.display = 'none';

}
function mostrarSeccionCategorias() {
    listarCategorias();
    document.getElementById('inputAgregarProducto').style.display = 'none';
    document.getElementById('productos').style.display = 'none';
    document.getElementById('Scategoria').style.display = 'block';
}

function  mostrarApartadoProductos() {
    mostraProductosS();
    document.getElementById('inputAgregarCategoria').style.display = 'none';
    document.getElementById('Scategoria').style.display = 'none';
    document.getElementById('productos').style.display = 'block';
}
function  mostrarAgregarCategoria() {
    document.getElementById('inputAgregarCategoria').style.display = 'block'
}
function cancelarAgregarCategoria() {
    document.getElementById('inputAgregarCategoria').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function () {
    mostraProductosS();

    // Mostrar la sección PDV por defecto al cargar la página
        document.getElementById('pdv').style.display = 'block';

    // Funcionalidad para el menú de navegación
    const links = document.querySelectorAll('.menu-link');

    links.forEach(link => {

        link.addEventListener('click', function (event) {

            event.preventDefault();

            const targetId = link.getAttribute('data-target');


            // Ocultar todas las secciones
            const allSections = document.querySelectorAll('.section');
            allSections.forEach(section => {
                section.style.display = 'none'; // Oculta todas las secciones
            });

            // Mostrar la sección correspondiente
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block'; // Muestra la sección seleccionada
            }
        });
    });


    // Funcionalidad para eliminar todos los productos del carrito
    document.querySelector('.eliminarCarrito').addEventListener('click', function () {
        const cartTableBody = document.querySelector('.carrito-scroll table tbody'); // Selecciona el cuerpo de la tabla del carrito
        cartTableBody.innerHTML = ''; // Elimina todo el contenido
    });

    // Funcionalidad para aceptar la venta
    document.querySelector('.accept-sale-btn').addEventListener('click', function () {
        const paymentInput = document.querySelector('#payment');
        const totalAmount = document.querySelector('.total-amount');

        const paymentAmount = parseFloat(paymentInput.value);
        const totalAmountValue = parseFloat(totalAmount.textContent.replace('$', '').replace(',', ''));

        if (paymentAmount >= totalAmountValue) {
            alert('Venta Aceptada!');
            paymentInput.value = '';
            totalAmount.textContent = '$0.00';
        } else {
            alert('El monto ingresado es insuficiente.');
        }
    });

    // Funcionalidad para el botón del calendario
    const calendarButton = document.getElementById('calendar-button');
    const calendarInput = document.getElementById('calendar-input');

    calendarButton.addEventListener('click', function () {
        calendarInput.style.display = 'block'; // Muestra el campo de entrada para la fecha
        calendarInput.focus(); // Enfoca el campo de entrada

        // Inicializa Flatpickr en el campo de entrada
        flatpickr(calendarInput, {
            dateFormat: "Y-m-d", // Formato de fecha
            onClose: function() {
                calendarInput.style.display = 'none'; // Oculta el campo al cerrar el calendario
            }
        });
    });

    // Funcionalidad para eliminar productos individuales
    const eliminarProductoBtns = document.querySelectorAll('.eliminaProducto');

    eliminarProductoBtns.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr'); // Encuentra la fila más cercana
            if (row) {
                row.remove(); // Elimina la fila correspondiente
            }
        });
    });
})

function agregarCategoria() {
    const nombreCategoria = document.getElementById('nombreCategoria').value;

    if (nombreCategoria.trim() === "") {
        alert("El nombre de la categoria no puede estar vacio.");
        return;
    }
    fetch('/api/categorias/guardar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre: nombreCategoria })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al guardar la categoría');
            }
            return response.json();
        })
        .then(data => {
            alert('Categoría guardada correctamente');
            console.log(data);
            document.getElementById('nombreCategoria').value = '';

            listarCategorias();
        })
        .catch(error => {
            alert('Hubo un error al guardar la categoría');
            console.log(error);
        });
}

function listarCategorias() {
    fetch('/api/categorias/listar')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('tablaCategorias');
            tbody.innerHTML = "";

            data.forEach(categoria => {
                const row = document.createElement('tr');
                const cellNombre = document.createElement('td');
                cellNombre.textContent = categoria.nombre;

                row.appendChild(cellNombre);
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.log('Error al obtener las categorías:', error);
        });
}

function cargarCategorias() {
    fetch('/api/categorias/listar')
        .then(response => response.json())
        .then(data => {
            const selectCategoria = document.getElementById('categoria');
            selectCategoria.innerHTML = '<option value="">Selecciona una categoría</option>';

            data.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.id;
                option.textContent = categoria.nombre;
                selectCategoria.appendChild(option);
            });
        })
        .catch(error => console.log('Error al cargar categorías:', error));
}

let categorias = [];

async function obtenerCategorias() {
    try {
        const response = await fetch('/api/categorias/listar');

        if (!response.ok) {
            throw new Error('Error al obtener las categorías');
        }

        categorias = await response.json();

        console.log(categorias);
    } catch (error) {
        console.error('Hubo un problema al obtener las categorías:', error);
    }
}

async function crearProducto() {
    const nombre = document.getElementById('nombre').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);
    const codigoBarra = document.getElementById('codigoBarras').value.trim();
    const marca = document.getElementById('marca').value.trim();
    const nombreCategoria = document.getElementById('categoria').value.trim();

    if (!nombre || !descripcion || isNaN(precio) || !codigoBarra || !marca) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    await obtenerCategorias();

    let idCategoria = 0;

    categorias.forEach(function (categoria) {
        if (categoria.nombre === nombreCategoria) {
            idCategoria = categoria.id;
        }
    });

    const productoData = {
        nombre,
        descripcion,
        precio,
        codigoBarra,
        marca,
        idCategoria
    };

    fetch(`/productos`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(productoData)
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message);
                });
            }
            return response.json();
        })
        .then(data => {
            mostraProductosS();
            console.log('Producto agregado:', data);
            alert('Producto agregado con éxito');
        })
        .catch(error => {
            console.error('Error al agregar el producto:', error);
            alert(`Hubo un problema al agregar el producto: ${error.message}`);
        });
}

let productos = [];
async function obtenerProducto() {
    try {
        const response = await fetch('/productos/AllProductos');

        if (!response.ok) {
            throw new Error('Error al obtener lod productos');
        }

        productos = await response.json();

    } catch (error) {
        console.error('Hubo un problema al obtener los productos', error);
    }
}

function mostraProductosS () {
    fetch('/productos/AllProductos')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('tablaProducto');
            tbody.innerHTML = "";

            data.forEach(producto => {
                const fila = document.createElement('tr');

                const celdaNombre = document.createElement('td');
                celdaNombre.textContent = producto.nombre;
                fila.appendChild(celdaNombre);

                const celdaCodigoBarra = document.createElement('td');
                celdaCodigoBarra.textContent = producto.codigoBarra;
                fila.appendChild(celdaCodigoBarra);

                const celdaPrecio = document.createElement('td');
                celdaPrecio.textContent = '$' + parseFloat(producto.precio).toFixed(2);
                fila.appendChild(celdaPrecio);

                const celdaCategoria= document.createElement('td');
                celdaCategoria.textContent = producto.idCategoria;
                fila.appendChild(celdaCategoria);

                const celdaMarca = document.createElement('td');
                celdaMarca.textContent = producto.marca;
                fila.appendChild(celdaMarca);

                tbody.appendChild(fila);
            });
        })
        .catch(error => {
            console.log('Error al obtener las categorías:', error);
        });
}