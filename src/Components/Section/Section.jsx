import React from 'react'
import "./Section.css";
import designOtimizar from '../../assets/designOtimizar.png'

const Section = () => {
  return (
    <section id='sobre' className='section-container'>
        <div className='container-sobre'>
            <img src={designOtimizar} className='designExperiencia' />
        </div>

        <div className='info-texto-container'>
            <h1 className='sobre-title'>Sobre</h1>
            
            <p>Bem-vindo à <u style={{color: "#334155"}}>CodePro</u>, sua parceira inovadora em soluções digitais! Fundada com a missão de transformar ideias em realidade digital, a CodePro é uma empresa especializada no desenvolvimento de sites e aplicativos sob medida.</p>
        </div>
        
    </section>
  )
}

export default Section