import { Container, Legend, InputContent} from '../styles/components/InputWithoutIcon';

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
       <Container>
           <Legend>{title}</Legend>
           <InputContent>
           
           <input 
            type={type} 
            name={name}
            placeholder={placeholder}
            />
            
           </InputContent>
           
           
        </Container>
    )
}