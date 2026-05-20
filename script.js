fetch("productos.json")
    .then(response => response.json())
    .then(productos => {

        const contenedor = document.getElementById("contenedor-productos");

        productos.forEach(producto => {

            
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta-producto");

            tarjeta.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">

                <div class="info-producto">
                    <h2>${producto.nombre}</h2>

                    <p class="categoria">
                        Categoría: ${producto.categoria}
                    </p>

                    <p class="precio">
                        ₡${producto.precio}
                    </p>

                    <p class="descripcion">
                        ${producto.descripcion}
                    </p>

                    <p class="beneficios">
                        <strong>Beneficios:</strong>
                        ${producto.beneficios}
                    </p>

                    <button onclick="comprarProducto('${producto.nombre}')">
                        Comprar
                    </button>
                </div>
            `;

            
            contenedor.appendChild(tarjeta);

        });

    })
    .catch(error => {
        console.log("Error al cargar el JSON:", error);
    });




function comprarProducto(nombreProducto) {

    alert(nombreProducto + " agregado al carrito");

}