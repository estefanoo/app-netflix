import React, { useState, useEffect } from 'react';

import { ContainerCards } from './ContainerCards';
import Tmdb from '../database/Tmdb';

export const MoviesNetflix = () => {
  
  const [movieListGenres, setMovieListGenres] = useState([])

  useEffect(()=>{
    const loadAll = async () =>{
      let list = await Tmdb.getHomeList();
      setMovieListGenres(list);
    }
    loadAll();
  }, []);

  return (
    <>
    { movieListGenres.map((movies,index) => (
      
      <ContainerCards 
        key={index}
        moviesList={movies}
      />
      
      ))
    }  
  </>
  )
}
