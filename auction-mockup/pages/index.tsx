import React, {useEffect, useState} from 'react'; 
import Layout from "./components/UI/Layout/layout";
import Card from './components/UI/Card/card'; 
import styles from '../styles/globals.module.scss'; 

const SplashPage: React.FC = () => { 
  return (
    <Layout > 
      <div>
         <h1 className={styles.title}>Featured Items</h1>
         <Card
          title = "test"
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          link = "piclist.ai"
          linkText= 'clickMe'
         />
      </div>  
    </Layout>

  );
}; 
export default SplashPage; 
