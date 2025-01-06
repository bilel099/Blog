import React from 'react';
import './Navlinks.css';
import { Link } from 'react-router-dom';

function Navlinks() {
    return (
        <nav className='navlinks'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className='navlinks__inner'>
            <Link>Today's Deals</Link>
            <Link>Customer Service</Link>
            <Link>Gift Cards</Link>
            </div>
        </nav>
    );
}

export default Navlinks;
