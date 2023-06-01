import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

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

  useEffect(() => {
    loadCloset();
  }, [token]);

  useEffect(() => {
    if (closetId !== "") loadBins();
  }, [closetId]);

  return (
    <div className="container mt-5">
      <h1>{closets && closets[0].name}</h1>
      <div className="bin-container">
        {bins &&
          bins.map((bin) => (
            <div
              className="card mb-5 bin-card"
              key={bin.id}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: "center" }}>
                  <NavLink to={`bins/${bin.id}`}>{bin.name}</NavLink>
                </h5>
                <div className="image-wrapper">
                  <NavLink to={`bins/${bin.id}`}>
                    <img
                      className="card-img-bottom"
                      src={bin.picture}
                      alt={bin.name}
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ClosetView;
