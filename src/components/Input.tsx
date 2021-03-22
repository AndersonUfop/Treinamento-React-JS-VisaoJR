interface InputProps {
    name: string;
    title: string;
    children: ReactNode;
    type;
}


import styles from '../styles/components/Input.module.css';
import {MdAttachMoney} from 'react-icons/md';
import { ReactNode } from 'react';

export function Input({
    name,
    title,
    type,
    children
}: InputProps ) {
    return (
       <div className={styles.inputContainer}>
           <label className={styles.legend}>{title}</label>
           <div className={styles.inputContent}>
           {children}
           <input className={styles.inputText} type={type} name={name}/>
            
           </div>
           
           
        </div>
    )
}