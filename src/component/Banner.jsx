// Banner.js
import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import defaultimg from '../resources/markus-winkler-aId-xYRTlEc-unsplash.jpg'

export default function Banner({ backgroundImage, width, height, category, title, author,link, date,showpara}) {
  let backgroundImg;
  if(!backgroundImage){
    backgroundImg=defaultimg
  }
  else{
    backgroundImg=`url(${backgroundImage})`
  }
  const bannerStyle = {
    backgroundImage: backgroundImg,
    width: `${width}%`,
    height: `${height}px`,

  };

  return (
    
    <>
    <a href={link}>
    <div className="banner" style={bannerStyle}>
      <div></div>
      <div className="banner-ctn">
        <span className="banner-tocken">{category}</span>
        <h2>{title}</h2>
        
        {showpara && <p><span>{author} -</span><span> &nbsp;{date}</span></p> }
      </div>
    </div>
    </a>
    </>
  );
}
