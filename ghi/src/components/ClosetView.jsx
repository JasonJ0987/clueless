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
    <div
      className="container mt-5"
      style={{ maxWidth: "1000px", margin: "0 auto" }}
    >
      <h1 style={{ color: "white" }}>{closets && closets[0].name}</h1>
      <br></br>
      <br></br>
      <div className="bin-container">
        <div className="grid-container">
          {bins &&
            bins.map((bin) => (
              <div className="card mb-5 bin-card" key={bin.id}>
                <h5 style={{ fontSize: "24pt", textAlign: "center" }}>
                  <NavLink
                    to={`bins/${bin.id}`}
                    style={{ color: "black", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.target.style.color = "#8B8000")}
                    onMouseLeave={(e) => (e.target.style.color = "black")}
                  >
                    {bin.name}
                  </NavLink>
                </h5>
                <div className="card-body">
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
    </div>
  );
}

export default ClosetView;
