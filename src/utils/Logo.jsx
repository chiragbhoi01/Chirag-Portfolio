import React from 'react';
import portfolioLogo from '../assets/image/chiragLogo.png';

function Logo({ width = "50px" }) {
    return (
        <div>
            <img src={portfolioLogo} alt="Portfolio-Logo" width={width} />
        </div>
    );
}

export default Logo;
