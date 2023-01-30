'use client'

import Collaboration from "../worksComponents/collaboration";
import OldWorks from "../worksComponents/oldWorks";
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