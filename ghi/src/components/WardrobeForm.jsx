import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import placeholderImage from "../ghi/public/placeholder-image.png";

const WardrobeForm = () => {
  const [hats, setHats] = useState([]);
  const [hat, setHat] = useState(null);
  const [tops, setTops] = useState([]);
  const [top, setTop] = useState(null);
  const [bottoms, setBottoms] = useState([]);
  const [bottom, setBottom] = useState(null);
  const [shoes, setShoes] = useState([]);
  const [shoe, setShoe] = useState(null);
  const [userId, setUserId] = useState("");
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

console.log("hat", hat);
console.log("top", top);
console.log("bottom", bottom);
console.log("shoe", shoe);
// console.log("hatpic", hatImage);

return (
  <>
  <h1 style={{ color: "white", textAlign: "center", fontSize: '45px' }}>Select Your Outfit of the Day! </h1>
  <br></br>
    <div style={containerStyle}>
      <h1 style={{ color: "white", textAlign: "center"}}>Hats</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: "center" }}>
          <select name="hat" value={hat ? hat.id : ""} onChange={handleHatChange}>
            <option value="">Choose a Hat</option>
            {hats.map((hat) => (
              <option value={hat.id} key={hat.id}>
                {hat.name}
              </option>
            ))}
          </select>
          <div>
            {hat && (
              <img src={hat.picture} alt="hat" style={{ ...boxStyle, maxWidth: "100%", maxHeight: "100%", objectFit: "fill" }} />
            )}
          </div>
        </div>
        <br></br>
        <br></br>

        <h1 style={{ color: "white", textAlign: "center" }}>Tops</h1>
        <br></br>
        <div style={{  textAlign: "center" }}>
          <select name="top" value={top ? top.id : ""} onChange={handleTopChange}>
            <option value="">Choose a Top</option>
            {tops.map((top) => (
              <option value={top.id} key={top.id}>
                {top.name}
              </option>
            ))}
          </select>
          <div>
            {top && (
              <img src={top.picture} alt="Top" style={{ ...boxStyle, maxWidth: "100%", maxHeight: "100%", objectFit: "fill" }} />
            )}
          </div>
        </div>
        <br></br>
        <br></br>

        <br></br>
        <h1 style={{ color: "white", textAlign: "center" }}>Bottoms</h1>
        <br></br>
        <div style={{  textAlign: "center" }}>
          <select name="bottom" value={bottom ? bottom.id : ""} onChange={handleBottomChange}>
            <option value="">Choose a Bottom</option>
            {bottoms.map((bottom) => (
              <option value={bottom.id} key={bottom.id}>
                {bottom.name}
              </option>
            ))}
          </select>
          <div>
            {bottom && (
              <img src={bottom.picture} alt="bottom" style={{ ...boxStyle, maxWidth: "100%", maxHeight: "100%", objectFit: "fill" }} />
            )}
          </div>
        </div>
        <br></br>
        <br></br>

        <h1 style={{ color: "white", textAlign: "center" }}>Shoes</h1>
        <br></br>
        <div style={{  textAlign: "center" }}>
          <select name="shoe" value={shoe ? shoe.id : ""} onChange={handleShoeChange}>
            <option value="">Choose a Shoe</option>
            {shoes.map((shoe) => (
              <option value={shoe.id} key={shoe.id}>
                {shoe.name}
              </option>
            ))}
          </select>
          <div>
              {shoe && (
                <img src={shoe.picture} alt="shoe" style={{ ...boxStyle, maxWidth: "100%", maxHeight: "100%", objectFit: "fill" }} />
              )}
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit Styles
        </button>
      </form>
    </div>
    </>
);
};

export default WardrobeForm;
