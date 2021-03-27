import React, { useState } from 'react';

import { DragSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';

import { Container, Label } from '../styles/components/Toggle';

interface ToogleProps {
    text: string;
}

export default function Toggle({
    text
}: ToogleProps ) {
    const [checked, setChecked ] = useState(false);

    return (
        <Container>
            <Label>{text}</Label>
            <DragSwitch
                
                onColor="#1263E6"
                className="toogle" 
                checked={checked} 
                onChange={(e) => {
                    setChecked(e)
                }}
            />
        </Container>
        
    );
}