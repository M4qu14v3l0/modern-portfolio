//  Material Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';

export default function Social () {

    const social = [
        {ico: LinkedInIcon, label:'@marcelo', url:'https://www.linkedin.com/in/marcelo-llerena-paricahua-20604323a'},
        {ico: InstagramIcon, label:'@marcelo_coding', url:'https://www.instagram.com/marcelo_coding/'},
        {ico: GitHubIcon, label:'@m4qu14v3l0', url:'https://github.com/M4qu14v3l0'},
        {ico: SendIcon, label:'@marcelo.gabriel', url:'mailto:marcelo.gabriel.llerena@gmail.com'},

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