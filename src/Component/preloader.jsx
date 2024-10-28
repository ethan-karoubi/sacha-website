// Preloader.js
import React, { useEffect, useState } from 'react';

const Preloader = () => {
    return (
        <div id="preloader">
            <div id="preloader-status">
                <div className="preloader-position loader">
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
