import React from 'react';

import styles from '../styles/components/DatePickerInput.module.css';

import { MdDateRange } from 'react-icons/md';

export default function DatePickerInput() {
    return (
        <div className={styles.dateContainer}>
            <label className={styles.labelContainer}>Data</label>
            <input className={styles.dateInput} type="date"/>
        </div>
    );
}