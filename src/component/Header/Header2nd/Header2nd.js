import React from 'react';
import logo from '../../../img/images.jfif'
import './Header2nd.css'

const Header2nd = () => {
    return (
        <div className='hero'>
            <div className='Recovery-part'>
                <h6>The Art Revolution!</h6>
                <h1><span className='recovery'>Recovery</span> through Resonance</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <button>Explore More</button>


            </div>

            <div className='Dark-flower'>
                <img src={logo} alt=""></img>
                <h2>"The Dark Flower Base"</h2>
                <div className='caption'>
                    <p>Artist:Gorge(22years)</p>
                    <p>Todays Feeling:Happy,Cheefull</p>
                    <p>Struggles With:Drinking</p>
                    <p>Sobriety:Old Timer</p>

                </div>



            </div>

        </div>
    );
};

export default Header2nd;