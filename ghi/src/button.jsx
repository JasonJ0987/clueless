import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

export function SignupButton() {
    return (
        <Link to='/signup'>
            <button className='btn'>GET STARTED</button>
        </Link>
    );
}
