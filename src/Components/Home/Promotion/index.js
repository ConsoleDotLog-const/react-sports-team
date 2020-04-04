import React, { Component } from 'react';
import PromotionAnimation from './animations'

const Promotion = () => {
    return (
        <div className="promotion_wrapper"
            style={{
                background:'#ffffff'
            }}
        >
            <div className="container">
                <PromotionAnimation/>
            </div>
            
        </div>
    );
};

export default Promotion;