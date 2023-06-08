import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import '../index.css';

function WardrobeView() {
    const [outfit, setOutfit] = useState(null);
    const { wardrobeId } = useParams();
    const { token } = useToken();

    const loadOutfit = useCallback(async () => {
        const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe/${wardrobeId}`
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
            setOutfit(data)
        }
    }, [wardrobeId, token]);

    useEffect(() => {
        loadOutfit();
    }, [token, loadOutfit]);

    // const boxStyle = {
    //   width: "200px",
    //   height: "200px",
    //   backgroundColor: "#ccc",
    //   margin: "10px",
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   position: "relative",
    //   boxShadow: "0 3px 15px rgba(255, 255, 0, 0.5)",
    //   borderRadius: "9px",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // };

    return (
      <div>
        <h1 style={{ color: "white", textAlign: "center" }}>Your Outfit</h1>
        <br></br>
        <div style={{textAlign: "center"}}>
          <h2 style={{ color: "white", textAlign: "center" }}>Hat</h2>
          <img
            style={{ height: "200px", width: "200px" }}
            src={outfit && outfit.hat.picture}
            alt="hat"
          />
          <h2 style={{ color: "white", textAlign: "center" }}>Top</h2>
          <img
            style={{ height: "200px", width: "200px" }}
            src={outfit && outfit.top.picture}
            alt="top"
          />
          <h2 style={{ color: "white", textAlign: "center" }}>Bottoms</h2>
          <img
            style={{ height: "200px", width: "200px" }}
            src={outfit && outfit.bottom.picture}
            alt="bottom"
          />
          <h2 style={{ color: "white", textAlign: "center" }}>Shoes</h2>
          <img
            style={{ height: "200px", width: "200px" }}
            src={outfit && outfit.shoes.picture}
            alt="shoe"
          />
        </div>
      </div>
    );
}

export default WardrobeView;
