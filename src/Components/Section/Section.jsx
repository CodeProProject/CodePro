import React from 'react'
import "./Section.css";
import designOtimizar from '../../assets/designOtimizar.png'

//texto para por no diferencial 
/*O Que Nos Diferencia:

Personalização Excepcional: Cada projeto é único, e personalizamos nossas soluções para atender às necessidades específicas de cada cliente. Seja um site elegante, um aplicativo funcional ou uma combinação dos dois, nossa equipe se dedica a entregar resultados excepcionais.

Tecnologia de Ponta: Ficamos à frente das últimas tendências tecnológicas para garantir que suas soluções digitais não apenas atendam aos padrões atuais, mas também estejam prontas para o futuro. Utilizamos as mais recentes ferramentas e frameworks para criar produtos robustos e de alto desempenho.

Experiência do Usuário Aprimorada: Entendemos a importância da experiência do usuário. Criamos interfaces intuitivas e atraentes que não apenas impressionam visualmente, mas também proporcionam uma jornada fácil e envolvente para seus usuários.

Compromisso com a Excelência: A excelência é a nossa norma. Buscamos constantemente aperfeiçoar nossas habilidades, processos e produtos para garantir que ofereçamos serviços que superem as expectativas. */

const Section = () => {
  return (
    <div id='sobre' className='section-container'>
        <div className='container-sobre'>
            <img src={designOtimizar} className='designExperiencia' />
        </div>

        <div className='info-texto-container'>
            <h3>A CodePro é uma empresa especializada no desenvolvimento de sites e aplicativos sob medida.</h3>

            <p>Nossa abordagem centrada no cliente e nossa paixão pela tecnologia nos destacam como uma escolha líder para aqueles que buscam uma presença digital marcante. Com uma equipe de especialistas criativos e engenheiros de software altamente qualificados, estamos comprometidos em oferecer produtos digitais excepcionais que impulsionam o sucesso dos nossos clientes.</p>

            
        </div>
        
    </div>
  )
}

export default Section