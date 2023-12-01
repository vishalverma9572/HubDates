import React, { useState, useEffect } from 'react';
import logo from '../resources/hubdates-high-resolution-logo.png';
import './Header.css';

export default function Header() {
  const [quote, setQuote] = useState("Being rich and famous isn't all happiness and at times the pressures have got to me.");
  // for api limit 
  // const category = 'knowledge';
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.api-ninjas.com/v1/quotes?category=${category}`,
  //         {
  //           headers: {
  //             'X-Api-Key': 'c0Z9oyBzjuk6eSQwZ/vlhQ==FegTVnAhRNW1jAeg',
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );
  
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  
  //       const result = await response.json();
  //       console.log('Fetched data:', result[0].quote);
  //       setQuote(result[0].quote); // Extracting the quote property
  //     } catch (error) {
  //       console.error('Error fetching data: ', error.message);
  //     }
  //   };
  
  //   fetchData();
  // }, [category]);
  

  return (
    <>
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="HubDates" />
      </div>
      <div className="header-design">
      {quote.length > 150 ? <p>"{quote.substring(0, 149) + '...'}"</p> : <p>"{quote}"</p>}

       
      </div>
    </div>
    <hr />
  </>
  );
}
