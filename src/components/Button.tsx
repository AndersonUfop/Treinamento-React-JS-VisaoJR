import { ReactNode } from 'react';

import { ButtonContainer } from '../styles/components/Button';

interface ButtonProps {
    children?: ReactNode;
    name: string;
    color: string;
}

export function Button({
    name,
    children,
    color
}: ButtonProps) {
    return (
        <ButtonContainer>
            <button className="button" style={{background: `${color}`}}>
                {children}
                <strong>{name}</strong> 
            </button>
        </ButtonContainer>
    );
}