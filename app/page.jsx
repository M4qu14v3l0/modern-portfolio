'use client'

import Love from "./portadaComponents/Love";
import Presentation from "./portadaComponents/Presentation";
import Social from "./portadaComponents/Social";
import Work from "./portadaComponents/Work";

export default function HomePage(){
    return(
        <main className="home-container">
            <div className="portada-container">
            <Presentation />
            <Work />
            <Love />
            <Social />
            </div>
        </main>
    )
}