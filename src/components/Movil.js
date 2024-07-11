import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AboutMe from "./AboutMe";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";
import Contacto from "./Contacto";


function Movil(){
    const [imagen,setImagen]=useState('conluzmovil.jpg');
    const cambioImagen= () => {
        setImagen((imagen) => (imagen === 'conluzmovil.jpg' ? 'sinluzmovil.jpg' : 'conluzmovil.jpg'));
      };
    return (
        <div className="portada">
        <img id='imagen' className='center'src={imagen} alt="Portfolio" useMap="#Portfolio"></img>
        {imagen === 'sinluzmovil.jpg' && (
        <audio loop autoPlay>
          <source src="sound.mp3" type="audio/mp3" />
        </audio>
        )}
        <Router>
            <map name="Portfolio">
            <Link to='/proyectos'><area title="My projects"  id="misProyectos" shape="rect" coords="244,214,370,300" alt="Projects" href=""></area></Link>
            <area title="GitHub" shape="rect" coords="150,12,275,180" alt="Git" href="https://www.github.com/maragubit" target="_blank"></area>
            <Link to='/sobreMi'><area title="About Me" id="sobreMi" shape="rect" coords="295,10,440,156" alt="Me"  href=""></area></Link>
            <Link to='/habilidades'><area title="My Skills" id="habilidades" shape="poly" coords="155,275,155,325,215,311,213,289" alt="Skills" href=""></area></Link>
            <area title="light"shape="rect" coords="1,244,33,270" alt="light" onClick={cambioImagen} href="#"></area>
            <area title="Messi"shape="rect" coords="5,22,140,178" alt="Messi" href="https://en.wikipedia.org/wiki/God" target="_blank"></area>
            <Link to='/contacto'><area title="contact" id="contacto" shape="circle" coords="400,510,30" alt="contact" href=""></area></Link>
            </map>
            <Routes>  
                <Route path='/sobreMi' element={<AboutMe/>}></Route>
                <Route path='/proyectos' element={<Proyectos/>}></Route>
                <Route path='/habilidades' element={<Habilidades/>}></Route>
                <Route path='/contacto' element={<Contacto/>}></Route>
            </Routes>
        </Router>
        </div>
    );
}
export default Movil;