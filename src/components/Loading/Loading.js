import React from 'react';
import Logo from '../../images/logo.png';
import './Loading.css';

const componentName = (props) => {
    return (
        <div className='d-flex justify-content-center loading_logo'>
            <div className='img_container'>
                <img src={Logo} alt="" />
            </div>
        </div>
    );
};

export default componentName;