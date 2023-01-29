'use client'

import Love from "./portada/Love";
import Portada from "./portada/Portada";
import Presentation from "./portada/Presentation";
import Social from "./portada/Social";
import Work from "./portada/Work";

export default function HomePage(){
    return(
        <main className="home-container">
            <div className="portada-container">
            <Portada />
            <Presentation />
            <Work />
            <Love />
            <Social />
            </div>
        </main>
    )
}