'use client'

import { Container } from "./components/container/container";
import Love from "./portadaComponents/Love";
import Presentation from "./portadaComponents/Presentation";
import Social from "./portadaComponents/Social";
import Work from "./portadaComponents/Work";



export default function HomePage(){
    return(
        <main>
            <Container>
                <Presentation />
                <Work />
                <Love />    
                <Social />
            </Container>
        </main>
    )
}