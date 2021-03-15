import styles from '../styles/components/Card.module.css';


export function BalanceCard() {
    
    return (
        <div className={styles.cardContainer}>
            <small>SALDO ATUAL</small>
            <strong>R$ 120.000, 00</strong>
        </div>
    );
}