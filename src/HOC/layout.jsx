import React from 'react';
import Header from '../Components/Header_footer/header'


const layout = (props) => {
    return (
        <div>
          <Header/>
            {props.children}
        
        </div>
    );
};

export default layout;