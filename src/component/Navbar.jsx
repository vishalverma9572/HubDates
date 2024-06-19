import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                {/* replace with LINk */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="Sports">Sports</Link></li>
                <li><Link to="Political">Political</Link></li>
                <li><Link to="Business">Business</Link></li>
                <li><Link to="International">International</Link></li>
                <li><Link to="Technology">Technology</Link></li>
                <li><Link to="Science">Science</Link></li>
                <li><Link to="Health">Health</Link></li>
                <li><Link to="Entertainment">Entertainment</Link></li>
                <li><Link to="Lifestyle">Lifestyle</Link></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;