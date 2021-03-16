import styles from '../styles/components/Card.module.css';

interface CardProps {
    title: string;
    value: string;
    color: string;
    borderColor: string;
}

export function Card({
    title,
    value,
    color,
    borderColor
    
}: CardProps) {

   /*  const style = {
        color: {color},
        fontSize: 200
      }; */

    return (
        


        <div className={styles.cardContainer} style={{
            background: `${color}`, borderColor: `${borderColor}`
        }}
        >
            <small>{title}</small>
            <strong>R$ {value}</strong>
        </div>
    );
}