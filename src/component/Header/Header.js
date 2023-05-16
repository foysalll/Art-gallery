import React from 'react';
import './Header.css'
import { AiOutlineArrowDown } from 'react-icons/ai'
const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <p className='logo-text'>D.F</p>
                    {/* < AiOutlineArrowDown size='30px' />  */}

                </div>
                <div>
                    <nav>
                        <a href='/shop'>Home</a>
                        <a href='/orders'>Gallery</a>
                        <a href='/inventory'>About</a>
                        <a href='/about'>Event</a>
                    </nav>
                </div>
                <div className='contact-nav'>
                    <a href='/contact-us' >Contact us</a>
                </div>



            </div>
        </div>
    );
};

export default Header;