import React from 'react';  
import TopBar from '../TopBar/topBar';
import Card from '../Card/card';
import MiniBar from '../MiniBar/miniBar';
import styles from './Layout.module.scss';

const Layout: React.FC<{ children: React.ReactNode}> = ({children}) => {

    return(
        <div className={styles.layout}>
            <div className={styles.main}>
                <TopBar/> 
                <MiniBar/>
                <div className={styles.content}>
                    <section>
                        <Card/>
                        <Card/>
                        <Card/>
                    </section>

                </div>
            </div> 
        </div>
    ); 
}; 

export default Layout; 