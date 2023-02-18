import Image from "next/image"

import githubApi from '../assets/github.jpg';
import idrink from '../assets/idrink.jpg';
import apigiphy from '../assets/apigiphy.jpg';
import realState from '../assets/rs.jpg';
import airbnb from '../assets/Airbnb.jpg';
import modernportfolio from '../assets/Modernportfolio.jpg';

export default function Work () {

    const works = [
        {id:1 ,name:'Airbnb clone' , url:'https://airbnb-clon-b6b27gts6-m4qu14v3l0.vercel.app/' , img:airbnb, description:'Airbnb clone developed with Typescript , React18 , Next13 , TailwindCSS'},

        {id:2 ,name:'Real State Website' , url:'https://m4qu14v3l0.github.io/Real-state-template-/' , img:realState, description:"Marcelo's enterprise is a website built to real state company."},

        {id:3 ,name:'E-commerce' , url:'https://waqto.netlify.app/' , img:idrink, description:'Waqto is E-commerce of booze delivery app, developed with React18 , Firebase'},

        {id:4 , name:'API Giphy' , url:'https://api-gif-consumer.netlify.app/' , img:apigiphy, description:'Do you want to get your favorite Gifs just calling them?'},

        {id:5 ,name:'Github API' , url:'https://material-ui-c11y0l58t-m4qu14v3l0.vercel.app/' , img:githubApi, description:"User's githubs accounts API, developed with React18, MaterialUI5"},

        {id:6 ,name:'Modern Portfolio' , url:'https://material-ui-c11y0l58t-m4qu14v3l0.vercel.app/' , img:modernportfolio, description:"My new portfolio! minimalist and modern. Developed with React18, Next13 , Sass , FramerMotion"},
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
                                <div className="info-card-content">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}