
import { Link } from "react-router-dom";
function Habilidades(){
    return(
        <div className="mySkillsBody">
            <Link to="/"><img className="close" id="close" src="close.svg" alt="close"/></Link>
            <h2>My skills <i className='fa fa-cogs'></i></h2>
            <div className="tablaSkills">
                <table>
                    <tr> <th><i className='fa fa-eye'></i> Front-End</th> <th><i className='fa fa-eye-slash'></i> Back-End</th>  <th> <i className='fa fa-database'></i> Data-Base</th> <th> <i className='fa fa-server'></i>Others</th> </tr>
                    <tr> <td>HTML</td> <td>Python</td> <td>SQL</td> <td>Git</td>  </tr>
                    <tr> <td>CSS</td> <td>Django</td> <td>PL/SQL</td> <td>AWS</td>  </tr>
                    <tr> <td>JavaScript</td> <td>PHP</td> <td>ORM</td> <td>Photoshop</td>  </tr>
                    <tr> <td>Jquery</td> <td>Laravel</td> <td>SQLite</td> <td>XML</td>  </tr>
                    <tr> <td>Bootstrap</td> <td>C#</td> <td></td> <td>Linux</td>  </tr>
                    <tr> <td>React</td> <td>Java</td> <td></td> <td>Docker</td>  </tr>
                    
                </table>
            </div>
        </div>
    );
}
export default Habilidades;