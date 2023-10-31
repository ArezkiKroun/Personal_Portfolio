import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon  from '@material-ui/icons/Email'
import GitHubIcon  from '@material-ui/icons/GitHub'
import  PictureAsPdf  from '@material-ui/icons/PictureAsPdf'
import "../styles/Home.css";
import cv_i from "../pdf/cv_i.pdf";
import gitlab from "../images/gitlab.png"
import Logo from "../images/mt.png";
import python from "../images/python.png";
import spring from "../images/spring.png";
import xml from "../images/xml.png";
import bootStrap from "../images/bootstrap.png";
import node from "../images/Node.png";
import oracle from "../images/Oracle.png";
import php from "../images/php.png";
import js from "../images/js.png";
import css from "../images/css.png";
import html from "../images/html.png";
import react from "../images/react.png";
import java from "../images/java.png";
import c from "../images/c.png";
import mu from "../images/mu.png"
import mysql from "../images/mysql.png"

function Home() {
  return (
    <div className="home">
        <div className="about">
            <h2>Hello,   my name is KROUN Arezki</h2>
            <div className='prompt'>
                <p>
                   <h4> A software devloper with a passion for learning and creating </h4>
                </p>
               <a href='https://github.com/kiki-dev'><GitHubIcon></GitHubIcon></a>
               <a href='#'><LinkedInIcon></LinkedInIcon></a>
               <a href='#'><EmailIcon></EmailIcon></a>
               <a href="https://gitlab-dpt-info-sciences.univ-rouen.fr/m1info/gest-notes"><img src={gitlab} /></a>
               
            </div>      

             <div className='cv'>
            <p>Download CV</p>
            <a href={cv_i} download > <PictureAsPdf></PictureAsPdf> </a>
            </div>

        </div>

        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li>
                    <h2>Front-End</h2>
                    <span> 
                    <img src={css} />
                    <img src={html} />
                    <img src={react} />
                    <img src={Logo} />
                    <img src={bootStrap} />
                    <img src={mu} />
                    </span>
                </li>
                <li>
                    <h2>Back-End</h2>
                    <span>
                    <img src={spring} />
                    <img src={xml} /> 
                    <img src={oracle} />
                    <img src={node} />
                    <img src={php} />
                    <img src={mysql} />
                    </span>
                </li>
                <li>
                    <h2>Languages</h2>
                    <span>
                    <img src={java} />
                    <img src={python} />
                    <img src={c} />
                    <img src={js} />
                    </span>
                </li>
            </ol>
        </div>
    </div>
    
  )
}

export default Home