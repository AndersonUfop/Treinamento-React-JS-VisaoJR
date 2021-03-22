interface InputProps {
    name: string;
    title: string;
   children: ReactNode;
}


import styles from '../styles/components/Input.module.css';
import {MdAttachMoney} from 'react-icons/md';
import { ReactNode } from 'react';

export function Input({
    name,
    title,
    children
}: InputProps ) {
    return (
       <div className={styles.inputContainer}>
           <label className={styles.legend}>{title}</label>
           <div className={styles.inputContent}>
           {children}
           <input className={styles.inputText} type="text" name={name}/>
            
           </div>
           
           
        </div>
    )
}