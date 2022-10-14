import photo from "../Images/myphoto.jpeg";
import { Link } from "react-router-dom";
import { skills } from "../data";


const About = () => {
    return ( 
        <section className="profile-container">
            <div>
                <h2>About me<span> :)</span></h2>
                 <div className="profile">
                   <img src={photo} alt="profilePicture" className="profile-picture"/>
                     <div className="about-me">
                       <p>
                         I'm <b>Ayotunde Alabi</b>, In a bid to make our daily tasks in life easier, 
                         i became a self-taught <b>front-end developer</b> contributing 
                         to making a small part of that dream possible.
                       </p>
                       <p>
                         I love programming, designing and building responsive user interfaces in which 
                         I'm passionate about. Aside from work, I'm a big fan of basketball, playing video 
                         games and basically up for adventure that changes my perspective for better in life .
                       </p>
                        <p>
                         I work hard and i'm also a strong advocate for writing clean code.
                         Currently, i'm looking for the right opportunity to evolve and become
                         a seasoned front-end developer with valuable experience. looking for a role in a company
                         with the opportunity to work with the latest technologies on challenging and diverse projects.    
                        </p>
                   </div>
                  </div>
                  <div className="profile-buttons">
                    <Link to="/contact">
                      <div>
                          <button className="profile-btn">Hire Me</button>
                      </div>
                    </Link>  
                      <div>
                          <button className="profile-btn">Download CV</button>
                      </div>
                  </div>
                  
                  <div className="skills">
                    <h1>Skills</h1>
                    <div className="skills-container">
                      <ul className="my-skills">
                        {skills.map((language) => {
                          const { id, skill, nameOfSkill} = language
                          return(
                            <div>
                            <li key={id} className="individual-skill">
                              {skill}
                              <span> {nameOfSkill}</span>
                            </li>
                            </div>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
            </div>
        </section>

     );
}
 
export default About;






