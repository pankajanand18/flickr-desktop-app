import React from 'react';
import { LocalImageFile } from './Interaces';

type Props = {
  images?: LocalImageFile[];
};
const ImagePreviewList: React.FC<Props> = ({ images }) => {
  console.log('returned ');
  const valueToReturn = images ? (
    <div className="preview_list">
      {images.map(image => (
        <div key={image.path}>
          <img src={image.path} alt="data to copy" />
          <div>
            <span>{image.name}</span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div />
  );
  return valueToReturn;
};

export default ImagePreviewList;
