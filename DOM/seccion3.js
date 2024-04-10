const llenarSeccion3 = () => {
    const seccion3 = document.getElementById('seccion3');
    seccion3.innerHTML = `
        <h2>Galería de Pantalones</h2>
        <div class="gallery">
            <img src="/Imagenes/526943-800-auto.webp" alt="Imagen 1">
            <img src="/Imagenes/66724708_1.avif" alt="Imagen 2">
            <img src="/Imagenes/816754-800-auto.webp" alt="Imagen 3">
        </div>
    `;
};

export { llenarSeccion3 };
