import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHtml5, FaCss3, FaReact, FaJsSquare } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: '/about',
    text: 'about',
  },
  {
    id: 2,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 4,
    url: '/hire me',
    text: 'hire me',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://github.com/Eyitoyosi',
    icon: <div className='changeColor'>
             <FaGithub size={55}/>
          </div>,
  },
  {
    id: 2,
    url: 'mailto:harlahbee@gmail.com',
    icon: <div className='changeColor'>
             <FaEnvelope size={55}/>
          </div>,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/eyitoyosi-alabi-bab6011b4',
    icon: <div className='changeColor'>
            <FaLinkedin size={55}/>
          </div>,
  },
]

export const projects = [
  {
    id: 1,
    url: "https://glade-color-generator.netlify.app/",
  },
  {
    id: 2,
    url: 'https://glade-carts.netlify.app/',
  },
  {
    id: 3,
    url: 'https://glade-cart.netlify.app/',
  },
  {
    id: 4,
    url: 'https://glade-meme-generator.netlify.app/',
  },
]

export const skills = [
  {
    id: 1,
    skill: <FaHtml5 color="0 1px 2px 0 rgb(0 0 0/0.05)" size={55}/>,
    nameOfSkill: "HTML"
  },
  {
    id: 2,
    skill: <FaCss3 color="0 1px 2px 0 rgb(0 0 0/0.05)" size={55}/>,
    nameOfSkill: "CSS"
  },
  {
    id: 3,
    skill: <FaJsSquare color="0 1px 2px 0 rgb(0 0 0/0.05)" size={55}/>,
    nameOfSkill: "JAVASCRIPT"
  },
  {
    id: 4,
    skill: <FaReact color="0 1px 2px 0 rgb(0 0 0/0.05)" size={55}/>,
    nameOfSkill: "REACT"
  },
  {
    id: 5,
    skill: <FaGithub color="0 1px 2px 0 rgb(0 0 0/0.05)" size={55}/>,
    nameOfSkill: "GitHub"
  }
]