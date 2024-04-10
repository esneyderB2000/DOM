// Importar funciones de llenado de secciones
import { llenarSeccion0 } from './seccion0.js';
import { llenarSeccion1 } from './seccion1.js';
import { llenarSeccion2 } from './seccion2.js';
import { llenarSeccion3 } from './seccion3.js';

// Ejecutar funciones de llenado de secciones
llenarSeccion0();
llenarSeccion1();
llenarSeccion2();
llenarSeccion3();


const aplicarEstilos = () => {
    const style = document.createElement('style');
    style.textContent = `
    body {
        font-family: Arial, sans-serif;
        background-color: #ccc;
    }
    
    #seccion0{
        text-align: center;
        background-color: black;
    }
    
    section {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: #afafaf;
    }
    
    h2 {
        color: black;
        text-align: center;
    }
    
    section .h02{
        color: white;
    }
    
    p {
        color: #666;
    }
    
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 150px;
        margin-bottom: 100px;
        margin-top: 50px;
    }
    
    .gallery img {
        width: 300px;
        height: 300px;
        border: 5px solid #666;
        border-radius: 5px;
        cursor: grab;
        box-shadow: 0px 0px 15px 5px white;
    }
    
    .gallery img:hover{
        width: 310px;
        height: 310px;
        transition: 1s;
        box-shadow: 0px 0px 40px 5px black;
    }
        
    `;
    document.head.appendChild(style);
};

aplicarEstilos();
