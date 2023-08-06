import Image from 'next/image'

import pacman from '../assets/pac.jpg'
import portfolio from '../assets/portfolio.jpg'

export default function OldWorks () {
  const works = [
    { id: 1, name: 'Pacman', url: 'https://github.com/M4qu14v3l0/Pacman', img: pacman, description: 'Pacman created just using python & pygame!' },
    { id: 2, name: 'Portfolio v1', url: 'https://marcelo-llerena.netlify.app/', img: portfolio, description: 'My first portfolio as a programmer!' }
  ]

  return (
    <section>
      <h3>Old Works</h3>
      <div className='work-cards-container'>
        {
                    works.map(item => (
                      <a
                        href={item.url}
                        rel={item.name}
                        key={item.id}
                        target='_blank'
                      >
                        <div className='card-container'>
                          <Image
                            src={item.img}
                            alt={item.name}
                            className='img-card'
                          />
                          <div className='info-card-content'>
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
