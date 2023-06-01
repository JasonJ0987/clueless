import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './dropdown.css';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      <li>
        <Link className="dropdown-link" to="/closet">
          Bins
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-link"
          to="/closet/bins/646bc0f74277954dd0f38117"
        >
          Hats
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-link"
          to="/closet/bins/646beb5724b33168d5719493"
        >
          Tops
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-link"
          to="/closet/bins/647659f829d0764ee8697289"
        >
          Bottoms
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-link"
          to="/closet/bins/64765a3929d0764ee869728a"
        >
          Shoes
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-link"
          to="/clothes/new"
        >
          Upload Clothing Item
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;
