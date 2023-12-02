// Banner.js
import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

export default function Banner({ backgroundImage, width, height, category, title, author, date,showpara}) {
  const bannerStyle = {
    backgroundImage: `url('${backgroundImage}')`,
    width: `${width}%`,
    height: `${height}px`,

  };

  return (
    
    <>
    <div className="banner" style={bannerStyle}>
      <div></div>
      <div className="banner-ctn">
        <span className="banner-tocken">{category}</span>
        <h2>{title}</h2>
        
        {showpara && <p><span>{author} -</span><span> &nbsp;{date}</span></p> }
      </div>
    </div>
    </>
  );
}
