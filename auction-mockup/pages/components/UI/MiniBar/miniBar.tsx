import React from 'react';
import { useRouter } from 'next/router';
import styles from './miniBar.module.scss';

const MiniBar: React.FC = () => {
    const router = useRouter();  


    return (
        <div className={styles.miniBar}> 
            <button className={styles.button} onClick={() => router.push('/Categories')}> Categories </button>
            <button className={styles.button} onClick={() => router.push('/Model')}> Model Specific </button>
            <button className={styles.button} onClick={() => router.push('/Shipping')}> Shipping </button> 
            <button className={styles.button} onClick={() => router.push('/Events')}> Local Events </button>
            <button className={styles.button} onClick={() => router.push('/Checkout')}> Checkout </button>
            <button className={styles.button} onClick={() => router.push('/About')}> About Us </button>
            <button className={styles.button} onClick={() => router.push('/Settings')}> User Settings </button>
        </div>
    ); 

}; 

export default MiniBar; 
