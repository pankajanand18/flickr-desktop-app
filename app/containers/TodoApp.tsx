/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import todoItems from '../components/learn/factories/ToDoItems';
import ToDoItem from '../components/learn/ToDoItem';
import { ToDoItemState } from '../components/learn/Interfaces';

type ToDoAppState = {
  toDoItems: ToDoItemState[];
};

export default class TodoApp extends React.Component<{}, ToDoAppState> {
  constructor() {
    super({});
    this.state = {
      toDoItems: todoItems
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id: number) {
    this.setState(prevState => {
      const updatedToOos = prevState.toDoItems.map(todo => {
        if (todo.id === id) {
          todo.selected = !todo.selected;
        }
        return todo;
      });
      return {
        toDoItems: updatedToOos
      };
    });
  }

  render(): JSX.Element {
    console.log('App state changed');
    const todoItemList = this.state.toDoItems.map(value => (
      <ToDoItem key={value.id} value={value} handler={this.handleChange} />
    ));
    return <div>{todoItemList}</div>;
  }
}
