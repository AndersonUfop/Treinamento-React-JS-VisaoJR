import Head from 'next/head';
import { useRef } from 'react';

import { Button } from '../components/Button';
import { InputWithoutIcon } from '../components/InputWithoutIcon';

import { FormHandles } from '@unform/core';

import { Container, Form } from '../styles/pages/Login';

export default function login() {
    const formRef = useRef<FormHandles>(null);

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            
            <div className="logo">
                <img src="/assets/logo.png"/>
            </div>
            
            <Form ref={formRef} onSubmit={() => {}}>
                <InputWithoutIcon 
                    name="email" 
                    title="E-mail"
                    type="email"
                    placeholder="Digite seu e-mail"
                />
                <InputWithoutIcon 
                    name="password" 
                    title="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                />
                
                    <Button name="ENTRAR" color="#263C9E"/>
                

                <div className="footer">
                    <a href="#">
                        <span>Esqueci minha senha</span>
                    </a>

                    <a href="newUser">
                        <span>Cadastrar</span>
                    </a>
                    
                </div>
            </Form>
            

        </Container>
       
    );
}