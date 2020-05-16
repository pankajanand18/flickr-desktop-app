import React from 'react';
// import Footer from '../footer/footer';
import NavBar from './NavBar';
// import ToDoItem from './ToDoItem';

export default function MainApp() {
  return (
    <div>
      <NavBar />
      <div className="todo-list" />

      {/* <Footer /> */}
    </div>
  );
}
