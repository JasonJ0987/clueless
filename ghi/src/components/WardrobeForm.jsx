import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const WardrobeForm = () => {
  // const [wardrobe, setWardrobe] = useState({
  //   hats: [],
  //   tops: [],
  //   bottoms: [],
  //   shoes: [],
  // });
  // const [closetId, setClosetId] = useState("");
  // const [closets, setClosets] = useState(null);
  const [bin, setBin] = useState([]);
  const [hats, setHats] = useState(null);
  const [tops, setTops] = useState(null);
  const [bottoms, setBottoms] = useState(null);
  const [shoes, setShoes] = useState(null);
  const { token } = useToken();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Selected Hats:", hats);
    console.log("Selected Tops:", tops);
    console.log("Selected Bottoms:", bottoms);
    console.log("Selected Shoes:", shoes);
    setHats([]);
    setTops([]);
    setBottoms([]);
    setShoes([]);
  };

  const loadBins = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/`;
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
      setBin(data.bins);
    }
  };

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
      // console.log("hatdata", data)
      setHats(data.hats);
      console.log("hats", hats);
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
      // console.log("topdata", data)
      setTops(data.tops);
      console.log("tops", tops);
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
      // console.log("bottomdata", data)
      setBottoms(data.bottoms);
      console.log("bottoms", bottoms);
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
      // console.log("shoesdata", data)
      setShoes(data.shoes);
      console.log("shoes", shoes);
    }
  };

  useEffect(() => {
    loadHats();
    loadTops();
    loadBottoms();
    loadShoes();
    loadBins();
  }, [token]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        {/* Add your form fields here */}
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit Style!"
        />
      </form>
      <h3 style={{ color: "white" }}>Hats</h3>
      <div style={boxStyle}>
        {hats &&
          hats.map((hat) => (
            <div key={hat.id}>
              <img src={hat.picture} alt={hat.name} />
            </div>
          ))}
      </div>
      <h3 style={{ color: "white" }}>Tops</h3>
      <div style={boxStyle}>
        {tops &&
          tops.map((top) => (
            <div key={top.id}>
              <img src={top.picture} alt={top.name} />
            </div>
          ))}
      </div>
      <h3 style={{ color: "white" }}>Bottoms</h3>
      <div style={boxStyle}>
        {bottoms &&
          bottoms.map((bottom) => (
            <div key={bottom.id}>
              <img src={bottom.picture} alt={bottom.name} />
            </div>
          ))}
      </div>
      <h3 style={{ color: "white" }}>Shoes</h3>
      <div style={boxStyle}>
        {shoes &&
          shoes.map((shoe) => (
            <div key={shoe.id}>
              <img src={shoe.picture} alt={shoe.name} />
            </div>
          ))}
      </div>
    </div>
  );
};

const boxStyle = {
  width: "200px",
  height: "300px",
  backgroundColor: "#ccc",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  boxShadow: "0 4px 10px rgba(255, 255, 0, 0.5)",
  borderRadius: "9px",
};

export default WardrobeForm;
