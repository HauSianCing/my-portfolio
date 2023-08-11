import "./Projects.css";
export const Projects = () => {
    return (
        <div className="Projects">
                <p className="projectMe">My Projects</p>
                <h1 className="projectHeader">
                Creative Projects
            </h1>
            <div className="project">
            <Project />
            <Project />
            <Project />
            </div>
           
        </div>
    );
}
const Project = () => {
    return (
        <div className="projectCard">
            <img src="/IT-image.jpg" className="project-image"/>
            <div className="prj-description">
            <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
            </p>
            </div>
        </div>

    ); 

}