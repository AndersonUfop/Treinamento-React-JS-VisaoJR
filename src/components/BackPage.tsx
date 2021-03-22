import { BiArrowBack } from 'react-icons/bi';

import styles from '../styles/components/BackPage.module.css';

export default function BackPage() {
    return (
        <div className={styles.container}>
            <a href="/">
                <BiArrowBack size={32} color="#FFF" />
            </a> 
        </div>
    );
}