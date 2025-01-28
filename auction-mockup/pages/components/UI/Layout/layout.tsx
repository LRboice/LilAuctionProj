import React from 'react';  
import TopBar from '../TopBar/topBar'; 
import MiniBar from '../MiniBar/miniBar';
import styles from './Layout.module.scss';

const Layout: React.FC<{ children: React.ReactNode}> = ({children}) => {

    return( // cards will need a method to be handled dynamically 
        <div className={styles.layout}>
            <div className={styles.main}>
                <TopBar/> 
                <MiniBar/> 
                <div className={styles.content}/> 
            </div> 
        </div>
    ); 
}; 

export default Layout; 