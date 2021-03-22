import styles from '../styles/components/InputWithoutIcon.module.css';

interface InputProps {
    name: string;
    title: string;
}


export function InputWithoutIcon({
    name,
    title,
}: InputProps ) {
    return (
       <div className={styles.inputContainer}>
           <label className={styles.legend}>{title}</label>
           <div className={styles.inputContent}>
           
           <input className={styles.inputText} type="text" name={name}/>
            
           </div>
           
           
        </div>
    )
}