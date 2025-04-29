const llenarSeccion2 = () => {
    const seccion2 = document.getElementById('seccion2');
    seccion2.innerHTML = `
        <h2>Galería de Camisas / Camisetas</h2>
        <div class="gallery">
            <img src="/DOM/Imagenes/Camiseta_Emblem_Blanco_DH6873_01_laydown.avif" alt="Imagen 1">
            <img src="/DOM/Imagenes/png-transparent-t-shirt-adidas-sportswear-sleeve-adidas-t-shirt-tshirt-white-active-shirt.png" alt="Imagen 2">
            <img src="/DOM/Imagenes/fd4c3c42fce802080e8c876f215c1517.jpg" alt="Imagen 3">
        </div>
    `;
};

export { llenarSeccion2 };
