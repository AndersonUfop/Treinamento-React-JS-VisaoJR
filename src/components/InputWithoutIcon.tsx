import styles from '../styles/components/InputWithoutIcon.module.css';

interface InputProps {
    name: string;
    title: string;
    type: string;
}


export function InputWithoutIcon({
    name,
    title,
    type,
}: InputProps ) {
    return (
       <div className={styles.inputContainer}>
           <label className={styles.legend}>{title}</label>
           <div className={styles.inputContent}>
           
           <input className={styles.inputText} type={type} name={name}/>
            
           </div>
           
           
        </div>
    )
}