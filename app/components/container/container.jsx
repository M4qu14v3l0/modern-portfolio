'use client'

import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

export const Container = ({
  children

}) => (
  <motion.article initial='hidden' animate='enter' exit='exit' variants={variants} transition={{ duration: 0.4, type: 'easeInOut' }} style={{ position: 'relative' }} className='portada-container'>
    {children}
  </motion.article>
)
