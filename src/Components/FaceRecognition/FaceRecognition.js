import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            
                <img src={imageUrl} alt='' width='500px' height='auto'/>

        </div>
    );
}

export default FaceRecognition;