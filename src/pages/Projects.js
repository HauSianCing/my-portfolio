import "./Projects.css";
import emp_prj from "../assets/emp_reg.png"
import quiz_prj from "../assets/quiz.png"
import weather_app_prj from "../assets/weather.png"
import cing_kitchen from "../assets/cing-kitchen.png"

export const Projects = () => {
    return (
        <div className="Projects">
            <p className="projectMe">My Projects</p>
            <h1 className="projectHeader">
                Creative Projects
            </h1>
            <div className="project">
                <Project image={emp_prj} description={"Employee Resgistration"} link={"https://github.com/HauSianCing/sample-project-laravel.git"} />
                <Project image={quiz_prj} description={"Quiz App"} link={"https://quiz-app-sample-hsc.vercel.app/"} />
                <Project image={weather_app_prj} description={"Weather App"} link={"https://weather-app-hsc.vercel.app/"} />
                <Project image={cing_kitchen} description={"Cing's kitchen"} link={"https://cing-kitchen.vercel.app/"} />
            </div>

        </div>
    );
}
const Project = (props) => {
    return (
        <div className="projectCard">
            <img src={props.image} className="project-image" />
            <div className="prj-description">
                <p>
                    {props.description}
                </p>
                <div className="link">
                    <a href={props.link}>
                        <i className="fi fi-rr-arrow-right"></i>
                    </a>
                </div>

            </div>
        </div>

    );

}