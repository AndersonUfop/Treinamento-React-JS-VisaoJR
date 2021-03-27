import Head from 'next/head';

import { Input } from '../components/Input';
import { MdAttachMoney } from 'react-icons/md';


import SelectBox from '../components/SelectBox';
import Toggle from '../components/Toggle';
import DatePickerInput from '../components/DatePickerInput';
import { InputWithoutIcon } from '../components/InputWithoutIcon';
import BackPage from '../components/BackPage';

import { Container, Form, ButtonSave } from '../styles/pages/Expenses';
import { useRef } from 'react';
import { FormHandles } from '@unform/core';

export default function Expenses() {
    const formRef = useRef<FormHandles>(null);

    return (
        <Container>
            <Head>
                <title>Cadastrar Despesa | MyFinances</title>  
            </Head>
            <BackPage/>
            
            <Form ref={formRef} onSubmit={() => {}}>
                <h1>Cadastrar Despesa</h1>
                <Input 
                    name="Valor" 
                    type="text"
                    title="Valor"
                >
                    <MdAttachMoney size={24}/>
                </Input>

                <InputWithoutIcon 
                    name="description" 
                    type="text"
                    title="Descrição"/>

                <DatePickerInput/>

                <SelectBox/>

                <Toggle text="Pago?"/>
                <Toggle text="Custo fixo?"/>

                <ButtonSave>
                    <button type="submit">
                        Salvar
                    </button>
                </ButtonSave>
                
            </Form>

        </Container>
    );
    
}