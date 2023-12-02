import React from 'react';
import './Card.css';

export default function Card({ imageUrl, cardTitle, author, date, detail, hoverColor, width, showpara }) {

  
  function changeColorOnHover(event) {
    // Access the target element using event.currentTarget
    event.currentTarget.querySelector('.myh3').style.color = hoverColor;
  }

  // Function to revert to the default color when not hovered
  function revertColor(event) {
    // Access the target element using event.currentTarget
    event.currentTarget.querySelector('.myh3').style.color = "black";
  }

  const cardWidth = {
    width: `${width}%`
  };

  return (
    <div onMouseOver={changeColorOnHover} onMouseOut={revertColor} className="card" style={cardWidth}>
      <img src={imageUrl} alt="" />
      <h3 className='myh3'>{cardTitle}</h3>
      <p className='author'>
        <span style={{ fontWeight: 700 }}>{author} -</span>
        <span>&nbsp;{date}</span>
      </p>
      {showpara && <p>{detail}</p>}
    </div>
  );
}