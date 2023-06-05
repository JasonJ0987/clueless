import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const WardrobeForm = () => {
  const [hats, setHats] = useState([]);
  const [hat, setHat] = useState(null);
  const [tops, setTops] = useState([]);
  const [top, setTop] = useState(null);
  const [bottoms, setBottoms] = useState([]);
  const [bottom, setBottom] = useState(null);
  const [shoes, setShoes] = useState([]);
  const [shoe, setShoe] = useState(null);
  const { token } = useToken();


    const loadHats = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/646bc0f74277954dd0f38117/clothes`;
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
      setHats(data.clothes)
    }
  };


  const loadTops = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/646beb5724b33168d5719493/clothes`;
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
      setTops(data.clothes)
    }
  };


  const loadBottoms = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/647659f829d0764ee8697289/clothes`;
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
      setBottoms(data.clothes);
    }
  };


  const loadShoes = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/64765a3929d0764ee869728a/clothes`;
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
      setShoes(data.clothes);
    }
  };


  useEffect(() => {
    loadHats();
    loadTops();
    loadBottoms();
    loadShoes();
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      hat,
      top,
      bottom,
      shoe,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_WHATEVR}/api/wardrobe`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setHats([]);
        setTops([]);
        setBottoms([]);
        setShoes([]);
      } else {
        const error = await response.json();
        console.log("Error", error);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleHatChange = (event) => {
    const value = event.target.value;
    setHat(value);
  };

  const handleTopChange = (event) => {
    const value = event.target.value;
    setTop(value);
  };

  const handleBottomChange = (event) => {
    const value = event.target.value;
    setBottom(value);
  };

  const handleShoeChange = (event) => {
    const value = event.target.value;
    setShoe(value);
  };

  const boxStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "#ccc",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    boxShadow: "0 3px 15px rgba(255, 255, 0, 0.5)",
    borderRadius: "9px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

    const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

return (
  <div style={containerStyle}>
    <h1 style={{ color: "white", textAlign: "center" }}>Hats</h1>
    <form onSubmit={handleSubmit}>
      <div style={{ ...boxStyle, textAlign: "center" }}>
        <select name="hat" value={hat} onChange={handleHatChange}>
          <option value="">Choose a Hat</option>
          {hats.map((hat) => (
            <option value={hat.picture} key={hat.id}>
              {hat.name}
            </option>
          ))}
        </select>
      </div>

      <h1 style={{ color: "white", textAlign: "center" }}>Tops</h1>
      <div style={{ ...boxStyle, textAlign: "center" }}>
        <select name="top" value={top} onChange={handleTopChange}>
          <option value="">Choose a Top</option>
          {tops.map((top) => (
            <option value={top.picture} key={top.id}>
              {top.name}
            </option>
          ))}
        </select>
      </div>

      <h1 style={{ color: "white", textAlign: "center" }}>Bottoms</h1>
      <div style={{ ...boxStyle, textAlign: "center" }}>
        <select name="bottom" value={bottom} onChange={handleBottomChange}>
          <option value="">Choose a Bottom</option>
          {bottoms.map((bottom) => (
            <option value={bottom.picture} key={bottom.id}>
              {bottom.name}
            </option>
          ))}
        </select>
      </div>

      <h1 style={{ color: "white", textAlign: "center" }}>Shoes</h1>
      <div style={{ ...boxStyle, textAlign: "center" }}>
        <select name="shoe" value={shoe} onChange={handleShoeChange}>
          <option value="">Choose a Shoe</option>
          {shoes.map((shoe) => (
            <option value={shoe.picture} key={shoe.id}>
              {shoe.name}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit Styles
      </button>
    </form>
  </div>
);
};

export default WardrobeForm;