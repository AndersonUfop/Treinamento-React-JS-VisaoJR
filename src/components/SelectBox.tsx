import React from 'react';
import Select from 'react-select';

import { Container, Label } from '../styles/components/SelectBox';

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
        <Container>
            <Label>Categoria</Label>
            <Select  
                className="select" 
                options={options} 
                placeholder="Selecione uma opção"
            />
        </Container>  
        
    )
}