import React from 'react'; 
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
    const handleListing = () =>{
        console.log("creating listing");
    }; 
    const handleFAQ = () =>{
        console.log('FAQ clicked'); 
    }; 
    return ( 
        <div className={styles.topBar}> 
            <h1 className={styles.logo}>BB-Wars Auction House</h1> 
                <search className = {styles.searchBar}> 
                    <form  className={styles.searchForm}>
                        <input name="searchBar" id="searchBar"placeholder='search...'/>
                    </form>
                </search>  
                <div>
                    <a className={styles.link} onClick={handleListing}>
                        Submit a listing
                    </a>

                    <a className={styles.link} onClick={handleFAQ}>
                        How does it work?
                    </a>
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