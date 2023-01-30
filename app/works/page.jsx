'use client'

import Collaboration from "../worksComponents/Collaboration";
import OldWorks from "../worksComponents/OldWorks";
import Work from "../worksComponents/Work";


export default function Works () {
    return(
        <main>
            <div className="portada-container">
                <Work />
                <Collaboration />
                <OldWorks />
            </div>
        </main>
    )
}