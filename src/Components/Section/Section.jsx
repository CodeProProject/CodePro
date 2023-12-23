import React from 'react'
import "./Section.css";
import designOtimizar from '../../assets/designOtimizar.png'

const Section = () => {
  return (
    <div id='sobre' className='section-container'>
        <div className='container-sobre'>
            <img src={designOtimizar} className='designExperiencia' />
        </div>

        <div className='info-texto-container'>
            <h1>Sobre</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto explicabo dolorum nisi quae ratione eius quis quia rerum corrupti magnam necessitatibus in voluptatem nemo, earum inventore voluptatibus, itaque quod.</p>
        </div>
        
    </div>
  )
}

export default Section