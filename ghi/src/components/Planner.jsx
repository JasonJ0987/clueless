import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";

function Planner() {
  const [weather, setWeather] = useState([]);
  const [outfit, setOutfit] = useState(null);
  const { token } = useToken();

  const loadWeather = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/weather`;
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
      console.log(data);
      setWeather(data);
    }
  };

  useEffect(() => {
    loadWeather();
  }, [token]);

  return <p>hi</p>;
}

export default Planner;
