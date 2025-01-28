import React from 'react';
import styles from './miniBar.module.scss';

const MiniBar: React.FC = () => {
    return (
        <div className={styles.miniBar}> 
            <button className={styles.button}> Categories </button>
            <button className={styles.button}> Model Specific </button>
            <button className={styles.button}> Shipping </button> 
            <button className={styles.button}> Local Events </button>
            <button className={styles.button}> Checkout </button>
            <button className={styles.button}> About Us </button>
            <button className={styles.button}> User Settings </button>
        </div>
    ); 

}; 

export default MiniBar; 
