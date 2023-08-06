
//  Styles scss
import '../styles/globals.scss'

// Components
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import Portada from './components/portada/Portada'

// font
import { font } from './fonts/font'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className={font.className}>
        <Navigation />
        <Portada />
        {children}
        <Footer />
      </body>
    </html>
  )
}
