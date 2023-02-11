import { social } from "./data";

const Footer = () => {
    return ( 
        <footer>
            <div className="footer">
            <div className="footer-follow">
                <h2>Get in Touch</h2>
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
                <h5>© Ayotunde's React Portfolio. GAEA®.</h5>
            </div>
            </div>
            </div>
        </footer>
     );
}
 
export default Footer;