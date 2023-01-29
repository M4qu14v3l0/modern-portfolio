'use client'

import Image from "next/image";
import astronaut from "../assets/astronaut.png"

//  Material UI ico
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Link from "next/link";

export default function Portada () {
    return(
        <div className="portada-container">
            <div className="text-container">
                <h2 className="line-1 anim-typewriter">I'm Marcelo.</h2>
                <h1>Full Stack Developer</h1>

                <Link href={'/connect'} className="connect-link-container">
                    My Portfolio {<ArrowCircleRightIcon className="arrow-ico"/>}
                </Link>
            </div>
            <Image
            className="astronaut-img"
            src={astronaut}
            alt="astronaut"
            />
        </div>
    )
}


