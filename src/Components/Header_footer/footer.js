import React from 'react';
import '../../Resources/css/app.css'

import { CityLogo } from '../UI/icons'

const Footer = () => {
    return (
    <footer className="bck_blue">
        <div className="footer_logo">
            <CityLogo
                width="70px"
                height="70px"
                link={true}
                linkTo="/"
            />
        </div> 
        <div className="footer_discl">
            Manchester city 2020.All rights reserved.

        </div>

    </footer>
    );
};

export default Footer;