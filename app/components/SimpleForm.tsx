import React from 'react';

type SimpleFormState = {
  firstName: string;
  lastName: string;
};
export default class SimpleForm extends React.Component<{}, SimpleFormState> {
  constructor() {
    super({});
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value
    } as any);
  }

  render() {
    const { handleChange: handleChange1, state } = this;
    return (
      <div>
        <div>
          <input
            name="firstName"
            value={state.firstName}
            onChange={handleChange1}
          />
          <input
            name="lastName"
            value={state.lastName}
            onChange={handleChange1}
          />
        </div>
        <div>
          {state.firstName}
          {state.lastName}
        </div>
      </div>
    );
  }
}
