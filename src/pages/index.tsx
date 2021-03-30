import Head from 'next/head';
import { useEffect, useState } from 'react';

import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { IncomesAndExpenses } from '../components/IncomesAndExpenses';
import { Listing } from '../components/Listing';
import { SideBar } from '../components/Sidebar';

import { BiTrendingUp, BiTrendingDown} from 'react-icons/bi';

import { Container, Balance, Transactions, Footer } from '../styles/pages/Home';

interface IIncomes {
  id: string;
  price: Number;
  description: string;
  date: string;
  category: string;
  type: string;
}


export default function Home() {
  const [ incomesAndExpenses, setIncomesAndExpenses ] = useState<IIncomes[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/IncomesAndExpenses').then(response => {
      response.json().then(data => {
        setIncomesAndExpenses(data);
      })
    })
  });


  return (
      <Container>
        <Head>
          <title>Dashboard | MyFinances</title>
        </Head>
        <SideBar/>
        <Balance>
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
        </Balance>

        <section className="incomesAndExpenses">
          <IncomesAndExpenses name="Receitas:" price="2.800,00"/>
          <IncomesAndExpenses name="Despesas:" price="10.000,00"/>
          <hr/>
        </section>

        <Transactions>
          <h2>
            ABRIL 2021
          </h2>
          {incomesAndExpenses.map(incomesAndExpenses => {
            return (
              <Listing
              key={incomesAndExpenses.id}
              date={incomesAndExpenses.date}
              title={incomesAndExpenses.description}
              description={incomesAndExpenses.category}
              price={incomesAndExpenses.price}
          />
            )
          })}


          
          

          {/* <Listing
            date="19/03/2021"
            title="Recebimento de salário"
            description="Receitas | Salário"
            price="5.000,00"
          /> */}

        </Transactions>
        <hr/>
        <Footer>
        <a href="recip">
          <Button name="CADASTRAR RECEITA" color="#263C9E">
            <BiTrendingUp size={32}/>
          </Button>
        </a>

        <a href="expenses">
          <Button name="CADASTRAR DESPESA" color="#3E4858">
            <BiTrendingDown size={32}/>
          </Button>
        </a>
        </Footer>
        
      </Container>

       
  )
}
