//  Material Icons

import{
    LinkedIn,
    Instagram,
    GitHub,
    Send,
} from '@mui/icons-material';


import Link from 'next/link';

export default function Social () {

    const social = [
        {ico: LinkedIn, label:'@marcelo', url:'https://www.linkedin.com/in/marcelo-llerena-desarrollador-front-end/'},
        {ico: Instagram, label:'@marcelo_coding', url:'https://www.instagram.com/marcelo_coding/'},
        {ico: GitHub, label:'@m4qu14v3l0', url:'https://github.com/M4qu14v3l0'},
        {ico: Send, label:'@marcelo.gabriel', url:'mailto:marcelo.gabriel.llerena@gmail.com'},

    ]

    return(
        <section>
            <h3>On the web</h3>

            <div className='social-icons-container'>
            {
                social.map( item => (
                    <Link href={item.url} key={item.label} target="_blank" className='social-ico-item'>
                        {<item.ico />}
                        {item.label}
                    </Link>
                ))
            }
            </div>
        </section>
    )
}