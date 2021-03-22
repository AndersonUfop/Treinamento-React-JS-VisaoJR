import React from 'react';
import Select from 'react-select';

import styles from '../styles/components/SelectBox.module.css';

const options = [
    { value: "Alimentação", label: "Alimentação"},
    { value: "Moradia", label: "Moradia"},
    { value: "Educação", label: "Educação"},
    { value: "Saúde", label: "Saúde"},
    { value: "Lazer", label: "Lazer"},
    { value: "Salário", label: "Salário"},
    { value: "Outros", label: "Outros"},
]

export default function SelectBox() {
    return (
        <div className={styles.selectContainer}>
            <label className={styles.labelContainer}>Categoria</label>
            <Select  
                className={styles.selectBox} 
                options={options} 
                placeholder="Selecione uma opção"
            />
        </div>  
        
    )
}