import { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AboutMe from "./AboutMe";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";
import Contacto from "./Contacto";


function Nomovil(){
    const [imagen,setImagen]=useState('conluz.jpg');
    const cambioImagen= () => {
        setImagen((imagen) => (imagen === 'conluz.jpg' ? 'sinluz.jpg' : 'conluz.jpg'));
      };
    return (
        <div className="portada">
        <img id='imagen' className='center'src={imagen} alt="Portfolio" useMap="#Portfolio"></img>
        {imagen === 'sinluz.jpg' && (
        <audio loop autoPlay>
          <source src="sound.mp3" type="audio/mp3" />
        </audio>
        )}
        <Router>
            <map name="Portfolio">
            <Link to='/proyectos'><area title="My projects"  id="misProyectos" shape="rect" coords="302,217,418,300" alt="Proyects" href=""></area></Link>
            <area title="GitHub" shape="rect" coords="171,12,289,180" alt="Git" href="https://www.github.com/maragubit" target="_blank"></area>
            <Link to='/sobreMi'><area title="About Me" id="sobreMi" shape="rect" coords="346,10,558,156" alt="Me"  href=""></area></Link>
            <Link to='/habilidades'><area title="My Skills" id="habilidades" shape="poly" coords="199,296,199,322,211,327,265,320,269,298,260,296,258,280,217,280" alt="Skills" href=""></area></Link>
            <area title="light"shape="rect" coords="16,241,46,270" alt="light" onClick={cambioImagen} href="#"></area>
            <area title="Messi"shape="rect" coords="19,22,147,178" alt="Messi" href="https://en.wikipedia.org/wiki/God" target="_blank"></area>
            <Link to='/contacto'><area title="contact" id="contacto" shape="rect" coords="441,485,547,537" alt="contact" href=""></area></Link>
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
export default Nomovil;