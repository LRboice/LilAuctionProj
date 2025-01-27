import React from 'react';  
import TopBar from '../TopBar/topBar';
import Card from '../Card/card';
import styles from './Layout.module.scss';

const Layout: React.FC<{ children: React.ReactNode}> = ({children}) => {

    return(
        <div className={styles.layout}>
            <div className={styles.main}>
                <TopBar/> 
                <div className={styles.content}>
                    <div>
                        <h1 className={styles.title}>Featured</h1>
                        <Card/>
                    </div>
                    <div>
                        <h1 className={styles.title}>Hot Items</h1>
                        <Card/>
                    </div>

                </div>
            </div> 
        </div>
    ); 
}; 

export default Layout; 