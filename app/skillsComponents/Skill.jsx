'use client'

import TagCloud from "TagCloud";

import { useEffect } from 'react';

export default function Skill () {


    useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "Django",
        "FireBase",
        "Sass",
        "Graphql",
        "html",
        "NextJs",
        "JavaScript",
        "MaterialUi",
        "MongoDB",
        "MySql",
        "Python",
        "NodeJs",
        "React",
        "Scrum",
        "Typescript",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);
    
    return(
        <section>
            <h3>Skills</h3>

            <div className="text-shpere">
                <span className="tagcloud"></span>       
            </div>

        </section>
    )
}