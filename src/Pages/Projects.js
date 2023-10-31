import React from 'react'
import Projectitem from '../components/Projectitem';
import "../styles/Projects.css";
import {ProjectList} from "../listprojets/ProjectList";

function Projects() {
  return (
    <div className='projects'>
        <h1>My personal Projects</h1>
        <div className='projectList'>
           {ProjectList.map((project , index) =>{
               return (<Projectitem id={index} name={project.name} image={project.image}/>
               );
            })}
        </div>
    </div>
  )
}

export default Projects