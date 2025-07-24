import { TypeAnimation } from "react-type-animation"
import { motion } from "motion/react"
const Speech = () => {
  return (
    <motion.div 
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="bubbleContainer">
        <div className="bubble">
            <TypeAnimation
            sequence={[
                1000,
                'I develop items for individual clients.',
                1000,
                'I develop items for Companies also.',
                1000,
            ]}
            wrapper="span"
            speed={40}
            deletionSpeed={20}
            repeat={Infinity}
            />
        </div>
        <img src="/man.png" alt="" />
    </motion.div>
  )
}

export default Speech