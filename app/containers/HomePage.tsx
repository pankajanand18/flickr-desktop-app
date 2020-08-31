import React, { useState } from 'react';
// import Home from '../components/Home';
import NavBar from '../components/NavBar';
import DropBar from '../components/DropBar';
import ImagePreviewList from '../components/ImagePreviewList';
import { LocalImage } from '../components/Interaces';

export default function HomePage() {
  const [imageList, setImageList] = useState([
    {
      name: 'default image',
      path: '/Users/pankaj.anand/Downloads/50183477607_c41564ff75_w.jpg'
    }
  ]);
  const addImages = (images: LocalImage[]): void => {
    images.forEach(file => {
      console.log(file.path);
    });

    // const reader = new FileReader();
    // reader.onloadend = (ev): void => {
    //   const image = new Image();
    //   if (ev.target) {
    //     if (typeof ev.target.result === 'string') {
    //       image.src = ev.target.result;
    //     }
    //   }
    // };
    // reader.readAsArrayBuffer(images[0]);
    setImageList(prevState => {
      console.log('Inside the state');
      prevState.forEach(value => {
        console.log(value);
      });
      return prevState.concat(images);
    });
  };
  return (
    <div>
      <NavBar />
      <DropBar callback={addImages} />
      <ImagePreviewList images={imageList} />
    </div>
  );
}
