import React from 'react'
import linkedin from '../../images/redes/linkedin.svg';
import github from '../../images/redes/github.svg';

export const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p>Desarrollado por <strong>Estefano Figueroa Vargas</strong></p>
            </div>
            <div className="redes">
                <a href="https://github.com/estefanoo"><img src={github} alt=""/></a>
                <a href="https://www.linkedin.com/in/estefanofigueroa/"><img src={linkedin} alt=""/></a>
            </div>
        </div>
    )
}
