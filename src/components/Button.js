import {useState} from 'react';
import styles from '../styles/Calculator.module.css';

function Button({children, size = 'medium', onClick, variant = 'default'}) {
return (
    <button
    onClick={onClick}
    className={`${styles.button} ${styles[size]} ${styles[variant]}`}>
        {children.label}
    </button>
)
}

export default Button;
