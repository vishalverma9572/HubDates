import React from 'react';
import './Compotag.css';

export default function Compotag({ color, width, text, textcolor , bottom}) {
    const compotagStyle = {
        borderColor: `${color}`,
        width: `${width}%`,
        marginBottom: `${bottom}px`,
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
