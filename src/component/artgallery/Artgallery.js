import React from 'react';
import './Artgallery.css'

const Artgallery = () => {
    return (
        <div>
            <div className='gallery-text'>
                <h1>Ther Art Gallery</h1>
            </div>

            <div className='art-header'>
                <nav>
                    <a href='/all'>All</a>
                    <a href='/oil-paint'>Oil Paint</a>
                    <a href='/rubber-paint'>Rubber Paint</a>
                    <a href='/brushes'>Brushes</a>
                    <a href='/abstract'>Abstract</a>
                    <a href='/realistic'>Realistic</a>
                </nav>

            </div>

            <div className='gallery'>
                <div className='big-stretch'>
                    <img src='1.jpg' alt=''></img>
                </div>
                <div className='v-stretch'>
                    <img src='2.jpg' alt=''></img>
                </div>
                <div>
                    <img src='3.jpg' alt=''></img>
                </div >
                <div className="h-stretch">
                    <img src='5.jfif' alt=''></img>
                </div>
                <div className='big-stretch'>
                    <img src='6.jfif' alt=''></img>
                </div>
                <div className='h-stretch'>
                    <img src='7.jpg' alt=''></img>
                </div>
                <div>
                    <img src='8.jfif' alt=''></img>
                </div>
                <div>
                    <img src='9.jfif' alt=''></img>
                </div>
                <div className='v-stretch'>
                    <img src='10.jpg' alt=''></img>
                </div>
                <div className='big-stretch'>
                    <img src='3.jpg' alt=''></img>
                </div>

            </div>
            <div className='see-more'>
                <button className='btn'>See More</button>
            </div>
        </div>







    );
};

export default Artgallery;