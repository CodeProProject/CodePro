import React from 'react'

import { FaRegCopyright } from "react-icons/fa";

const Rodape = () => {
      return (
            <footer id='footer-container' className='w-full h-[220px] bg-slate-700 flex justify-center items-center gap-4'>
                  <p className='font-ptsans font-bold text-2xl text-white cursor-pointer'>
                        C<span className='font-ptsans text-xl cursor-pointer'>ode</span>P<span className='font-ptsans text-xl cursor-pointer'>ro</span>
                  </p>

                  <i className='mt-1 text-white scale-100'>
                        <FaRegCopyright />
                  </i>
            </footer>
      )
}

export default Rodape;