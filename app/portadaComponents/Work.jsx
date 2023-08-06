//  Next
import Link from 'next/link'

//  Material UI ico
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function Work () {
  return (
    <section className='text-about-work'>
      <h3>Work</h3>
      <p>Marcelo is a full stack developer based in Arequipa with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. Working on projects he loves is a 100% accuracy of success</p>
      <Link href='/works' className='connect-link-container'>
        My Portfolio <ArrowForwardIosIcon className='arrow-ico' />
      </Link>
    </section>
  )
}
