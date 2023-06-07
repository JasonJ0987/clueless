import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const WardrobeForm = () => {
  const [date, setDate] = useState("");
  const [hats, setHats] = useState([]);
  const [hat, setHat] = useState(null);
  const [tops, setTops] = useState([]);
  const [top, setTop] = useState(null);
  const [bottoms, setBottoms] = useState([]);
  const [bottom, setBottom] = useState(null);
  const [shoes, setShoes] = useState([]);
  const [shoe, setShoe] = useState(null);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const { token } = useToken();
  const { wardrobeId } = useParams();

  const loadUser = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/token`;
    fetch(url, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUserId(data.account.id);
      })
      .catch((error) => console.error(error));
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
      setHats(data.clothes);
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
      setTops(data.clothes);
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
    loadUser();
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.date = date;
    data.hat = hat;
    data.top = top;
    data.bottom = bottom;
    data.shoes = shoe;
    data.user_id = userId;

    const response = await fetch(
      `${process.env.REACT_APP_WHATEVR}/api/wardrobe`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      setDate("");
      setHat(null);
      setTop(null);
      setBottom(null);
      setShoe(null);
      setUserId("");
      navigate("/planner");
    } else {
      const error = await response.json();
      return error;
    }
  };

  const handleHatChange = (event) => {
    const value = event.target.value;
    const selectedHat = hats.find((hat) => hat.id === value);
    setHat(selectedHat);
  };

  const handleTopChange = (event) => {
    const value = event.target.value;
    const selectedTop = tops.find((top) => top.id === value);
    setTop(selectedTop);
  };

  const handleBottomChange = (event) => {
    const value = event.target.value;
    const selectedBottom = bottoms.find((bottom) => bottom.id === value);
    setBottom(selectedBottom);
  };

  const handleShoeChange = (event) => {
    const value = event.target.value;
    const selectedShoe = shoes.find((shoe) => shoe.id === value);
    setShoe(selectedShoe);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
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
    <>
      <h1 style={{ color: "white", textAlign: "center", fontSize: "45px" }}>
        Select Your Outfit of the Day!{" "}
      </h1>
      <br></br>
      <div style={containerStyle}>
        <h1 style={{ color: "white", textAlign: "center" }}>Date</h1>
        <br />
        <div style={{ textAlign: "center" }}>
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <br></br>

      <div style={containerStyle}>
        <h1 style={{ color: "white", textAlign: "center" }}>Hats</h1>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <select
              name="hat"
              value={hat ? hat.id : ""}
              onChange={handleHatChange}
            >
              <option value="">Choose a Hat</option>
              {hats.map((hat) => (
                <option value={hat.id} key={hat.id}>
                  {hat.name}
                </option>
              ))}
            </select>
            <div>
              {hat && (
                <img
                  src={hat.picture}
                  alt="hat"
                  style={{
                    ...boxStyle,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "fill",
                  }}
                />
              )}
            </div>
          </div>
          <br></br>
          <br></br>

          <h1 style={{ color: "white", textAlign: "center" }}>Tops</h1>
          <br></br>
          <div style={{ textAlign: "center" }}>
            <select
              name="top"
              value={top ? top.id : ""}
              onChange={handleTopChange}
            >
              <option value="">Choose a Top</option>
              {tops.map((top) => (
                <option value={top.id} key={top.id}>
                  {top.name}
                </option>
              ))}
            </select>
            <div>
              {top && (
                <img
                  src={top.picture}
                  alt="Top"
                  style={{
                    ...boxStyle,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "fill",
                  }}
                />
              )}
            </div>
          </div>
          <br></br>
          <br></br>

          <br></br>
          <h1 style={{ color: "white", textAlign: "center" }}>Bottoms</h1>
          <br></br>
          <div style={{ textAlign: "center" }}>
            <select
              name="bottom"
              value={bottom ? bottom.id : ""}
              onChange={handleBottomChange}
            >
              <option value="">Choose a Bottom</option>
              {bottoms.map((bottom) => (
                <option value={bottom.id} key={bottom.id}>
                  {bottom.name}
                </option>
              ))}
            </select>
            <div>
              {bottom && (
                <img
                  src={bottom.picture}
                  alt="bottom"
                  style={{
                    ...boxStyle,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "fill",
                  }}
                />
              )}
            </div>
          </div>
          <br></br>
          <br></br>

          <h1 style={{ color: "white", textAlign: "center" }}>Shoes</h1>
          <br></br>
          <div style={{ textAlign: "center" }}>
            <select
              name="shoe"
              value={shoe ? shoe.id : ""}
              onChange={handleShoeChange}
            >
              <option value="">Choose a Shoe</option>
              {shoes.map((shoe) => (
                <option value={shoe.id} key={shoe.id}>
                  {shoe.name}
                </option>
              ))}
            </select>
            <div>
              {shoe && (
                <img
                  src={shoe.picture}
                  alt="shoe"
                  style={{
                    ...boxStyle,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "fill",
                  }}
                />
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
