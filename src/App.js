import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homebanner from './pages/Homebanner';
import Card from './component/Card';
import Horicard from './component/Horicard';



function App() {
  return (
    <>
    <Homebanner />
    <Card
    imageUrl="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/43-2-696x464.jpg"
    cardTitle="Card Title"
    author="Author"
    date="Date"
    detail="Card details"
    hoverColor="red"
    width={10}
    showpara={true}
    link="https://google.com"
    />
    <Horicard
    imageUrl="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/43-2-696x464.jpg"
    cardTitle="Card Title"
    author="Author"
    date="Date"
    detail="Card details"
    hoverColor="red"
    width={10}
    showpara={true}
    link="https://google.com"/>
    </>
  );
}

export default App;
