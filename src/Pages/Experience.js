import React from 'react'
import {VerticalTimeline,
VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import  SchoolIcon from '@material-ui/icons/School'; 
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css";
function Experience() {
  return (
    <div className='experience'>

    <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2021-2023"
            iconStyle={{ background: "#0d8d18", color:"#fff"}}
            icon={<SchoolIcon/>}
            >
            <h3 className='vertical-timeline-element-title'>
            MASTER INFORMATIQUE (GIL)</h3>
                <p>Université de Rouen Normandie, France</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2017-2021"
            iconStyle={{ background: "#0d8d18", color:"#fff"}}
            icon={<SchoolIcon/>}
            >
            <h3 className='vertical-timeline-element-title'>
            MASTER INFORMATIQUE (SI)</h3>
                <p>Université Mouloud Mammeri Tizi Ouzou, Algérie</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="Novembre 2019 - Janvier 2020"
            iconStyle={{ background: "#3e497a", color:"#fff"}}
            icon={<WorkIcon/>}
            >
            <h3 className='vertical-timeline-element-title'>
            Développeur web</h3>
                <p>études et réalisation d'une application de gestion des salaires des employés a l'entreprise ENIEM, Algérie </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2016-2017"
            iconStyle={{ background: "#0d8d18", color:"#fff"}}
            icon={<SchoolIcon/>}
            >
            <h3 className='vertical-timeline-element-title'>
            Licence 1 Architecture</h3>
            <p>Université Mouloud Mammeri Tizi Ouzou, Algérie</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2015-2016"
            iconStyle={{ background: "#0d8d18", color:"#fff"}}
            icon={<SchoolIcon/>}
            >
            <h3 className='vertical-timeline-element-title'>
            Baccalauréat</h3>
                <p>Série techniques mathématiques, Algérie </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  )
}

export default Experience