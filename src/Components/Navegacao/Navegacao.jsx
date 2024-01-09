import React from 'react'
import './Navegacao.css'  

const Navegacao = () => {
  return (
    <div id='navegacao' className='navegacao-container'>
      <nav className='nav-container'>
        <p className='font-ptsans font-bold text-3xl text-white cursor-pointer'>C<span className='font-ptsans text-2xl cursor-pointer'>ode</span>P<span className='font-ptsans text-2xl cursor-pointer'>ro</span></p>
        <ul>
          <li className='li-inicio'><a href="#">Início</a></li>
          <li className='li-sobre'><a href="#sobre">Sobre</a></li>
          <li className='li-projeto'><a href="#diferencial">Diferencial</a></li>
          <li className='li-contato'><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navegacao;