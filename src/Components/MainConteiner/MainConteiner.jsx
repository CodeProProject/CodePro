import React from 'react'

import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import Diferencial from '../Diferencial/Diferencial';

const MainConteiner = () => {
  return (
    <main className='w-full h-full'>
      <Banner />
      <Section/>
      <Diferencial/>
    </main>
  )
}

export default MainConteiner;