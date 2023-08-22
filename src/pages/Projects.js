import "./Projects.css";
import emp_prj from "../assets/emp_reg.png"
import quiz_prj from "../assets/quiz.png"
import  weather_app_prj from "../assets/weather.png"
export const Projects = () => {
    return (
        <div className="Projects">
                <p className="projectMe">My Projects</p>
                <h1 className="projectHeader">
                Creative Projects
            </h1>
            <div className="project">
            <Project image={emp_prj} description={"Employee Resgistration"}/>
            <Project image={quiz_prj} description={"Quiz App"}/>
            <Project image={weather_app_prj} description={"Weather App"}/>
            </div>
           
        </div>
    );
}
const Project = (props) => {
    return (
        <div className="projectCard">
            <img src={props.image} className="project-image"/>
            <div className="prj-description">
            <p>
            {props.description}
            </p>
            </div>
        </div>

    ); 

}