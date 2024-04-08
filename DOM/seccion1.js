const llenarSeccion1 = () => {
    const seccion1 = document.getElementById('seccion1');
    seccion1.innerHTML = `
        <h2>Galería de Imágenes</h2>
        <div class="gallery">
            <img src="image4.jpg" alt="Imagen 1">
            <img src="image5.jpg" alt="Imagen 2">
            <img src="image6.jpg" alt="Imagen 3">
        </div>
    `;
};

export { llenarSeccion1 };