import { Link } from "react-router-dom";
function Contacto(){
    return (
        <div className="contact">
        <Link to="/"><img className="close" id="close" src="close.svg" alt="close"/></Link>
        <h2>Contacto <i className='fa fa-address-book' ></i></h2>
        <div className="contacto">
        <p><i className='fa fa-envelope' ></i> Email: <a href="mailto:maragubit@gmail.com">maragubit@gmail.com</a></p>
        <p><i className='fa fa-phone' ></i> Teléfono: +34 630457830</p>
        </div>
        </div>
    );
}

export default Contacto;