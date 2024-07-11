import {Link} from "react-router-dom";
function AboutMe(){
    return(
    <div className="aboutMe">
    <div>
        <Link to="/"><img className="closeAboutMe" id="close" src="close.svg" alt="close"/></Link>
        <img className="aboutMeImage"src="aboutMe.jpg" width="600"></img>
    </div>
    </div>
    );
}
export default AboutMe;