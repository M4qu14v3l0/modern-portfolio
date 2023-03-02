'use client'

import { Container } from "../components/container/container";
import Collaboration from "../worksComponents/Collaboration";
import OldWorks from "../worksComponents/OldWorks";
import Work from "../worksComponents/Work";


export default function Works () {
    return(
        <main>
            <Container>
                <Work />
                <Collaboration />
                <OldWorks />
            </Container>
            {/* */}
        </main>
    )
}