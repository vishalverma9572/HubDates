import React from 'react';
import './Horicard.css';
import defaultimg from '../resources/markus-winkler-aId-xYRTlEc-unsplash.jpg'

export default function Card({ imageUrl, cardTitle, author, date, detail, hoverColor, width,lwid,rwid,link, showpara }) {
  if (!imageUrl) {
    imageUrl = defaultimg
  }
  // Function to change color on hover
  function changeColorOnHover(event) {
    // Access the target element using event.currentTarget
    event.currentTarget.querySelector('.myh3').style.color = `${hoverColor}`;
    event.currentTarget.querySelector('.leftside img').style.width = '101%';
  }

  // Function to revert to the default color when not hovered
  function revertColor(event) {
    // Access the target element using event.currentTarget
    event.currentTarget.querySelector('.myh3').style.color = "black";
    event.currentTarget.querySelector('.leftside img').style.width = '100%';
  }

  const cardWidth = {
    width: `${width}%`
  };
  const LWidth = {
    width: `${lwid}%`
  };
  const RWidth = {
    width: `${rwid}%`
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div  className="horicard" onMouseOver={changeColorOnHover} onMouseOut={revertColor}  style={cardWidth}>
      <div className='leftside'style={LWidth}><img src={imageUrl} alt="" /></div>
      <div className='rightside' style={RWidth}><h3 className='myh3'>{cardTitle}</h3>
      <p className='author'>
        <span style={{ fontWeight: 700 }}>{author} -</span>
        <span>&nbsp;{date}</span>
      </p>
      {showpara && <p>{detail}</p>}
      </div>
    </div>
    </a>
  );
}
