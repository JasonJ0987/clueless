import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState, useEffect } from "react";

const WardrobeForm = () => {
  const [closetId, setClosetId] = useState("");
  const [bins, setBins] = useState([]);
  const [wardrobe, setWardrobe] = useState({
    hats: [],
    tops: [],
    bottoms: [],
    shoes: [],
  });

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
      setBins(data.bins.filter((bin) => bin.closet_id === closetId));
    }
  };

  const loadClothes = async () => {
    // const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closetId}/bins/${binId}/clothes`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setWardrobe(data.clothes);
    }
  };

  const handleSubmit = () => {
    event.preventDefault();
    const response = await fetch
  };

  useEffect(() => {
    loadCloset();
  }, [token]);

  useEffect(() => {
    if (closetId !== "") {
      loadBins();
      loadClothes();
    }
  }, [closetId]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h3>Hats</h3>
      <div style={boxStyle}>
        {wardrobe.hats.map((hat) => (
          <div key={hat.id}>
            <img src={hat.image} alt={hat.title} />
            <p>{hat.title}</p>
          </div>
        ))}
      </div>
      <h3>Tops</h3>
      <div style={boxStyle}>
        {wardrobe.tops.map((top) => (
          <div key={top.id}>
            <img src={top.image} />
            <p>{top.title}</p>
          </div>
        ))}
      </div>
      <h3>Bottoms</h3>
      <div style={boxStyle}>
        {wardrobe.bottoms.map((bottom) => (
          <div key={bottom.id}>
            <img src={bottom.image} />
            <p>{bottom.title}</p>
          </div>
        ))}
      </div>
      <h3>Shoes</h3>
      <div style={boxStyle}>
        {wardrobe.shoes.map((shoe) => (
          <div key={shoe.id}>
            <img src={shoe.image} />
            <p>{shoe.title}</p>
          </div>
        ))}
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit Style!
      </button>
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
