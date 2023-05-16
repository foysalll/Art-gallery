import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <img src='logo.jpg' alt=''></img>
            <div >
                <nav className='nav'>
                    <a href='/shop'>Home</a>
                    <a href='/orders'>Gallery</a>
                    <a href='/inventory'>About</a>
                    <a href='/about'>Event</a>
                </nav>

            </div>
            <div className='line'>

            </div>
            <div >
                <p className='copyright'>2022.All rights reserved</p>
            </div>

        </div>
    );
};

export default Footer;