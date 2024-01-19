import React, { useState } from 'react';
import './Navegacao.css';

import logoCodepro from "../../assets/codepro.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navegacao = () => {

  const [displayNav, setDisplayNav] = useState("hidden");

  function mudaDisplay() {
    if (displayNav == "hidden") {
      setDisplayNav("flex");
    } else {
      setDisplayNav("hidden");
    }
  }

  return (
    <div id='navegacao' className='navegacao-container'>
      <nav className='nav-container relative'>
        <img 
          src={logoCodepro} 
          alt="Logo codepro" 
          className='w-28 mb-2 scale-[80%] sm:scale-100'  
        />

        <ul className='hidden sm:flex navPadrao'>
          <li className='li-inicio'><a href="#">Início</a></li>
          <li className='li-sobre'><a href="#sobre">Sobre</a></li>
          <li className='li-projeto'><a href="#diferencial">Diferencial</a></li>
          <li className='li-contato'><a href="#contato">Contato</a></li>
        </ul>

        <i 
          className='sm:hidden text-white scale-[175%] mr-4'
          onClick={() => { mudaDisplay() }}
        >
          <GiHamburgerMenu />
        </i>

        <ul 
          className={`${displayNav} navHamburguer`}
        >
          <li  
            className='absolute right-7 top-8 text-white scale-[175%] mr-4'
            onClick={() => { mudaDisplay() }}
          >
            <GiHamburgerMenu />
          </li>
          <ul className='w-full h-max'>
            <li 
              className='flex items-center h-20 px-8 font-medium hover:bg-slate-600'
              onClick={() => { 
                mudaDisplay();
                document.getElementById('linkInicio').click();
              }}
            >
              <a 
                href="#"
                id='linkInicio'
              >
                Início
              </a>
            </li>
            
            <li 
              className='flex items-center h-20 px-8 font-medium hover:bg-slate-600'
              onClick={() => { 
                mudaDisplay();
                document.getElementById('linkSobre').click();
              }}
            >
              <a 
                href="#sobre"
                id='linkSobre'
              >
                Sobre
              </a>
            </li>

            <li 
              className='flex items-center h-20 px-8 font-medium hover:bg-slate-600'
              onClick={() => { 
                mudaDisplay();
                document.getElementById('linkDiferencial').click();
              }}
            >
              <a 
                href="#diferencial"
                id='linkDiferencial'
              >
                Diferencial
              </a>
            </li>

            <li 
              className='flex items-center h-20 px-8 font-medium hover:bg-slate-600'
              onClick={() => { 
                mudaDisplay();
                document.getElementById('linkContato').click(); 
              }}
            >
              <a 
                href="#contato"
                id='linkContato'              
              >
                Contato
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  )
}

export default Navegacao;