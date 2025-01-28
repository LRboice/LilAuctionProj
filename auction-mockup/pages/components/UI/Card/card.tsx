import React from "react";
import { useRouter } from "next/router";
import styles from './card.module.scss'; 


interface CardProps {
    title: string;
    description: string;
    link: string;
    linkText: string;
}

// add handler to redirect button press to passed link
const Card: React.FC<CardProps> = ( { title, description, link, linkText }) => { 
    const router = useRouter();  
    return (
        
        <div className = {styles.card}> 
            <div>
                <h1 className = {styles.title}>{title}</h1>
            </div> 
            
            <div className = {styles.content}>

                <p> {description} </p>
                <img src="../../../../../daJokahBaybee.png"  width = "30%" height = "20%"></img>
             </div> 
            <button className= {styles.button} >Check it out</button>
           
        </div>    
    ); 
}; 
export default Card; 