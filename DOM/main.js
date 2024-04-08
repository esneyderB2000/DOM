// Importar funciones de llenado de secciones
import { llenarSeccion1 } from './seccion1.js';
import { llenarSeccion2 } from './seccion2.js';
import { llenarSeccion3 } from './seccion3.js';

// Ejecutar funciones de llenado de secciones
llenarSeccion1();
llenarSeccion2();
llenarSeccion3();

// Opcional: Aplicar estilos CSS desde JavaScript
const aplicarEstilos = () => {
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
        }
        section {
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #333;
        }
        p {
            color: #666;
        }

        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .gallery img {
            max-width: 100%;
            height: auto;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        
    `;
    document.head.appendChild(style);
};

aplicarEstilos();
