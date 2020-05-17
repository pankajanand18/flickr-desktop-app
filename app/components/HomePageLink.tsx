import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../constants/routes.json';

export default function HomePageLink() {
  return (
    <div className={styles.backButton} data-tid="backButton">
      <Link to={routes.HOME}>
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
    </div>
  );
}
