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

export function AddItemButton() {
    return (
        <Link to='/closet/new'>
            <button className='btn'>ADD ITEM</button>
        </Link>
    );
}

export function NewOutfit() {
    return (
        <Link to="/wardrobe/new">
        <button className="btn">CREATE OUTFIT</button>
        </Link>
    );
}

export function LogoutButton() {
    return (
        <Link to='/'>
            <button className='btn btn primary'>LOG OUT</button>
        </Link>
    );
}

export function SubmitButton() {
    return (
        <Link to='/closet'>
            <button className='btn btn primary'>SUBMIT</button>
        </Link>
    );
}
