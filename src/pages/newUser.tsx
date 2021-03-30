import Head from 'next/head';
import { ChangeEvent, useRef, useState, FormEvent } from 'react';

import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Button } from '../components/Button';
import { InputWithoutIcon } from '../components/InputWithoutIcon';

import { FormHandles } from '@unform/core';

import { Container, Form } from '../styles/pages/newUser';

export default function newUser() {
    const formRef = useRef<FormHandles>(null);

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
    })

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });

    }

    async function handleSubmit(event: FormEvent) {
       event.preventDefault;
       let users = JSON.parse(localStorage.getItem('users')) || []
       
       const { name, email, password } = formData;
       const data = new FormData();

       data.append('name', name);
       data.append('email', email);
       data.append('password', password);

       const Newuser = [name, email, password];
       users.push(Newuser);
       localStorage.setItem('users', JSON.stringify(users));
       alert('Usuário cadastrado com sucesso');
       /* window.location.href = '/login'; */

       // Retornar itens do localStorage
       const items = JSON.parse(localStorage.getItem('users'));
       console.log(items);

       // Buscar item no localStorage
       for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.key(i));
       }
       


    }

    return (
        <Container>
            <Head>
                <title>Novo Usuário</title>
            </Head>
            
            <h1>Novo Usuário</h1>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <InputWithoutIcon 
                    name="name" 
                    title="Nome"
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={handleInputChange}
                    
                    
                />
                <InputWithoutIcon 
                    name="email" 
                    title="E-mail"
                    type="email"
                    placeholder="Digite seu e-mail"
                    onChange={handleInputChange}
                />

                <InputWithoutIcon 
                    name="password" 
                    title="Senha"
                    type="password"
                    placeholder="Digite uma senha"
                    onChange={handleInputChange}
                />

                <InputWithoutIcon 
                    name="password-confirmation" 
                    title="Senha"
                    type="password"
                    placeholder="Confirme sua senha"
                    onChange={handleInputChange}
                />
                
                <Button name="SALVAR" type="submit" color="#263C9E"/>
                

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