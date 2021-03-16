import styles from '../styles/components/Listing.module.css';

interface ListingProps {
    date: string;
    title: string;
    description: string
    price: string;
}

export function Listing({
    date,
    title,
    description,
    price
}: ListingProps) {
    return (
        <div className={styles.containerTransactions}>
            <div className={styles.date}>
                <small>{date}</small>
            </div>
            <div className={styles.transaction}>
                <div className={styles.description}>
                    <strong>{title}</strong>
                    <small>{description}</small>
                </div>
                <div className={styles.price}>
                    <strong>R$ {price}</strong>
                </div>
            </div>
        </div>
    );
}