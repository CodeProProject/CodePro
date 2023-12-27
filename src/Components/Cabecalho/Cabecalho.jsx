import React from 'react'

import Navegacao from '../Navegacao/Navegacao';

function Cabecalho() {
  return (
    <header className='w-full h-[68px] bg-slate-700 md:px-10'>
      <Navegacao />
    </header>
  )
}

export default Cabecalho;