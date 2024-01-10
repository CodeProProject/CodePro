import React, {useState, useRef} from 'react'
import './Contato.css'
import ImgContato from '../../assets/fundoOrcamento.jpg';
import emailjs from '@emailjs/browser';
import {toast } from 'react-toastify';

import {
    FormLabel,
    Input,
    Textarea
  } from '@chakra-ui/react'

const Contato = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [assunto, setAssunto] = useState(""); 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
        const templateParams = {
          to_name: nome, // Nome do destinatário, se aplicável
          from_name: nome,
          from_email: email,
          from_number: number,
          message: `Assunto da solicitação: ${assunto}`
        };
      
        emailjs
          .send('service_g69m46e', 'template_uu9rgi6', templateParams, 'T14O-HawSKPIr4_hN')
          .then(
            (result) => {
                const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1300));
                        toast.promise(
                            resolveAfter3Sec,
                            {
                            pending: 'Enviando e-mail',
                            success: 'E-mail enviado com sucesso!',
                            error: 'Erro ao enviar o e-mail, tente novamente mais tarde'
                            }
                        )
                setTimeout(() => {
                    /*toast.success('E-mail enviado com sucesso. Entraremos em contato em breve!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        }); */
                        

                        setEmail('');
                        setAssunto('');
                        setNumber('');
                        setNome('');
                }, 2000);

              
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
      
      

  return (
    <div id="contato" className='contato-container'>
        <div className='img-container'>
            <img className='img-contato' src={ImgContato} alt="contato-container" />
        </div>

        <div className='form-container'>
            <h1 className='h1-title-form'>Entre em contato</h1>
            <form ref={form} onSubmit={sendEmail} className='formulario'>
                <div className='form-nome'>
                    <FormLabel 
                        className='label-nome' 
                        display="inline-block"
                        marginBottom='2px'
                    >
                        Nome completo
                    </FormLabel>

                    <Input 
                        bg="#d7e1f0"
                        w="100%" 
                        type='text'
                        placeholder='Digite seu nome'
                        value={nome}
                        name="user_name"
                        onChange={(e)=> {setNome(e.target.value)}}
                    />
                </div>

                <div className='form-email'>
                    <FormLabel className='label-email' marginBottom='0'>E-mail</FormLabel>
                    <Input 
                        bg="#d7e1f0" 
                        w="100%" 
                        display="flex" 
                        type='email' 
                        placeholder='Digite seu e-mail'
                        value={email}
                        name="user_email"
                        onChange={(e)=> {setEmail(e.target.value)}}
                    />
                </div>

                <div className='form-number'>
                    <FormLabel className='label-number' marginBottom='0'>Número de telefone</FormLabel>
                    <Input 
                        bg="#d7e1f0" 
                        w="100%"  
                        type='text'
                        placeholder='(+55) DDD 98241-0516'
                        value={number}
                        name="user_number"
                        onChange={(e)=> {setNumber(e.target.value)}}
                    />
                </div>

                <div className='form-assunto'>
                    <FormLabel className='label-assunto' marginBottom='0'>Assunto</FormLabel>

                    <Textarea 
                        bg="#d7e1f0" 
                        w="100%"
                        placeholder='Digite o assunto'
                        value={assunto}
                        name="message"
                        
                        onChange={(e)=> {setAssunto(e.target.value)}}
                    />
                </div>

                <button className='button-enviar'>Enviar</button>
            </form>
        </div>

        
    </div>
  )
}

export default Contato
