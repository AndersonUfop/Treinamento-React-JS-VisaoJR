import React from 'react';

import { Container } from '../styles/components/DatePickerInput';


export default function DatePickerInput() {
    return (
        <Container>
            <label>Data</label>
            <input 
            name="date"
            type="date"
            />
        </Container>
    );
}