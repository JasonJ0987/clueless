import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function ClosetView() {
  const [closets, setClosets] = useState(null);
  const [bins, setBins] = useState(null);
  const [closetId, setClosetId] = useState("");
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
      setBins(data.bins.filter((bin) => bin.closet_id === closetId));
    }
  };

  useEffect(() => {loadCloset();}, [token]);
  useEffect(() => { if (closetId !== "") loadBins();}, [closetId]);


  return (
    <div className="container mt-5">
      {/* {bins &&
        closets.map((closet) => (
          <div key={closet.id}>
            <h2>{closet.name}</h2>
            {bins.map((bin) => (
              <div key={bin.id}>{bin.name}</div>
            ))}
          </div>
        ))} */}
        <h1>Your Closet</h1>
        { bins && bins.map((bin) => (
            <div key={bin.id}>
                <NavLink to={`bins/${bin.id}`}>{bin.name}</NavLink>
            </div>
        )
        )}
    </div>
  );
}

export default ClosetView;
