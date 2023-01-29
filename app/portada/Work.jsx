//  Next
import Link from "next/link";

//  Material UI ico
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Work () {
    return(
        <section className="text-about-work">
            <h3>Work</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ab magni esse repellendus pariatur explicabo ex totam error, vero culpa dolorum magnam exercitationem minus, ipsum placeat. Distinctio in eveniet non. ab magni esse repellendus pariatur explicabo ex totam error, vero culpa dolorum magnam exercitationem minus, ipsum placeat. Distinctio in eveniet non</p>
            <Link href={'/connect'} className="connect-link-container">
            My Portfolio {<ArrowForwardIosIcon className="arrow-ico"/>}
            </Link>
        </section>
    )
}