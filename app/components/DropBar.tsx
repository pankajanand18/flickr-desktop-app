/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { LocalImage } from './Interaces';
import imageTypeFilter from '../utils/ImageTypeFilter';

type Props = {
  callback: (images: LocalImage[]) => void;
};
const DropBar: React.FC<Props> = ({ callback }: Props) => {
  const onDrop = useCallback(acceptedFiles => {
    // filter for only image extensions
    const results = imageTypeFilter(acceptedFiles);
    callback(results);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag n drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default DropBar;
