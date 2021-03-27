import Head from 'next/head';
import { useRef } from 'react';

import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Button } from '../components/Button';
import { InputWithoutIcon } from '../components/InputWithoutIcon';

import { FormHandles } from '@unform/core';

import { Container, Form } from '../styles/pages/newUser';

export default function newUser() {
    const formRef = useRef<FormHandles>(null);

    return (
        <Container>
            <Head>
                <title>Novo Usuário</title>
            </Head>
            
            <h1>Novo Usuário</h1>

            <Form ref={formRef} onSubmit={() => {}}>
                <InputWithoutIcon 
                    name="name" 
                    title="Nome"
                    type="text"
                    placeholder="Digite seu nome"
                    
                />
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
                    placeholder="Digite uma senha"
                />

                <InputWithoutIcon 
                    name="password-confirmation" 
                    title="Senha"
                    type="password"
                    placeholder="Confirme sua senha"
                />
                
                <Button name="SALVAR" color="#263C9E"/>

                <div className="footer">
                    <a href="login">
                        <BiArrowBack size={12}/> 
                        <span> Voltar</span>
                    </a>
                </div>

            </Form>
            

        </Container>
       
    );
}