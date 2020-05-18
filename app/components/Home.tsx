import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import StateTest from './learn/StateTest';

export default function Home() {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Welcome Home</h2>
      <Link to={routes.COUNTER}>Go to Counter</Link>
      <br />
      <Link to={routes.CONTACTS}>Go to Contacts</Link>
      <br />
      <Link to={routes.TODO}>TODO App</Link>
      <StateTest />
    </div>
  );
}
