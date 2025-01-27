import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Topbar.module.scss'; 

const TopBar: React.FC = () =>  {

    const router = useRouter(); 
    const handleAuth = () => {
        console.log("login clicked");
    }; 
    const handleLogout = () =>{
        console.log("logout clicked"); 
    }; 

    return (
        <div className={styles.topBar}>
            <div className={styles.actions}> 
            <h1 className={styles.logo}>BB-Wars Auction House</h1>
            </div>  
                <search className = {styles.searchBar}> 
                    <form  className={styles.searchForm}>
                        <input name="searchBar" id="searchBar"placeholder='search...'/>
                    </form>
                </search>  
                <div>
                    <button className={styles.button} onClick={handleAuth}>
                        Signup/Login
                    </button>  
                    <button className={styles.button} onClick={handleLogout}>
                        Logout
                    </button>  
                </div>
        </div>
    );
}; 

export default TopBar; 