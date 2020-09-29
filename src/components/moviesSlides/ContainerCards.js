import React, { useState } from 'react';
import  SimpleLeft from '../../images/containerCards/simple-left.svg';
import  SimpleRight from '../../images/containerCards/simple-right.svg';
import { BigCardInfoMovie } from './BigCardInfoMovie';
import { CardMovie } from './CardMovie';


export const ContainerCards = ({moviesList}) => {
    
    const [marginX, setMarginX] = useState(0);
    const [movieSelect, setMovieSelect] = useState([]);
    const [toggleCardInfo, setToggleCardInfo] = useState(false)

    const handleLeftArrow = () =>{
        let x = marginX + Math.round(window.innerWidth / 2);
        if( x > 0 ){
        x = 0
        }
        setMarginX(x);
    }

    const handleRightArrow = () =>{
        let x = marginX - Math.round(window.innerWidth / 2);
        let listWidth = moviesList.items.results.length * 220;

        if( x < (window.innerWidth - listWidth) ){
        x = (window.innerWidth - listWidth) - 80;
        }
        setMarginX(x);
    }

    const handleInfoMovie = (movie) =>{
        setMovieSelect(movie);
        setToggleCardInfo(true);
    }   

    const closeBox = () =>{
        setToggleCardInfo(false);
    }   

    return (
     <>
        <div className="container-cards">
            
            <h2 className="genres-name">{moviesList.title}</h2>

            <div className="arrow-prev" onClick={handleLeftArrow}>
              <img src={SimpleLeft} alt="arrow"/>
            </div>

            <div className="arrow-next" onClick={handleRightArrow}>
                <img src={SimpleRight} alt="arrow"/>
            </div>

            <div 
                className="cards" 
                style={{
                    marginLeft:marginX, 
                    width:moviesList.items.results.length * 220
                }}
            >
                
                {
                    moviesList.items.results.map(movies => (
                        <CardMovie
                            key={movies.id} 
                            movies={movies}
                            handleInfoMovie={handleInfoMovie}
                        />
                    ))
                }

            </div> 

            { toggleCardInfo && <BigCardInfoMovie movieSelected={movieSelect} closeBox={closeBox}/> }

        </div>        
        
    </>
    )
}
