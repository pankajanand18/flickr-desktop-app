/* eslint-disable react/destructuring-assignment */
import React from 'react';

type DefaultState = {
  name: string;
  age: number;
};
export default class StateTest extends React.Component<{}, DefaultState> {
  constructor() {
    super({});
    this.state = {
      name: 'BillGate',
      age: 45
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState: DefaultState) => {
      return { age: prevState.age + 1 };
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
        <div>
          <button type="button" onClick={this.handleClick}>
            Increase age
          </button>
        </div>
      </div>
    );
  }
}
