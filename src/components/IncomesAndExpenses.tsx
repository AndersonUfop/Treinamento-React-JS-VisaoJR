import styles from '../styles/components/IncomesAndExpenses.module.css';

export function IncomesAndExpenses() {
    return (
        <div className={styles.incomesAndExpensesContainer}>
          <div className={styles.incomes}>
            <small>Receitas:</small>
            <strong>R$ 2.800,00</strong>
          </div>

          <div className={styles.expanses}>
            <small>Despesas:</small>
            <strong>R$ 2.800,00</strong>
          </div>
          
        </div>
    );
}