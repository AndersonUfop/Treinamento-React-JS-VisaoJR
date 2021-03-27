import styles from '../styles/components/InputWithoutIcon.module.css';

interface InputProps {
    name: string;
    title: string;
    type: string;
    placeholder?: string;
    
}


export function InputWithoutIcon({
    name,
    title,
    type,
    placeholder,
}: InputProps ) {
    return (
       <div className={styles.inputContainer}>
           <label className={styles.legend}>{title}</label>
           <div className={styles.inputContent}>
           
           <input 
            className={styles.inputText} 
            type={type} 
            name={name}
            placeholder={placeholder}
            />
            
           </div>
           
           
        </div>
    )
}