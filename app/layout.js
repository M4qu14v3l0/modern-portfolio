

//  Styles scss
import "../styles/globals.scss";

// Components
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";


//font 
import { font } from "./tools/font";


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={font.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
