'use client'

import { Container } from '../components/container/container'
import Collaboration from '../worksComponents/Collaboration'
import Companies from '../worksComponents/Companies'
import OldWorks from '../worksComponents/OldWorks'
import Work from '../worksComponents/Work'

export default function Works () {
  return (
    <main>
      <Container>
        <Companies />
        <Work />
        <Collaboration />
        <OldWorks />
      </Container>
    </main>
  )
}
