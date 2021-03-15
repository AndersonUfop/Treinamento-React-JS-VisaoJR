import styles from '../styles/components/Button.module.css';

import { BiTrendingUp, BiTrendingDown} from 'react-icons/bi';
export function Button() {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button}>
                <BiTrendingUp size={32}/>
                <strong>CADASTRAR RECEITA</strong> 
            </button>
        </div>
    );
}