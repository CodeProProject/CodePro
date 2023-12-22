import React from 'react'
import './Navegacao.css'  

const Navegacao = () => {
  return (
    <div className='navegacao-container'>
      <nav className='nav-container'>
        <h1>CodePro</h1>
        <ul>
          <li className='li-inicio'><a href="#">Início</a></li>
          <li className='li-sobre'><a href="#">Sobre</a></li>
          <li className='li-projeto'><a href="#">Projeto</a></li>
          <li className='li-contato'><a href="#">Contato</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navegacao