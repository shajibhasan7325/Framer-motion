import React from 'react'
import {motion, useAnimation} from 'framer-motion'


export default function Box1() {
   const control=useAnimation()

  return (
    <div className='box-container'>
        <button onClick={()=>{
            control.start({
                x:900,
                transition:{duration:2}
            
            })
        }}>move right</button>
        <button onClick={()=>{
            control.start({
                x:0,
                transition:{duration:2}
            
            })
        }}>move left</button>
        <button onClick={()=>{
            control.start({
                borderRadius:"50%",
                transition:{duration:1}
            
            })
        }}>Circle</button>
        <button onClick={()=>{
            control.start({
                borderRadius:0,
                transition:{duration:1}
            
            })
        }}>Square</button>
        <button onClick={()=>{control.stop()}}>Stop</button>
        <motion.div className="box"
        animate={control}
        >

        </motion.div>
    </div>
  )
}
