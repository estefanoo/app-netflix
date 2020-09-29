import React from 'react';

export const BigCardInfoMovie = ({movieSelected, closeBox}) => {

    const {backdrop_path, original_name, original_title, overview} = movieSelected;

    return (
        <div className="bigCard animate__animated animate__fadeInDown animate__faster" 
            
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`
            }}
        >
            <div className="bigCard-info">
                    <h2>{original_name || original_title}</h2>
                    {overview && overview.length > 210 
                        ?
                        <p>{overview.substring(0,200)}...Ver Más</p>
                        :
                        <p>{overview}</p>
                    }

                    <div className="bigCard-buttons">
                        <button className="bigCard-button bigCard-button-play">► Reproducir</button>
                        <button className="bigCard-button bigCard-button-info">+ Informacion</button>
                    </div>
            </div>
            <div 
                className="bigCard-close"
                onClick={closeBox}
            >
                <h3>X</h3>
            </div>
        </div>
    )
}
