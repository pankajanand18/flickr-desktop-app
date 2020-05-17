import React from 'react';
import NavBar from './NavBar';
import contactFactory from './factories/ContactCardFactory';
import ContactCard from './ContactCard';
import styles from '../Home.css';

export default function MainApp() {
  const contactCardList = contactFactory.map(value => (
    <ContactCard key={value.id} contact={value} />
  ));
  return (
    <div className={styles.container} data-tid="container">
      <NavBar />
      <div className="todo-list" />
      {contactCardList}
      {/* <Footer /> */}
    </div>
  );
}
