import React from 'react'

import Navegacao from '../Navegacao/Navegacao';

function Cabecalho() {
  return (
    <header className='w-full h-14 bg-slate-700 md:px-10 fixed z-50'>
      <Navegacao />
    </header>
  )
}

export default Cabecalho;