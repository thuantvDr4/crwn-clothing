import React from 'react';
import './Home.Styles.scss';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className='direct-menu'>
       
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='sub-title'>Shop now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JACKETS</h1>
                    <span className='sub-title'>Shop now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SNEAKERS</h1>
                    <span className='sub-title'>Shop now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span className='sub-title'>Shop now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MENS</h1>
                    <span className='sub-title'>Shop now</span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomePage;

