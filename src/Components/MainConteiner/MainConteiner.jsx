import React from 'react'

import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import Diferencial from '../Diferencial/Diferencial';
import Contato from '../Contato/Contato';


const MainConteiner = () => {
  return (
    <main className='w-full h-full'>
      <Banner />

      <Section/>

      <Diferencial/>
      
      <Contato/>


    </main>
  )
}

export default MainConteiner;