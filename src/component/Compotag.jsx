import React from 'react';
import './Compotag.css';

export default function Compotag({ color, width, text,textcolor }) {
    const compotagStyle = {
        borderColor: `${color}`,
        width: `${width}%`,
    };
    const spanstyle={
        backgroundColor:`${color}`,
        color:`${textcolor}`,
    }

    return (
        <div className='compotag' style={compotagStyle}>
            <h3 style={spanstyle}>{text}</h3>
        </div>
    );
}
