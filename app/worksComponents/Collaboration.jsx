import Image from 'next/image'

import eStadium from '../assets/E-stadium.png'
import countryAcademy from '../assets/CountryAcademy.png'

export default function Collaboration () {
  const works = [
    { id: 1, name: 'E-stadium', url: 'https://e-stadium.vercel.app/', img: eStadium, description: 'Gaming web to participate on tournaments , collaboration with No-Country' },
    { id: 2, name: 'Country Academy', url: 'https://country-academy.vercel.app/', img: countryAcademy, description: 'Online Courses platform , collaboration with No-Country' }

  ]

  return (
    <section>
      <h3>Collaborations</h3>
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
