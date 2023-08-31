import "./Projects.css";
import { ProjectSlide } from "./ProjecSlide";

export const Projects = () => {
    return (
        <div className="Projects">
            <p className="projectMe">My Projects</p>
            <h1 className="projectHeader">
                Creative Projects
            </h1>
            <div className="project">
                <ProjectSlide />
            </div>

        </div>
    );
}
