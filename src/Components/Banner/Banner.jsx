import React from 'react'

const Banner = () => {
  return (
    <section className='w-full h-[500px] bg-banner bg-bottom bg-cover bg-fixed bg-no-repeat md:h-[600px] md:bg-right'>

      <div className='w-full h-full bg-black/60 flex flex-col items-center pt-44'>
          <h1 className='text-white font-bold text-center text-xl w-11/12 font-ptsans ssm:w-auto ssm:text-xl md:text-3xl'>Transformando ideias em Realidade Virtual</h1>

          <p className='text-white font-ptsans w-11/12 text-base text-center ssm:w-auto md:text-lg '>Excelência em Desenvolvimento Web e Mobile para Aplicações Sofisticadas</p>
      </div>

    </section>
  )
}

export default Banner;