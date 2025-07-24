import { Canvas } from '@react-three/fiber';
import Speech from './Speech'
import './hero.css'
import { motion } from 'motion/react'
import Shape from './Shape';
import { Suspense } from 'react';

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    }
  }
}

const Hero = () => {
  return (
    <div className='hero'>
      {/* LEFT SIDE */}
      <div className="hSection left">
        {/* Title */}
        <motion.h1 
          initial={{ y: -100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There, <br />
          <span>
          I'm Ace!
          </span> 
        </motion.h1>

        {/* Awards */}
        <motion.div
          className="awards"
          variants={awardVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={awardVariants}>Top Rated Designer</motion.h2>
          <motion.p variants={awardVariants}>I am the best designer in the world, no cap. These are my awards;</motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src="/award1.png" alt="award" />
            <motion.img variants={awardVariants} src="/award2.png" alt="award" />
            <motion.img variants={awardVariants} src="/award3.png" alt="award" />
          </motion.div>
        </motion.div>

        {/* Scroll SVG */}
        <motion.a 
          animate={{
            y: [0, 10, 0],         // smooth up and down bounce
            opacity: [0, 1, 0.8, 1, 0],  // pulse fade
            scale: [1, 1.05, 1]
           }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }} 
          href="#services" 
          className='scroll'
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>


        
      </div>

      {/* RIGHT SIDE */}
      <div className="hSection right">
        {/* Follow */}
        <motion.div
          variants={followVariants}
          initial='initial'
          animate='animate'
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/facebook.png" alt="" />
          </motion.a>

          <motion.div className="followTextContainer">
            <div className="followText">
              FOLLOW ME
            </div>
          </motion.div>
        </motion.div>

        {/* Bubble */}
        <Speech />

        {/* Certificate */}
        <motion.div 
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <img src="/certificate.png" alt="" />
          FCC CERTIFIED <br />
          PROFESSIONAL <br />
          WEB DEVELOPER
        </motion.div>

        {/* Contact Button */}
        <motion.a 
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          href="#contact" className='contactLink'
        >
          <motion.div 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear', }}
            className="contactButton"
          >
            
            {/* circle svg */}
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="50%">
                  Contact Me •
                </textPath>
              </text>
            </svg>

            {/* arrow svg */}
            <motion.div 
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear', }}
              className="arrow">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </motion.div>

          </motion.div>
        </motion.a>
      </div>

      {/* Background (center) */}
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback='Loading...'>
            <Shape /> 
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/hero3.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Hero