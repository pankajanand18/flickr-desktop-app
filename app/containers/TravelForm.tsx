import React, { FormEvent } from 'react';
import { TravelFormDataState } from '../components/learn/Interfaces';
import TravelFormComponent from '../components/TravelFormComponent';

export default class TravelForm extends React.Component<
  {},
  TravelFormDataState
> {
  constructor() {
    super({});
    this.state = {
      age: 0,
      firstName: '',
      gender: '',
      lastName: '',
      destination: ''
    };
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.currentTarget;
    if (type !== 'checkbox') {
      this.setState({ [name]: value } as any);
    } else {
      this.setState({ [name]: checked } as any);
    }
  };

  handleChangeForOption = (e: React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value } as any);
  };

  submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <TravelFormComponent
        data={this.state}
        handleChange={this.handleChange}
        handleChangeForOption={this.handleChangeForOption}
        submitHandler={this.submitForm}
      />
    );
  }
}
