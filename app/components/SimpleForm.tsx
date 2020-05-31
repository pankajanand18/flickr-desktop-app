import React from 'react';

type SimpleFormState = {
  firstName: string;
  lastName: string;
  isFriendly: boolean;
  gender: string;
  favColor: string;
  description: string;
};
export default class SimpleForm extends React.Component<{}, SimpleFormState> {
  constructor() {
    super({});
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: true,
      gender: '',
      favColor: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNew = this.handleChangeNew.bind(this);
    this.handleChangeForTextArea = this.handleChangeForTextArea.bind(this);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.currentTarget;

    if (type !== 'checkbox') {
      this.setState({ [name]: value } as any);
    } else {
      this.setState({ [name]: checked } as any);
    }
  }

  handleChangeNew(e: React.FormEvent<HTMLOptionElement>) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value } as any);
  }

  handleChangeForTextArea(e: React.FormEvent<HTMLTextAreaElement>) {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value } as any);
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
            placeholder="first name"
          />
        </div>
        <input
          name="lastName"
          value={state.lastName}
          onChange={handleChange1}
          placeholder="last name"
        />

        <div>
          {state.firstName}
          {state.lastName}
        </div>
        <textarea
          name="description"
          value={state.description}
          onChange={this.handleChangeForTextArea}
        />
        <br />
        <label htmlFor="isFriendly">
          <input
            type="checkbox"
            name="isFriendly"
            checked={state.isFriendly}
            onChange={this.handleChange}
          />
          is Friendly ?
        </label>
        <div>
          <label htmlFor="gender">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={state.gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label htmlFor="gender">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={state.gender === 'female'}
              onChange={this.handleChange}
            />
            Female
          </label>
          <h2>{`You are a${state.gender}`}</h2>
        </div>
        <br />
        <label htmlFor="favColor">{`Your favorite color ${state.favColor}`}</label>
        <select
          name="favColor"
          value={state.favColor}
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
      </div>
    );
  }
}
