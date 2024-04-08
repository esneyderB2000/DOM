const llenarSeccion2 = () => {
    const seccion2 = document.getElementById('seccion2');
    seccion2.innerHTML = `
        <h2>Galería de Imágenes</h2>
        <div class="gallery">
            <img src="image4.jpg" alt="Imagen 1">
            <img src="image5.jpg" alt="Imagen 2">
            <img src="image6.jpg" alt="Imagen 3">
        </div>
    `;
};

export { llenarSeccion2 };