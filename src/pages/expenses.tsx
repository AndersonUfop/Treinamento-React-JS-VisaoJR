import Head from 'next/head';

import { Input } from '../components/Input';
import { MdAttachMoney } from 'react-icons/md';


import SelectBox from '../components/SelectBox';
import Toggle from '../components/Toggle';
import DatePickerInput from '../components/DatePickerInput';
import { InputWithoutIcon } from '../components/InputWithoutIcon';
import BackPage from '../components/BackPage';

import styles from '../styles/pages/Expenses.module.css';

export default function Expenses() {
    return (
        <main className={styles.container}>
            <Head>
                <title>Cadastrar Despesa | MyFinances</title>  
            </Head>
            <BackPage/>
            
            <form className={styles.formContainer}>
                <h1>Cadastrar Despesa</h1>
                <Input name="Valor" title="Valor">
                    <MdAttachMoney size={24}/>
                </Input>

                <InputWithoutIcon name="description" title="Descrição"/>

                <DatePickerInput/>

                <SelectBox/>

                <Toggle text="Pago?"/>
                <Toggle text="Custo fixo?"/>

                <div className={styles.buttonSave}>
                    <button type="submit">
                        Salvar
                    </button>
                </div>
                



            </form>
            
            
        </main>
    );
    
}