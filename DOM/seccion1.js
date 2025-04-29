const llenarSeccion1 = () => {
    const seccion1 = document.getElementById('seccion1');
    seccion1.innerHTML = `
        <h2>Galería de Zapatos / Tenis</h2>
        <div class="gallery">
            <img src="/DOM/Imagenes/Tenis_adidas_Sleek_Blanco_EG7876_01_standard.avif" alt="Imagen 1">
            <img src="/DOM/Imagenes/Tenis_adidas_Sleek_Blanco_EG7876_01_standard.avif" alt="Imagen 1">
            <img src="/DOM/Imagenes/tenis-adidas-vl-court-3.0.avif" alt="Imagen 2">
            <img src="/DOM/Imagenes/WhatsApp-Image-2020-10-28-at-5.47.17-PM-1.jpeg" alt="Imagen 3">
        </div>
    `;
};

export { llenarSeccion1 };
