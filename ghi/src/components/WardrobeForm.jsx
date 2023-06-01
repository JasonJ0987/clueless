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
      console.log("data", data);
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
          setHats(data.hats)
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
      console.log("bottoms", bottoms)
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
      console.log("shoes", shoes)
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
    <p>jh</p>
    //     <div
    //       style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}
    //     >
    //       <form onSubmit={handleSubmit}></form>
    //       <h3>Hats</h3>
    //       <div style={boxStyle}>
    //         {hats.map((hat) => (
    //           <div key={hat.id}>
    //             <img src={bin.picture}/>
    //           </div>
    //         ))}
    //       </div>
    //       <h3>Tops</h3>
    //       <div style={boxStyle}>
    //         {tops.map((top) => (
    //           <div key={top.id}>
    //             <img src={bin.picture} />
    //           </div>
    //         ))}
    //       </div>
    //       <h3>Bottoms</h3>
    //       <div style={boxStyle}>
    //         {bottoms.map((bottom) => (
    //           <div key={bottom.id}>
    //             <img src={bin.picture} />
    //           </div>
    //         ))}
    //       </div>
    //       <h3>Shoes</h3>
    //       <div style={boxStyle}>
    //         {shoes.map((shoe) => (
    //           <div key={shoe.id}>
    //             <img src={bin.picture} />
    //           </div>
    //         ))}
    //       </div>
    //       <div>
    //         <input className="btn btn-primary" type="submit" value="Submit Style!" />
    //       </div>
    //     </div>
    //   );
    // };
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
