import Head from 'next/head';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { IncomesAndExpenses } from '../components/IncomesAndExpenses';
import { Listing } from '../components/Listing';
import { SideBar } from '../components/Sidebar';

import { BiTrendingUp, BiTrendingDown} from 'react-icons/bi';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
      <main className={styles.container}>
        <Head>
          <title>Dashboard | MyFinances</title>
        </Head>
        <SideBar/>
        <section className={styles.balance}>
          <Card 
            title="SALDO ATUAL" 
            value="120.000,00" 
            color="#EDFC92"
            borderColor="#CDED08" />

          <Card 
            title="BALANÇO MENSAL" 
            value="2.000,00" 
            color="#ACF4A0"
            borderColor="#15EF38"  
          />
        </section>
        <section className={styles.incomesAndExpenses}>
          <IncomesAndExpenses name="Receitas:" price="2.800,00"/>
          <IncomesAndExpenses name="Despesas:" price="10.000,00"/>
          <hr/>
        </section>
        <section className={styles.transactions}>
          <h2 className={styles.title}>
            MARÇO
          </h2>
          <Listing
            date="15/03/2021"
            title="Almoço com a família"
            description="Despesas | Alimentação"
            price="25,00"
          />

          <Listing
            date="19/03/2021"
            title="Recebimento de salário"
            description="Receitas | Salário"
            price="5.000,00"
          />

        </section>
        <hr/>
        <section className={styles.footer}>
          <Button name="Cadastrar receita" color="#263C9E">
            <BiTrendingUp size={32}/>
          </Button>
          <Button name="CADASTRAR DESPESA" color="#3E4858">
            <BiTrendingDown size={32}/>
          </Button>
        </section>
        
      </main>

       
  )
}
