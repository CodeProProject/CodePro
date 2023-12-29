import React, {useState} from 'react'
import './Contato.css'
import ImgContato from '../../assets/fundoOrcamento.jpg';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Textarea
  } from '@chakra-ui/react'

const Contato = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [assunto, setAssunto] = useState(""); 
  return (
    <div className='contato-container'>
        <div className='img-container'>
            <img className='img-contato' src={ImgContato} alt="contato-container" />
        </div>

        <div className='form-container'>
            <h1 className='h1-title-form'>Entre em contato</h1>
            <div className='formulario'>
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
                        onChange={(e)=> {setAssunto(e.target.value)}}
                    />
                </div>

                <button className='button-enviar'>Enviar</button>
            </div>
        </div>
    </div>
  )
}

export default Contato
