import { CardContainer } from '../styles/components/Card';

interface CardProps {
    title: string;
    value: string;
    color: string;
    borderColor: string;
}

export function Card({
    title,
    value,
    color,
    borderColor
    
}: CardProps) {

    return (
        


        <CardContainer style={{
            background: `${color}`, borderColor: `${borderColor}`
        }}
        >
            <small>{title}</small>
            <strong>R$ {value}</strong>
        </CardContainer>
    );
}