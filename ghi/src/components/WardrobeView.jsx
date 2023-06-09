import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

function WardrobeView() {
  const [outfit, setOutfit] = useState(null);
  const { wardrobeId } = useParams();
  const { token } = useToken();

  const loadOutfit = useCallback(async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe/${wardrobeId}`;
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
      setOutfit(data);
    }
  }, [wardrobeId, token]);

  useEffect(() => {
    loadOutfit();
  }, [token, loadOutfit]);

  return (
    <div>
      <h1 className="header-style">Your Outfit</h1>
      <br></br>
      <div className="center">
        <h2 className="header-style">Hat</h2>
        <img
          className="bin-card"
          src={outfit && outfit.hat.picture}
          alt="hat"
        />
        <h2 className="header-style">Top</h2>
        <img
          className="bin-card"
          src={outfit && outfit.top.picture}
          alt="top"
        />
        <h2 className="header-style">Bottoms</h2>
        <img
          className="bin-card"
          src={outfit && outfit.bottom.picture}
          alt="bottom"
        />
        <h2 className="header-style">Shoes</h2>
        <img
          className="bin-card"
          src={outfit && outfit.shoes.picture}
          alt="shoe"
        />
      </div>
    </div>
  );
}

export default WardrobeView;
