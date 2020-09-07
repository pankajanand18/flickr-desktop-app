import React, { useState } from 'react';
// import Home from '../components/Home';
import NavBar from '../components/NavBar';
import DropBar from '../components/DropBar';
import ImagePreviewList from '../components/ImagePreviewList';
import { LocalImageFile } from '../components/Interaces';
import DbService from '../db/dbservice';
import Image from '../db/Models/ImageP';

let dbService: DbService;

export default function HomePage() {
  const [imageList, setImageList] = useState([
    {
      name: 'default image',
      path: '/Users/pankaj.anand/Downloads/50183477607_c41564ff75_w.jpg'
    }
  ]);

  const addImages = (images: LocalImageFile[], saveToDb = true): void => {
    images.forEach(file => {
      console.log(file.path);
    });
    setImageList(prevState => {
      console.log('Inside the state');
      prevState.forEach(value => {
        console.log(value);
      });

      if (saveToDb) {
        dbService
          .saveImages(images)
          .then(() => {
            console.log('success for creating images');
            return false;
          })
          .catch(error => {
            console.log(error);
          });
      }
      return prevState.concat(images);
    });
  };

  function getLocalImages(images: Image[] | undefined): LocalImageFile[] {
    if (images === undefined) {
      console.log('empty array');
      return [];
    }
    return images.map(image => {
      return {
        name: image.name,
        path: image.path,
        description: image.description,
        lastModified: null
      };
    });
  }

  const init = async (): Promise<void> => {
    if (dbService === undefined) {
      dbService = new DbService();
      await dbService.setDbConnection();
      const imagesFromDb = await dbService.getImagesToPublish();
      addImages(getLocalImages(imagesFromDb), false);
      console.log('data loaded');
    } else {
      console.log('db service already initialized');
    }
  };
  setTimeout(() => {
    init();
  }, 5);

  return (
    <div>
      <NavBar />
      <DropBar callback={addImages} />
      <ImagePreviewList images={imageList} />
    </div>
  );
}
