function mostrarAgregarProducto() {
    document.getElementById('inputAgregarProducto').style.display = 'block';
}
function cancelarAgregarProducto() {
    document.getElementById('inputAgregarProducto').style.display = 'none';

}
function mostrarSeccionCategorias() {
    document.getElementById('inputAgregarProducto').style.display = 'none';
    document.getElementById('productos').style.display = 'none';
    listarCategorias();
    document.getElementById('Scategoria').style.display = 'block';
}

function  mostrarApartadoProductos() {
    document.getElementById('inputAgregarCategoria').style.display = 'none';
    document.getElementById('Scategoria').style.display = 'none';
    document.getElementById('productos').style.display = 'block';x
}
function  mostrarAgregarCategoria() {
    document.getElementById('inputAgregarCategoria').style.display = 'block';
}
function cancelarAgregarCategoria() {
    document.getElementById('inputAgregarCategoria').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function () {
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

    // Funcionalidad para agregar producto
    window.agregarProducto = function() {
        const nombre = document.getElementById('nombre').value;
        const codigoBarra = document.getElementById('codigoBarras').value;
        const precio = parseFloat(document.getElementById('precio').value);
        const descripcion = document.getElementById('descripcion').value;
        const categoria = document.getElementById('categoria').value;
        const marca = document.getElementById('marca').value;

        const producto = {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            codigoBarra: codigoBarra,
            marca: marca,
            categoria: categoria
        };

        fetch('http://localhost:8081/agregarProducto', { // URL corregida
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
            .then(response => {
                if (response.ok) {
                    alert('Producto agregado exitosamente');
                    document.getElementById('inputAgregar').reset(); // Resetea el formulario
                } else {
                    alert('Error al agregar el producto');
                }
            })
            .catch(error => {
                console.error("Error", error);
                alert('Error al conectarse con el servidor');
            });
    };
});

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
            tbody.innerHTML = ""; // Limpia la tabla antes de agregar nuevas filas

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