import React from "react";
import { motion } from "framer-motion";


export default function Box2() {
  const boxVariant={
    initial:{
      x: "-100vw"
    },
    animate:{
x:0,
transition:{
  delay:0.5,
  when:"beforeChildren"
}
    }
  }
  const ItemVariant={
    initial:{
      x: "-10vw",
      opacity:0
    },
    animate:{
x:0,
opacity:1,
staggerChildren:0.2,


    }
  }
  return (
    <div className="box-container">
      <motion.div className="box"
      variants={boxVariant}
      initial="initial"
      animate="animate"
      >
{
  [1,2,3].map(box =>{
return <motion.li variants={ItemVariant} className="boxItem"

></motion.li>
  })
}
      </motion.div>
    </div>
  );
}
