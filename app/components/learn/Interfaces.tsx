import React from 'react';

export interface Contact {
  imageUrl?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export type ToDoItemState = {
  id: number;
  taskName: string;
  selected: boolean;
};
export type TravelFormDataState = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  destination: string;
};

export type TravelFormState = {
  data: TravelFormDataState;
  handleChangeForOption: (e: React.FormEvent<HTMLSelectElement>) => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLButtonElement>) => void;
};
