import Image from "next/image"

import githubApi from '../assets/github.jpg';
import idrink from '../assets/idrink.jpg';
import apigiphy from '../assets/apigiphy.jpg';
import portfolio from '../assets/portfolio.jpg';
import realState from '../assets/rs.jpg';

export default function Work () {

    const works = [
        {id:1 ,name:'Real State' , url:'https://m4qu14v3l0.github.io/Real-state-template-/' , img:realState, description:"Marcelo's enterprise is a website built to real state company."},

        {id:2 ,name:'Waqto' , url:'https://waqto.netlify.app/' , img:idrink, description:'Waqto is a booze delivery app'},

        {id:3 , name:'API Giphy' , url:'https://api-gif-consumer.netlify.app/' , img:apigiphy, description:'Do you want to get your favorite Gifs just calling them?'},

        {id:4 ,name:'Github API' , url:'https://material-ui-c11y0l58t-m4qu14v3l0.vercel.app/' , img:githubApi, description:'Do you want to see your profile or public profiles of GitHub?'},

        {id:5 , name:'Portfolio v1' , url:'https://marcelo-llerena.netlify.app/' , img:portfolio, description:'My first portfolio as a programmer!'},

    ]

    return(
        <section>
            <h3>Works</h3>
            <div className="work-cards-container">
                {
                    works.map(item => (
                        <a
                            href={item.url}
                            rel={item.name}
                            key={item.id}
                            target="_blank"
                        >
                            <div className="card-container">
                                <Image 
                                    src={item.img}
                                    alt={item.name}
                                    className="img-card"
                                />
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}