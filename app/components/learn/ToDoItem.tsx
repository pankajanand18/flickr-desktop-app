/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ToDoItemState } from './Interfaces';

type DefaultToDoItem = {
  value: ToDoItemState;
  handler: (id: number) => void;
};
class ToDoItem extends React.Component<DefaultToDoItem> {
  constructor(item: DefaultToDoItem) {
    super(item);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.value.taskName);
  }

  render(): JSX.Element {
    console.log('rendering item with ', this.props.value.id);
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onClick={() => this.props.handler(this.props.value.id)}
          checked={this.props.value.selected}
        />
        <p>{this.props.value.taskName}</p>
      </div>
    );
  }
}

ToDoItem.defaultProps = {
  value: {
    taskName: 'loading..',
    selected: false
  },
  handler: (_id: number) => {}
};

export default ToDoItem;
