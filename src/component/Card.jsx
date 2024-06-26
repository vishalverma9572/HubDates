import React from 'react';
import './Card.css';
import defaultimg from '../resources/markus-winkler-aId-xYRTlEc-unsplash.jpg'

export default function Card({ imageUrl, cardTitle, author, date, detail, hoverColor, width,height, showpara, link }) {
  if(!imageUrl){
    imageUrl=defaultimg
  }
  function changeColorOnHover(event) {
    event.currentTarget.querySelector('.myh3').style.color = hoverColor;
    event.currentTarget.querySelector(' img').style.width = '100.5%';
  }

  function revertColor(event) {
    event.currentTarget.querySelector('.myh3').style.color = "black";
    event.currentTarget.querySelector(' img').style.width = '100%';
  }

  const cardWidth = {
    width: `${width}%`
    
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div onMouseOver={changeColorOnHover} onMouseOut={revertColor} className="card" style={cardWidth}>
        <img src={imageUrl} alt="" style={{ height: `${height}px` }} />
        <h3 className='myh3'>{cardTitle}</h3>
        <p className='author'>
          <span style={{ fontWeight: 700 }}>{author} -</span>
          <span>&nbsp;{date}</span>
        </p>
        {showpara && <p>{detail}</p>}
      </div>
    </a>
  );
}
