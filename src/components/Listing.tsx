import styles from '../styles/components/Listing.module.css';

export function Listing() {
    return (
        <div className={styles.containerTransactions}>
            <div className={styles.date}>
                <small>20/04/2021</small>
            </div>
            <div className={styles.transaction}>
                <div className={styles.description}>
                    <strong>Almoço com a família</strong>
                    <small>Despesas | Alimentação</small>
                </div>
                <div className={styles.price}>
                    <strong>R$ 25,00</strong>
                </div>
            </div>
        </div>
    );
}