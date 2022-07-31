import React from 'react';
import FOF from '../../images/fofError.jpg';

const NotFoundPage = (props) => {

    const style = {
        width: '100%',
        height: 'calc(100vh - 200px)',
        backgroundColor: '#f5f5f5',
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={style}>
            <div style={{
                width: 'auto',
                height: '350px'
            }}>
                <img src={FOF} alt="" style={{
                    width: 'auto',
                    height: '100%'
                }} />
            </div>
        </div>
    );
};

export default NotFoundPage;