import React, { useEffect, useState } from 'react';
import {Button, ImageList} from '@mui/material'

import ImageCard from './components/ImageCard';
import Constants from './Constants';
import useFetchImages from './hooks/useFetchImages';
import TopContainer from './components/TopContainer';
import { useSelector } from 'react-redux';

function App() {

  const {data, loading, error, refetch} = useFetchImages(Constants.apiURL);

  const [images, setImages] = useState<any>([]);

  const removeImage = (id: string) => {
    const newImages = images.filter((item: any) => item.id !== id);
    setImages(newImages);
  }

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  function onSearch() {
    refetch();
    if(data) {
      setImages(data.concat(images))
    }    
  }
  
  useEffect(() => {
    if(!loading) {
      setImages(data)
    }
    window.addEventListener('resize', () => handleWindowWidth())
    return () => {
      window.removeEventListener('resize', () => handleWindowWidth())
    }
  }, [loading]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh"
      }}
    > 
      <TopContainer onSearch={onSearch} />
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        {
          error ? <p>{`${error}`}</p> : (
            <ImageList cols={windowWidth < 640 ? 1 : windowWidth < 950 ? 2 : 3} gap={8} style={{overflow: "visible"}}>
              {
                !loading && images.map((image: any) => (
                  <div key={image.id} className='w-full flex items-center justify-center'>
                    <ImageCard url={image.url} removeImage={removeImage} id={image.id} windowWidth={windowWidth} />
                  </div>
                )) 
              }
            </ImageList>
          )
        }
      </div>
    </div>
  );
}

export default App;
