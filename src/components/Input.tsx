interface InputProps {
    name: string;
    title: string;
    children: ReactNode;
    type: string;
    placeholder?: string;
}

import {MdAttachMoney} from 'react-icons/md';
import { ReactNode } from 'react';


import { Container, Legend, InputContent } from '../styles/components/Input';

export function Input({
    name,
    title,
    type,
    placeholder,
    children
}: InputProps ) {
    return (
       <Container>
           <Legend>{title}</Legend>
           <InputContent>
           {children}
           <input 
            type={type} 
            name={name}
            placeholder={placeholder}
            />
            
           </InputContent>
           
           
        </Container>
    )
}