import React, { useState } from 'react';

import { DragSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';

import styles from '../styles/components/Toggle.module.css';

interface ToogleProps {
    text: string;
}

export default function Toggle({
    text
}: ToogleProps ) {
    const [checked, setChecked ] = useState(false);

    return (
        <div className={styles.toggleContainer}>
            <label className={styles.labelContainer}>{text}</label>
            <DragSwitch
                
                onColor="#1263E6"
                className={styles.toogle} 
                checked={checked} 
                onChange={(e) => {
                    setChecked(e)
                }}
            />
        </div>
        
    );
}