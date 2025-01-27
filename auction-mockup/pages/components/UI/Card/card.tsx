import React from "react";
import { useRouter } from "next/router";
import styles from './card.module.scss'; 

const Card: React.FC = () => { 
    const router = useRouter();  
    return ( 
        <div className = {styles.card}> 
            <div className = {styles.content}>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                   
             </div>
             <button className= {styles.button}/> 
        </div>    
    ); 
}; 
export default Card; 