import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'

export default function Box1() {
  const [isAnimated, setIsAnimated] = useState(false)
  return (
    <div className='box-container'>
        <motion.div className="box"
        initial={{
            opacity:0.1
        }}
        animate={{
            x:isAnimated ? 900 :0,
            opacity:isAnimated ? 1 :0.5,
            rotate:isAnimated ? 360 :0,
            backgroundColor:isAnimated ? 'blue':'green'

        }}
        transition={{
           
            type:"spring",
            stiffness:5
        }}
        onClick={()=>setIsAnimated(!isAnimated)}
        
        >

        </motion.div>
    </div>
  )
}
