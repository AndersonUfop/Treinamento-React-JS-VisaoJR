import styles from '../styles/components/IncomesAndExpenses.module.css';

interface IncomesAndExpensesProps {
  name: string;
  price: string;
}

export function IncomesAndExpenses({
  name,
  price
}: IncomesAndExpensesProps) {
    return (
        <div className={styles.incomesAndExpensesContainer}>
          <div className={styles.incomes}>
            <small>{name}</small>
            <strong>R$ {price}</strong>
          </div>
          
        </div>
    );
}