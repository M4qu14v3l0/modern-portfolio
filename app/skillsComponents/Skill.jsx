import Image from 'next/image';

import django from '../assets/technologies/django.svg';
import firebase from '../assets/technologies/firebase.svg';
import graphql from '../assets/technologies/graphql.svg';
import html from '../assets/technologies/html.svg';
import javascript from '../assets/technologies/javascript.svg';
import jira from '../assets/technologies/jira.svg';
import materialui from '../assets/technologies/materialui.svg';
import mongodb from '../assets/technologies/mongodb.svg';
import mysql from '../assets/technologies/mysql.svg';
import next from '../assets/technologies/next.svg';
import nodejs from '../assets/technologies/nodejs.svg';
import python from '../assets/technologies/python.svg';
import react from '../assets/technologies/react_native.svg';
import redux from '../assets/technologies/redux.svg';
import sass from '../assets/technologies/sass.svg';
import scrum from '../assets/technologies/scrum.svg';
import typescript from '../assets/technologies/typescript.svg';


export default function Skill () {

    const skills = [
        {name:'django' , img:django},
        {name:'firebase' , img:firebase},
        {name:'graphql' , img:graphql},
        {name:'html' , img:html},
        {name:'javascript' , img:javascript},
        {name:'jira' , img:jira},
        {name:'materialui' , img:materialui},
        {name:'mongodb' , img:mongodb},
        {name:'mysql' , img:mysql},
        {name:'next' , img:next},
        {name:'nodejs' , img:nodejs},
        {name:'python' , img:python},
        {name:'react' , img:react},
        {name:'redux' , img:redux},
        {name:'sass' , img:sass},
        {name:'scrum' , img:scrum},
        {name:'typescript' , img:typescript},
    ]
    
    return(
        <section>
            <h3>Skills</h3>
            <div className="group-of-skills-container">
                {
                    skills.map(skill =>(
                        <div className="technology-container" key={skill.name}>
                            <Image 
                            src={skill.img}
                            alt={skill.name}
                            quality={100}
                            className="technology-img"
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}