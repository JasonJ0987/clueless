import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ClosetView() {
  const [closets, setClosets] = useState([]);
  const [bins, setBins] = useState([]);
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
    }
  };

  const loadBins = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closets[0].id}/bins`;
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
      setBins(data.bins);
    }
  };

  useEffect(() => {
    loadCloset();
    loadBins();
  }, [token]);

  return (
    <div>
      {closets.map((closet) => (
        <div key={closet.id}>
          <h2>{closet.name}</h2>
          {bins.map((bin) => (
            <div key={bin.id}>{bin.name}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ClosetView;
