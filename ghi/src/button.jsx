import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';


export function SignupButton() {

    return (
        <Link to='/signup'>
            <button className='btn'>GET STYLED</button>
        </Link>
    );
}

export function LoginButton() {
    return (
        <Link to='/login'>
            <button className='btn'>LOG IN</button>
        </Link>
    );
}

export function StyleButton() {
    return (
        <Link to='/closet/new'>
            <button className='btn'>STYLE</button>
        </Link>
    );
}

export function LogoutButton() {
    return (
        <Link to='/'>
            <button className='btn'>LOG OUT</button>
        </Link>
    );
}
