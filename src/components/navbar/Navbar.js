import React from 'react';
import iconSearch from '../../images/navbar/search.svg';
import iconGift from '../../images/navbar/gift.svg';
import iconBell from '../../images/navbar/bell.svg';
import iconUser from '../../images/navbar/icon.jpg';
import logo from '../../images/navbar/netflix_logo.png';

export const Navbar = () => {


    return (
        <div className="navbar" style={{background: "linear-gradient(to top, #141414, #060606)"}}>
            <div className="navbar__logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="navbar__explorar">
                <a href="/">Explorar ▾</a>
            </div>
            <div className="navbar__items1">
                <a href="/">Inicio</a>
                <a href="/">Programas</a>
                <a href="/">Peliculas</a>
                <a href="/">Mas recientes</a>
                <a href="/">Mi lista</a>
            </div>
            <div className="navbar__items2">
            <img className="icon-search" src={iconSearch} alt="search-icon"/>
            <a href="/">NIÑOS</a>
            <img className="icon-gift" src={iconGift} alt="gift-icon"/>
            <img className="icon-bell" src={iconBell} alt="bell-icon"/>
            <img className="icon-user" src={iconUser} alt="user"/>
            </div>
        </div>
    )
}
