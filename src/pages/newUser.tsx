import Head from 'next/head';

import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Button } from '../components/Button';
import { InputWithoutIcon } from '../components/InputWithoutIcon';
import styles from '../styles/pages/newUser.module.css';

export default function newUser() {
    return (
        <main className={styles.container}>
            <Head>
                <title>Novo Usuário</title>
            </Head>
            
            <h1>Novo Usuário</h1>

            <form className={styles.formContainer}>
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

                <div className={styles.footer}>
                    <a href="login">
                        <span> 
                        <BiArrowBack/> Voltar</span>
                    </a>
                </div>

            </form>
            

        </main>
       
    );
}