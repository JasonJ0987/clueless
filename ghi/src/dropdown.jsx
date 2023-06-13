import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";
import useToken from "@galvanize-inc/jwtdown-for-react";

function Dropdown() {

  const [click, setClick] = useState(false);
  const [closetId, setClosetId] = useState("");
  const [bins, setBins] = useState(null);
  const { token } = useToken();

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
      setClosetId(data.closets[0].id)
    }
  }, [token]);


  const loadBins = useCallback(async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closetId && closetId}/bins`;
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
          to= {`/closet/bins/${bins && bins[0].id}`}
        >
          Hats
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-link"
          to= {`/closet/bins/${bins && bins[1].id}`}
        >
          Tops
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-link"
          to= {`/closet/bins/${bins && bins[2].id}`}
        >
          Bottoms
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-link"
          to= {`/closet/bins/${bins && bins[3].id}`}
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
