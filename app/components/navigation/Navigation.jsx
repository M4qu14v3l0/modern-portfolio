//  Next's links
import Link from "next/link"

export default function Navigation () {

    const links = [
        {label:'Home', route:'/'},
        {label:'About', route:'/about'},
        {label:'Skills', route:'/skills'},
        {label:'Projects', route:'/projects'}

      ]
      
    return(
        <nav>
            <ul>
            {links.map(({label ,route}) => (
                <li key={route}>
                <Link href={route}>
                    {label}
                </Link>
                </li>
            ))}
            </ul>
        </nav>
    )
}