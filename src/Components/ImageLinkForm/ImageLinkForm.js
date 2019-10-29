import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className='white f3 i tc'>{'This is a Brain that detects faces on a picture'}</p>
            
            <div className='form-contn'>
                <div className='form center pa4 br3 shadow-6'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}></input>
                    <div className='w-20 submit grow f4 link ph3 pv1 dib white bg-light-purple' onClick={onSubmit} type='button'>{'Detect'}</div>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;