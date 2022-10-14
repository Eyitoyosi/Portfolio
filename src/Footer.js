import { social } from "./data";

const Footer = () => {
    return ( 
        <footer>
            <hr />
            <div className="footer">
            <div className="footer-follow">
                <h2>Reach Me!</h2>
            </div>
            <div>
            <ul className="social-icons">
                {social.map((socialIcon) => {
                    const {id, url, icon} = socialIcon
                    return(
                        <li key={id}>
                            <a href={url}>
                                {icon}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className="footers-trademark">
                <h3>© Ayotunde's React Portfolio. GAEA®.</h3>
            </div>
            </div>
            </div>
        </footer>
     );
}
 
export default Footer;