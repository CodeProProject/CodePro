import React from 'react'
import "./Diferencial.css";
import MonitorImg from '../../assets/monitor.png'
import Mobile from '../../assets/mobile.png';
import Alvo from '../../assets/alvo.png';

//texto para por no diferencial 
/*O Que Nos Diferencia:

(ja foi )Personalização Excepcional: Cada projeto é único, e personalizamos nossas soluções para atender às necessidades específicas de cada cliente. Seja um site elegante, um aplicativo funcional ou uma combinação dos dois, nossa equipe se dedica a entregar resultados excepcionais.

(ja foi) Tecnologia de Ponta: Ficamos à frente das últimas tendências tecnológicas para garantir que suas soluções digitais não apenas atendam aos padrões atuais, mas também estejam prontas para o futuro. Utilizamos as mais recentes ferramentas e frameworks para criar produtos robustos e de alto desempenho.

Experiência do Usuário Aprimorada: Entendemos a importância da experiência do usuário. Criamos interfaces intuitivas e atraentes que não apenas impressionam visualmente, mas também proporcionam uma jornada fácil e envolvente para seus usuários.

(ja foi) Compromisso com a Excelência: A excelência é a nossa norma. Buscamos constantemente aperfeiçoar nossas habilidades, processos e produtos para garantir que ofereçamos serviços que superem as expectativas. */

const Diferencial = () => {
  return (
    <div className='diferencial-container'>
        <h1 className='h1-diferencial-title'>Diferencial da CodePro</h1>
        <div className='cards-container-diferencial'>
            <div className='card-one'>
                <img className='monitor-img' src={MonitorImg} alt="monitor-img" />
                <span>Cada projeto é único, e personalizamos nossas soluções para atender às necessidades específicas de cada cliente. Seja um site elegante, um aplicativo funcional ou uma combinação dos dois, nossa equipe se dedica a entregar resultados excepcionais.</span>
            </div> 

            <div className='card-two'>
                <img className='mobile-img' src={Mobile} alt="mobile-png" />
                <span>Ficamos à frente das últimas tendências tecnológicas para garantir que suas soluções digitais não apenas atendam aos padrões atuais, mas também estejam prontas para o futuro.Utilizamos as mais recentes ferramentas e frameworks para criar produtos robustos</span>
            </div>

            <div className='card-three'>
                <img className='alvo-img' src={Alvo} alt="alvo-png" />
                <span>A excelência é a nossa norma. Buscamos constantemente aperfeiçoar nossas habilidades, processos e produtos para garantir que ofereçamos serviços que superem as expectativas.Entendemos a importância da experiência do usuário, e com isso, criamos interfaces intuitivas e atraentes!</span>
            </div>
        </div>
    </div>
  )
}

export default Diferencial