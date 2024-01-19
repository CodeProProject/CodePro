import React from 'react'

import { FaRegCopyright } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import logoCodepro from '../../assets/codepro.png';

const Rodape = () => {
      return (
            <footer 
                  id='footer-container' 
                  className='w-full h-max pl-0 sm:pl-14 py-10 sm:py-3 bg-slate-700 flex flex-col sm:flex-row gap-8 sm:gap-32'
            >
                  <div className='flex justify-center'>
                        <img 
                              src={logoCodepro}
                              alt="Logo codepro"
                              className='w-28 h-10 scale-90 mb-2'
                        />
                        
                        <i className='mt-[16px] text-white scale-100'>
                              <FaRegCopyright />
                        </i>
                  </div>

                  <div className='flex gap-10 pt-1 ml-8 sm:ml-0 self-center sm:self-auto'>
                        <div className='w-28 flex flex-col'>
                              <h4 className='text-sm font-roboto font-medium text-white  mb-1'>Redes sociais</h4>

                              <ul className='text-xs font-roboto text-slate-300 flex'>
                                    <li className='flex items-center gap-1'>
                                          <span className="text-slate-300 scale-125">
                                                <RiInstagramFill />
                                          </span>
                                          @CodeproOficial
                                    </li>
                              </ul>
                        </div>
                        <div className='flex flex-col'>
                              <h4 className='text-sm font-roboto font-medium text-white mb-1'>Outras formas de contato</h4>
                              <ul className='text-xs font-roboto text-slate-300 flex flex-col gap-1'>
                                    <li>+55 (21) 96722-0868</li>
                                    <li>+55 (21) 98241-0516</li>
                              </ul>
                        </div>
                  </div>
            </footer>
      )
}

export default Rodape;