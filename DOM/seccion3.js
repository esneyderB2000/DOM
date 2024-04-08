const llenarSeccion3 = () => {
    const seccion3 = document.getElementById('seccion3');
    seccion3.innerHTML = `
        <h2>Galería de Imágenes3</h2>
        <div class="gallery">
            <img src="image4.jpg" alt="Imagen 1">
            <img src="image5.jpg" alt="Imagen 2">
            <img src="image6.jpg" alt="Imagen 3">
        </div>
    `;
};

export { llenarSeccion3 };