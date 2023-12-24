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
            <h3>A CodePro é uma empresa especializada no desenvolvimento de sites e aplicativos sob medida.</h3>

            <p>Nossa abordagem centrada no cliente e nossa paixão pela tecnologia nos destacam como uma escolha líder para aqueles que buscam uma presença digital marcante. Com uma equipe de especialistas criativos e engenheiros de software altamente qualificados, estamos comprometidos em oferecer produtos digitais excepcionais que impulsionam o sucesso dos nossos clientes.</p>

            
        </div>
        
    </div>
  )
}

export default Section