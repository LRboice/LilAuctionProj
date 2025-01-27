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
            <h1 className={styles.logo}>BB-Wars Auction House</h1>
            <div className={styles.actions}> 
                <search > 
                    <form>
                        <input name="searchBar" id="searchBar"placeholder='search...'/>
                    </form>
                </search>
                <button className={styles.logoutButton} onClick={handleAuth}>
                    Signup/Login
                </button>
                <button className={styles.logoutButton} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}; 

export default TopBar; 