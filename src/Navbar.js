import { useEffect, useRef, useState } from "react";
import logo from "./Images/GladeLogo.svg";
import { FaBars } from  'react-icons/fa';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import{ CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

const Toggle = styled.button`
cursor: pointer;
height: 50px;
border-radius: 50%;
width: 50px;
border: none;
background-color: ${props => props.theme.titleColor};
color: ${props => props.theme.pageBackground};
&:focus {
    outline: none;
} 
transition: all .5s ease;
`;


const Navbar = (props) => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks)
    };

    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />


    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
          linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
          linksContainerRef.current.style.height = '0px';
        }
      }, [showLinks]);
    return ( 
        <nav>
            <div className='nav-center'>
                <div className="nav-header">
                    <Link to="/">
                    <img src={logo} className='logo' alt="logo" />
                    </Link>
                    <Toggle onClick={changeTheme}>
                        {icon}
                    </Toggle>
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className={"links-container"} ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;