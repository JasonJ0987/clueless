import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from '../dropdown.jsx';
import useToken from "@galvanize-inc/jwtdown-for-react";
import '../index.css';
import { SignupButton, LoginButton, LogoutButton } from '../button.jsx';

function Navbar(closet_id, ) {
  const [click, setClick] = useState(false);
  const { logout, token } = useToken();
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setTimeout(() => {
        setDropdown(true);
      }, 200);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='i-wear-whatevr-low-resolution-logo-color-on-transparent-background.png' height="65" width="200"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/closet'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              MyCloset <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/planner'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Planner
            </Link>
          </li>
          <li>
            <Link
              to='/signup'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              <SignupButton/>
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              <LoginButton/>
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='nav-links-mobile'
              onClick={logout}
            >
              <LogoutButton/>
            </Link>
          </li>

        </ul>

      </nav>
    </>
  );
}

export default Navbar;
