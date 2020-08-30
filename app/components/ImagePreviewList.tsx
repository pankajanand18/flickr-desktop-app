import React from 'react';
import { LocalImage } from './Interaces';

type Props = {
  images?: LocalImage[];
};
const ImagePreviewList: React.FC<Props> = ({ images }) => {
  console.log('returned ');
  const valueToReturn = images ? (
    <div>
      {images.map(image => (
        <div key={image.path}>
          <img src={image.path} height="300" width="300" alt="data to copy" />
        </div>
      ))}
    </div>
  ) : (
    <div />
  );
  return valueToReturn;
};

export default ImagePreviewList;
