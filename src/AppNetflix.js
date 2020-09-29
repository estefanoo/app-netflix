import React from 'react';

// styles CSS
import './styles/general.css';
import './styles/navbar/navbar.css';
import './styles/moviesSlides/containerCards.css';
import './styles/moviesSlides/bigCardInfoMovie.css';
import './styles/coverMovie/principalMovie.css';
import './styles/footer/footer.css';

// components
import { Navbar } from './components/navbar/Navbar';
import { PrincipalMovie } from './components/coverMovie/PrincipalMovie';
import { MoviesNetflix } from './components/moviesSlides/MoviesNetflix';
import { Footer } from './components/footer/Footer';


export const AppNetflix = () => {    

    return (
        <div className="contenedor">
            <Navbar/>
            <PrincipalMovie/>
            <MoviesNetflix/>
            <Footer/>
        </div>
    )
}
