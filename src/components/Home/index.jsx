import Header from './Header'
import './Home.css'
import map from '../../../public/images/map.png'
import instagram from '../../../public/images/instagram.png'
import email from '../../../public/images/email.png'
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

let Home = () => {
   const[hasAnimated, setHasAnimated] = useState(false);

   useEffect(() => {
      setHasAnimated(true)
   }, []);

 return (
    <section className='home' id='home'>
      <Header  />
      <div className='home-itens'>
         <motion.div
         initial={{opacity: 0}}
         animate={hasAnimated ? {opacity: 1}: {}}
         transition={{duration: 4}}>

         <div className='home-itens-container'>
         <div className='home-itens-title'>
            <h1 className='home-itens-title-text'>Transforme seu produto ou serviços em oportunidades reais através do <strong>processo de licitações.</strong></h1>
         </div>
         <div className='home-itens-subtitle'>
            <h3>Expertise em licitações, ao seu alcance.</h3>
         </div>
         <div className='home-itens-logos'>
            <a href='https://www.google.com/maps/place/R.+Ant%C3%B4nio+Dalmarco,+495+-+Fazendinha,+Curitiba+-+PR,+81320-420/@-25.4791763,-49.3221035,15z/data=!4m16!1m9!3m8!1s0x94dce31cff6f8cab:0xc2fcc5c031ca3025!2sR.+Ant%C3%B4nio+Dalmarco,+495+-+Fazendinha,+Curitiba+-+PR,+81320-420!3b1!8m2!3d-25.4793313!4d-49.3219888!10e5!16s%2Fg%2F11csc5ny_d!3m5!1s0x94dce31cff6f8cab:0xc2fcc5c031ca3025!8m2!3d-25.4793313!4d-49.3219888!16s%2Fg%2F11csc5ny_d?entry=ttu' target="_blank"><img src={map}/></a>
            <a href='https://www.instagram.com/legov.licita/' target="_blank"><img src={instagram}/></a>
            <a href='mailto:legov.licita@gmail.com' target="_blank"><img src={email}/></a>
         </div>
         <div className='home-itens-button'><button><a href="https://wa.me/5541995043150?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20como%20aumentar%20as%20minhas%20chances%20no%20processo%20de%20licita%C3%A7%C3%A3o%21" target="_blank">Fale conosco!</a></button></div>

         </div>
         </motion.div>
      </div>
      
    </section>
 )

}

export default Home