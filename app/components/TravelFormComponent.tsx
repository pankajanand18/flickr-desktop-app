import React from 'react';
import { TravelFormState } from './learn/Interfaces';

function TravelFormComponent(props: TravelFormState) {
  const { submitHandler, handleChange, handleChangeForOption, data } = props;
  const {
    destination = '',
    gender = '',
    lastName = '',
    firstName = '',
    age = 0
  } = data;
  return (
    <form name="travel form" onSubmit={submitHandler}>
      <input
        name="firstName"
        value={firstName}
        onChange={handleChange}
        placeholder="first name"
      />
      <input
        name="lastName"
        value={lastName}
        onChange={handleChange}
        placeholder="last name"
      />
      <br />
      <label htmlFor="age">
        <input
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="Age"
        />
        Age
      </label>
      <br />
      <label htmlFor="gender">
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleChange}
        />
        Male
      </label>

      <label htmlFor="gender">
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleChange}
        />
        Female
      </label>
      <br />

      <select
        value={destination}
        name="destination"
        onChange={handleChangeForOption}
      >
        <option value="north pole">North pole</option>
        <option value="south pole">South pole</option>
        <option value="India">India</option>
      </select>
      <button type="submit"> Submit</button>
    </form>
  );
}

export default TravelFormComponent;
