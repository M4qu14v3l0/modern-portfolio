'use client'

import Image from 'next/image'

import django from '../assets/technologies/django.svg'
import firebase from '../assets/technologies/firebase.svg'
import graphql from '../assets/technologies/graphql.svg'
import html from '../assets/technologies/html.svg'
import javascript from '../assets/technologies/javascript.svg'
import jira from '../assets/technologies/jira.svg'
import materialui from '../assets/technologies/materialui.svg'
import mongodb from '../assets/technologies/mongodb.svg'
import mysql from '../assets/technologies/mysql.svg'
import next from '../assets/technologies/next.svg'
import nodejs from '../assets/technologies/nodejs.svg'
import python from '../assets/technologies/python.svg'
import react from '../assets/technologies/react_native.svg'
import redux from '../assets/technologies/redux.svg'
import sass from '../assets/technologies/sass.svg'
import scrum from '../assets/technologies/scrum.svg'
import typescript from '../assets/technologies/typescript.svg'
import tailwindcss from '../assets/technologies/tailwindcss.svg'

const skills = [
  { name: 'Django', img: django },
  { name: 'FireBase', img: firebase },
  { name: 'GraphQl', img: graphql },
  { name: 'html', img: html },
  { name: 'JavaScript', img: javascript },
  { name: 'Jira', img: jira },
  { name: 'MaterialUI', img: materialui },
  { name: 'MongoDB', img: mongodb },
  { name: 'MySql', img: mysql },
  { name: 'Next', img: next },
  { name: 'TypeScript', img: typescript },
  { name: 'Node', img: nodejs },
  { name: 'Python', img: python },
  { name: 'React', img: react },
  { name: 'TailwindCSS', img: tailwindcss },
  { name: 'Redux', img: redux },
  { name: 'Sass', img: sass },
  { name: 'Scrum', img: scrum }
]

export default function Skill () {
  return (
    <section>
      <h3>Skills</h3>
      <div className='group-of-skills-container'>
        {
                skills.map(skill => (
                  <div className='technology-container' key={skill.name}>
                    <p>{skill.name}</p>
                    <Image
                      src={skill.img}
                      alt={skill.name}
                      quality={100}
                      className='technology-img'
                    />
                  </div>
                ))
              }
      </div>

    </section>
  )
}
