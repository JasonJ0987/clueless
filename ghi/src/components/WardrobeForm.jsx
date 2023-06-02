import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const WardrobeForm = () => {
  const [bins, setBin] = useState([]);
  const [hats, setHats] = useState([]);
  const [tops, setTops] = useState(null);
  const [bottoms, setBottoms] = useState(null);
  const [shoes, setShoes] = useState(null);
  const { token } = useToken();

  const handleHatsChange = (event) => {
    const value = event.target.value;
    setHats(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      hats,
      tops,
      bottoms,
      shoes
    };

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
      setHats([]);
      setTops([]);
      setBottoms([]);
      setShoes([]);
    } else {
      const error = await response.json();
      console.log("Error", error)
    }
  };

//   const loadBins = async () => {
//     const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/`;
//     const fetchConfig = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${token}`,
//       },
//     };
//     const response = await fetch(url, fetchConfig);
//     if (response.ok) {
//       const data = await response.json();
//       console.log("data", data)
//       setBin(data.bins);
//     }
//   };

  const loadHats = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/646bc0f74277954dd0f38117/clothes`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      let hatList = [];
      for (let hat of data.clothes) {
        hatList.push(hat);
      }
      console.log("hatdata", data);
      setHats(hatList);
      console.log("hats", hats);
    }
  };

  const loadTops = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/646beb5724b33168d5719493/clothes`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      // console.log("topdata", data)
      setTops(data.clothes);
      console.log("tops", tops);
    }
  };

  const loadBottoms = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/647659f829d0764ee8697289/clothes`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      // console.log("bottomdata", data)
      setBottoms(data.clothes);
      console.log("bottoms", bottoms);
    }
  };

  const loadShoes = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/64765a3929d0764ee869728a/clothes`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      // console.log("shoesdata", data)
      setShoes(data.clothes);
      console.log("shoes", shoes);
    }
  };

  useEffect(() => {
    loadHats();
    loadTops();
    loadBottoms();
    loadShoes();
    // loadBins();
  }, [token]);

  // useEffect(() => {
  //     loadHats();
  // }, []);

  // useEffect(() => {
  //     loadTops();
  // }, []);

  // useEffect(() => {
  //     loadBottoms();
  // }, []);

  // useEffect(() => {
  //     loadShoes();
  // }, []);

  // useEffect(() => {
  //     loadBins();
  // }, []);

  // }, [token]);

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
        <button
          className="btn btn-primary"
          type="submit"
        >Submit Style</button>
        <div className="form-group">
          <label htmlFor="hat">Hats</label>
          <select name="hat" value={hats} onChange={handleHatsChange}>
            <option value="">Choose a Hat</option>
            {hats.map((hat) => (
              <option value={hat} key={hat.id}>
                {hat.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* <h3 style={{ color: "white" }}>Hats</h3>
        <div style={boxStyle}>
          {hats &&
            hats.map((hat) => (
              <div key={hat.id}>
                <img
                  src={hat.picture}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
        </div>
        <h3 style={{ color: "white" }}>Tops</h3>
        <div style={boxStyle}>
          {tops &&
            tops.map((top) => (
              <div key={top.id}>
                <img
                  src={top.picture}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
        </div>
        <h3 style={{ color: "white" }}>Bottoms</h3>
        <div style={boxStyle}>
          {bottoms &&
            bottoms.map((bottom) => (
              <div key={bottom.id}>
                <img
                  src={bottom.picture}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
        </div>
        <h3 style={{ color: "white" }}>Shoes</h3>
        <div style={boxStyle}>
          {shoes &&
            shoes.map((shoe) => (
              <div key={shoe.id}>
                <img
                  src={shoe.picture}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
        </div>
      </form> */}
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

export default WardrobeForm;
