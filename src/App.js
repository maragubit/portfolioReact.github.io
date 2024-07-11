import './App.css';
import { useState,useEffect} from "react";
import Nomovil from './components/Nomovil';
import Movil from './components/Movil';

function App() {
  useEffect(() => {
    // Verificar si la alerta ya ha sido mostrada
    const alertaMostrada = sessionStorage.getItem('alertaMostrada');

    if (!alertaMostrada) {
        // Mostrar la alerta
        setTimeout(()=>alert("Para descubrir los elementos interactivos\nPulse el interruptor de la luz"),3000);
        // Marcar la alerta como mostrada en localStorage
        sessionStorage.setItem('alertaMostrada', 'true');
    }
}, []);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="App">
          {isMobile ? <Movil/> : <Nomovil/>}     
    </div>
    
  );
}

export default App;
