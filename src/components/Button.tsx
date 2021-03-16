import styles from '../styles/components/Button.module.css';


import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    name: string;
    color: string;
}

export function Button({
    name,
    children,
    color
}: ButtonProps) {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button} style={{background: `${color}`}}>
                {children}
                <strong>{name}</strong> 
            </button>
        </div>
    );
}