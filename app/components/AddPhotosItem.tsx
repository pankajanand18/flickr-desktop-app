import React from 'react';
import { LocalImage } from './Interaces';

import imageTypeFilter from '../utils/ImageTypeFilter';

type Props = {
  callback: (images: LocalImage[]) => void;
};
const AddPhotosItem: React.FC<Props> = ({ callback }: Props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const list: File[] = [];

    if (event.currentTarget.files) {
      for (let i = 0; i < event.currentTarget.files.length; ) {
        if (event.currentTarget.files[i] != null) {
          list.push(event.currentTarget.files[i]);
        }
      }
      callback(imageTypeFilter(list));
    }
  };

  return (
    <div>
      <label htmlFor="photo">
        Add photo
        <input
          type="file"
          id="photo"
          name="photo_input"
          accept="image/png, image/jpeg"
          onChange={onChange}
          multiple
        />
      </label>
    </div>
  );
};

export default AddPhotosItem;
