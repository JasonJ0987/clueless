import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import "./dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);
  const [closetId, setClosetId] = useState(null);
  const [bins, setBins] = useState([]);

  const handleClick = () => {
    setClick(!click);
    window.location.reload();
  };

  const loadCloset = useCallback(async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setClosetId(data.closets[0].id);
    }
  }, [token]);


  const loadBins = useCallback(async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closetId}/bins`;
        const fetchConfig = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const data = await response.json();
          setBins(data.bins.filter((bin) => bin.closet_id === closetId));
        }
      }, [token, closetId]);

  useEffect(() => {
    loadCloset();
    loadBins();
    console.log(bins)
  }, [token, loadCloset, loadBins]);


  return (
    <>
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      <li>
        <Link className="dropdown-link" to="/closet">
          Your Closet
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-link"
          to= {`/closet/bins/${bins[0].id}`}
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
        <Link className="dropdown-link" to="/closet/new">
          Upload Clothing Item
        </Link>
      </li>
    </ul>
    </>
  );
}

export default Dropdown;
