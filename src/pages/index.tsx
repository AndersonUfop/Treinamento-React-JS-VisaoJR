import Head from 'next/head';
import { BalanceCard } from '../components/BalanceCard';
import { Button } from '../components/Button';
import { IncomesAndExpenses } from '../components/IncomesAndExpenses';
import { Listing } from '../components/Listing';
import { MonthBalanceCard } from '../components/MonthBalanceCard';
import { SideBar } from '../components/Sidebar';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
      <main className={styles.container}>
        <Head>
          <title>Dashboard | MyFinances</title>
        </Head>
        <SideBar/>
        <section className={styles.balance}>
          <BalanceCard />
          <MonthBalanceCard />  
        </section>
        <section className={styles.incomesAndExpenses}>
          <IncomesAndExpenses/>
          <hr/>
        </section>
        <section className={styles.transactions}>
          <Listing/>
          <Listing/>
          <hr/>
        </section>
        <Button/>
        <Button/>
      </main>

       
  )
}
