
import {Link} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from 'react';

function Proyectos(){
    const [showCarousel, setShowCarousel] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCarousel(true);
        }, 3000); // Cambia a true cuando pasan 3 segundos y se enseña el carousel en el JSX.

        return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
    }, []);

    const [imagen,setImagen]=useState('pcOff.png');
    useEffect(()=>{
        const timer= setTimeout(()=>{setImagen('pc.png')},2000);
        return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte
    }, []);
    
    return (
        <>
        <audio autoPlay>
          <source src="start.mp3" type="audio/mp3" />
        </audio>
        { showCarousel &&
        <div className="misProyectos">
        <div className="info">
            <Carousel>
                <div>
                    <img src="ahorroDiario.png" alt="ahorrodiario" />
                    <div className="legend">
                        <h3>Ahorro Diario</h3>
                        <p>Aplicacion web para gestionar lo que quieres ahorrar</p>
                        <p>Back-end: PHP (Laravel)</p>
                        <p> <a href="http://ec2-51-20-127-127.eu-north-1.compute.amazonaws.com" target="_blank">Link Demo</a></p>
                    </div>
                    
                </div>
                <div>
                    <img src="mymdental.png" alt="mymdental" />
                    <div className="legend">
                        <h3>M&M Dental</h3>
                        <p>Aplicación web clínica dental</p>
                        <p>Back-end: Python (Django) </p>
                        <p> <a href="https://mymdental.pythonanywhere.com" target="_blank">Link Demo</a></p>
                    </div>
                </div>
                <div>
                    <img src="laboratorio.png" alt="laboratorio" />
                    <div className="legend">
                        <h3>Laboratorio nutrición</h3>
                        <p>Aplicación web gestión muestras laboratorio</p>
                        <p>Back-end: Python (Django)</p>
                        <p> <a href="https://laboratorioaguera.pythonanywhere.com" target="_blank">Link Demo</a></p>
                    </div>
                </div>
                <div>
                    <img src="fitomanager.png" alt="fitomanager" />
                    <div className="legend">
                        <h3>Fitomanager</h3>
                        <p>Aplicación web plantas medicinales</p>
                        <p>Back-end: Python (Django)</p>
                        <p> <a href="https://maragubit.pythonanywhere.com/" target="_blank">Link Demo</a></p>
                    </div>
                </div>
                <div>
                    <img src="oca.png" alt="oca"/>
                    <div className="legend">
                        <h3>Juego de la oca</h3>
                        <p>Juego oca para CFGS Desarrollo de aplicaciones Web. Ilerna FP </p>
                        <p>Front-end: Java Script</p>
                        <p> <a href="https://maragubit.github.io/juegojsoca.github.io" target="_blank">Link Demo</a></p>
                    </div>
                </div>
            </Carousel>
        </div>
        <div className="off">
            <Link to="/"> <img className="offImage" id="offImage" src="off.png" alt="close"/></Link>
        </div>
    </div>
        }
        
        <div className="pcImage">
            <img  src={imagen} alt="pc"></img>
        </div>
        </>
    );
}
export default Proyectos;