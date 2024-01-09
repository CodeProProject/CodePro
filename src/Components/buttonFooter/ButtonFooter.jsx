import React from 'react'
import "./ButtonFooter.css";
import { GoArrowUp } from "react-icons/go";

const ButtonFooter = () => {
  return (
    <div className='div-container-btn-footer'>
        <a href="#navegacao">
            <button className='btn-footer'>
                 <GoArrowUp className='icone' />
                 <span>Voltar ao topo</span>
            </button>
        </a>
        
    </div>
  )
}

export default ButtonFooter