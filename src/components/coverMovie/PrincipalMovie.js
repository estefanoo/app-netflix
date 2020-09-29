import React, { useState, useEffect } from 'react';

import Tmdb from '../database/Tmdb';

export const PrincipalMovie = () => {

    const [movieRandom, setMovieRandom] = useState([])

    useEffect(()=>{
        const loadAll = async () =>{

        const randomNum = Math.floor(Math.random()* 4);
        let list = await Tmdb.getHomeList();
        let movie = list[randomNum].items.results[Math.floor(Math.random() * 5)];
        setMovieRandom(movie);
      }
      loadAll();
      
    }, []);

    const {backdrop_path, original_name, original_title, overview} = movieRandom;
    
    return (
        <div className="principalMovie"
            style={{
                backgroundImage: backdrop_path ? `url(https://image.tmdb.org/t/p/original${backdrop_path})` : 'none'
            }}
        >
            <div className="principalMovie-info">
                    <h2>{original_name || original_title}</h2>
                    {overview && overview.length > 210 
                        ?
                        <p>{overview.substring(0,210)}...Ver Más</p>
                        :
                        <p>{overview}</p>
                    }

                    <div className="principalMovie-buttons">
                        <button className="principalMovie-button principalMovie-button-play">► Reproducir</button>
                        <button className="principalMovie-button principalMovie-button-info">+ Informacion</button>
                    </div>
            </div>
        </div>
    )
}
