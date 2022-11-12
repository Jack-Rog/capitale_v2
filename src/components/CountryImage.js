import React from 'react';
import shape from "E:/Coding/capitale_v2/src/all/af/vector.svg";
import './../App.css';
//NOTE: Use doulbe elipsis for previous directory

function CountryImage() {
    return(
        <div className='Image-Container'>
            <img src={shape} className="Country-Outline" alt="Country Outline" />
        </div>
    );  
}

export default CountryImage;