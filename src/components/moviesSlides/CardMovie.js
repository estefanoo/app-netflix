import React from 'react'

export const CardMovie = ({movies, handleInfoMovie}) => {
    return (
        <div  
            className="card"
            onClick={()=>handleInfoMovie(movies)}
        >
            <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} alt="imagen"/>
        </div>
    )
}
