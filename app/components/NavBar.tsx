import React, { useState } from 'react';
import AddPhotosItem from './AddPhotosItem';

const NavBar: React.FC = () => {
  const [state, setState] = useState({
    photo: ''
  });

  const { photo } = state;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setState(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
    console.log(state.photo); // returns nothing
    if (event.currentTarget.files) {
      console.log(event.currentTarget.files[0]);
    }
  };
  return (
    <div>
      <AddPhotosItem callback={onChange} />
    </div>
  );
};

export default NavBar;
