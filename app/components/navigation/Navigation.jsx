'use client'

//  Next's links
import Link from 'next/link'

import { motion } from 'framer-motion'

import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home', route: '/' },
  { label: 'Works', route: '/works' },
  { label: 'Skills', route: '/skills' }
]

export default function Navigation () {
  const path = usePathname()

  return (
    <nav>
      <ul>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>
              {route === path && (
                <motion.span
                  layoutId='underline'
                  className='tab-activated'
                />
              )}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
