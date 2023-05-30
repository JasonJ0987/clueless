import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './dropdown.css';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      <li>:
        <Link className="dropdown-link" to="/closet/:closet_id/bins/">
          Bins
        </Link>
      </li>
      <li>
        <Link className="dropdown-link" to="/closet/:closet_id/bins/:bin_id/hats/">
          Hats
        </Link>
      </li>
      <li>
        <Link className="dropdown-link" to="/closet/:closet_id/bins/:bin_id/tops">
          Tops
        </Link>
      </li>
      <li>
        <Link className="dropdown-link" to="/closet/:closet_id/bins/:bin_id/bottoms">
          Bottoms
        </Link>
      </li>
      <li>
        <Link className="dropdown-link" to="/closet/:closet_id/bins/:bin_id/shoes">
          Shoes
        </Link>
      </li>
    </ul>
  );
}

export default Dropdown;
