import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const PageTransition = ({ children }) => {
  const [isBuffering, setIsBuffering] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBuffering(false)
    }, 500) // Buffer animation for 0.5 seconds

    return () => clearTimeout(timer) // Cleanup timer on unmount
  }, [])

  if (isBuffering) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <motion.div
          className="w-12 h-12 bg-[#29b3f2] rounded-[9px]"
          style={{
            WebkitMask: `
              radial-gradient(farthest-side, #000 92%, transparent) no-repeat left 4px top 4px,
              radial-gradient(farthest-side, #000 92%, transparent) no-repeat right 4px top 4px,
              radial-gradient(farthest-side, #000 92%, transparent) no-repeat right 4px bottom 4px,
              radial-gradient(farthest-side, #000 92%, transparent) no-repeat left 4px bottom 4px,
              linear-gradient(#000 0 0)
            `,
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
          animate={{
            WebkitMaskSize: [
              '0 0, 0 0, 0 0, 0 0, auto',
              '18px 18px, 0 0, 0 0, 0 0, auto',
              '18px 18px, 18px 18px, 0 0, 0 0, auto',
              '18px 18px, 18px 18px, 18px 18px, 0 0, auto',
              '18px 18px, 18px 18px, 18px 18px, 18px 18px, auto',
              '0 0, 18px 18px, 18px 18px, 18px 18px, auto',
              '0 0, 0 0, 18px 18px, 18px 18px, auto',
              '0 0, 0 0, 0 0, 18px 18px, auto',
              '0 0, 0 0, 0 0, 0 0, auto',
            ],
          }}
          transition={{
            duration: 1.0,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
