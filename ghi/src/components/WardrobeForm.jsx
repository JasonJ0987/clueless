import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const WardrobeForm = () => {
  const [wardrobe, setWardrobe] = useState({
    hats: [],
    tops: [],
    bottoms: [],
    shoes: [],
  });
  const [closetId, setClosetId] = useState("");
  const [closets, setClosets] = useState(null);
  const [bin, setBin] = useState([]);
  const [clothes, setClothes] = useState(null);
  const { token } = useToken();

  const loadCloset = async () => {
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
      setClosets(data.closets);
      setClosetId(data.closets[0].id);
    }
  };

    const loadBins = async () => {
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
        setBin(data);
      }
    };

    const loadHats = async () => {
        const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closetId}/bins/646bc0f74277954dd0f38117/clothes`;
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
            setHats(data.hats)
        }
    };

        const loadTops = async () => {
          const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closetId}/bins/646bc0f74277954dd0f38117/clothes`;
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
            setTops(data.tops);
          }
        };


  useEffect(() => {loadCloset();}, [token]);
  useEffect(() => { if (closetId !== "") loadTops();}, [closetId]);
  useEffect(() => { if (closetId !== "") loadHats();}, [closetId]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}
    >
      <h3>Hats</h3>
      <div style={boxStyle}>
        {wardrobe.hats.map((hat) => (
          <div key={hat.id}>
            <img src={bin.picture}/>
          </div>
        ))}
      </div>
      <h3>Tops</h3>
      <div style={boxStyle}>
        {wardrobe.tops.map((top) => (
          <div key={top.id}>
            <img src={bin.picture} />
          </div>
        ))}
      </div>
      <h3>Bottoms</h3>
      <div style={boxStyle}>
        {wardrobe.bottoms.map((bottom) => (
          <div key={bottom.id}>
            <img src={bin.picture} />
          </div>
        ))}
      </div>
      <h3>Shoes</h3>
      <div style={boxStyle}>
        {wardrobe.shoes.map((shoe) => (
          <div key={shoe.id}>
            <img src={bin.picture} />
          </div>
        ))}
      </div>
      <div>
        <input className="btn btn-primary" type="submit" value="Submit Style!" />
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
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
};

export default WardrobeForm;
