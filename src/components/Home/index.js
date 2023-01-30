import {Link} from 'react-router-dom'
import Header from '../Header'
import {motion} from "framer-motion"

import './index.css'


const itemVariants = {
  initial:{
    y:"40vw",
    opacity:0,
    scale:0
  },
  final:{
    y:0,
    scale:1,
    opacity:1,
    transition:{
      duration:0.4,
      type:"spring",
      mass:0.3,
      damping:12
    }
  }
} 

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <motion.div initial={{y:"40vw", opacity:0}} animate={{y:0, opacity:1}} transition={{type:"spring", delay:0.1, mass:0.3, damping:12, when:"beforeChildren", staggerChildren:0.2}} className="home-content">
        <motion.h1 variants={itemVariants} initial="initial" animate="final" className="home-heading">Clothes That Get YOU Noticed</motion.h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <motion.p variants={itemVariants} initial="initial" animate="final" className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </motion.p>
        <Link to="/products">
          <motion.button variants={itemVariants} initial="initial" animate="final" whileHover={{scale:1.01}} whileTap={{scale:0.98, opacity:0.8}} type="button" className="shop-now-button">
            Shop Now
          </motion.button>
        </Link>
      </motion.div>
      <motion.img variants={itemVariants} initial="initial" animate="final"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
