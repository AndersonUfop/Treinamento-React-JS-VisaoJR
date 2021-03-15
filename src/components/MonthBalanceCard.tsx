import styles from '../styles/components/MonthBalanceCard.module.css';


export function MonthBalanceCard() {
    
    return (
        <div className={styles.cardContainer}>
            <small>SALDO ATUAL</small>
            <strong>R$ 120.000, 00</strong>
        </div>
    );
}