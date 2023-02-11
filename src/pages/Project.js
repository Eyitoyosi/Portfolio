import { projects } from "../data";
const Projects = () => {
    return ( 
        <section className="project-container">
              <h2>Projects Portfolio</h2>
                <div className="project-content">
                    {projects.map((project) => {
                        const {id, url, name, image, description} = project
                        return(
                            <div className="project-info" key={id}>
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    <div>
                                        <div>
                                           <img src={image} alt={name} className="card-image"/>
                                        </div>
                                        <div className="card-name">
                                           <h3>{name}</h3>
                                           {description}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <a href="https://github.com/Eyitoyosi" target="_blank" rel="noopener noreferrer">
                    <h4 className="more-projects">More Projects</h4>
                    </a>
                </div>
        </section>
     );
}
 
export default Projects;