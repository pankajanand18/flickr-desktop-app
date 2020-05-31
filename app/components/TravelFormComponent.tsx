import React from 'react';
import { TravelFormState } from './learn/Interfaces';

export default function TravelFormComponent(props: TravelFormState) {
  const { submitHandler, handleChange, handleChangeForOption, data } = props;
  return (
    <form name="travel form">
      <input
        name="firstName"
        value={data.firstName}
        onChange={handleChange}
        placeholder="first name"
      />
      <input
        name="lastName"
        value={data.lastName}
        onChange={handleChange}
        placeholder="last name"
      />
      <br />
      <label htmlFor="gender">
        <input
          type="radio"
          name="gender"
          value="male"
          checked={data.gender === 'male'}
          onChange={handleChange}
        />
        Male
      </label>
      <label htmlFor="gender">
        <input
          type="radio"
          name="gender"
          value="female"
          checked={data.gender === 'female'}
          onChange={handleChange}
        />
        Female
      </label>
      <br />

      <select
        value={data.destination}
        name="destination"
        onChange={handleChangeForOption}
      >
        <option value="north pole">North pole</option>
        <option value="south pole">South pole</option>
        <option value="India">India</option>
      </select>
      <button type="submit" onClick={submitHandler}>
        {' '}
        Submit
      </button>
    </form>
  );
}
