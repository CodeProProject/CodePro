import React from 'react'

import { FaRegCopyright } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Rodape = () => {
      return (
            <footer 
                  id='footer-container' 
                  className='w-full h-[100px] pl-14 py-3 bg-slate-700 flex gap-40'
            >
                  <div className='flex justify-center gap-2'>
                        <p className='font-ptsans font-bold text-2xl text-white cursor-pointer'>
                              C<span className='font-ptsans text-xl cursor-pointer'>ode</span>P<span className='font-ptsans text-xl cursor-pointer'>ro</span>
                        </p>
                        
                        <i className='mt-[10px] text-white scale-100'>
                              <FaRegCopyright />
                        </i>
                  </div>

                  <div className='flex gap-10 pt-1'>
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
                                    <li>(21) 96722-0868</li>
                                    <li>(21) 99698-4774</li>
                              </ul>
                        </div>
                  </div>
            </footer>
      )
}

export default Rodape;