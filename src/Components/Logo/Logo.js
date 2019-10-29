import React from "react";
import Tilt from 'react-tilt';
import brain from '../Logo/brain.jpg';

const Logo  = (props) => {
    return (
        <div className="ma4 mt0">
            <div>
            <Tilt className="Tilt br2 shadow-3" options={{ max : 70 }} style={{ height: 75, width: 100 }} >
                <div className="Tilt-inner"><img className='brain' src={brain} alt=''/></div>
            </Tilt>
            </div>
        </div>
    );
}

export default Logo;