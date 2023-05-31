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
      <h1>{closets && closets[0].name}</h1>
      {bins &&
        bins.map((bin) => (
          <div
            className="card mb-5"
            style={{ width: "40vw", height: "50vh" }}
            key={bin.id}
          >
            <div className="card-body">
              <h5 className="card-title" style={{ textAlign: "center" }}>
                <NavLink to={`bins/${bin.id}`}>{bin.name}</NavLink>
              </h5>
              <div style={{ display: "flex" }}>
              <NavLink to={`bins/${bin.id}`} style={{ justifyContent: "center", alignItems: "center", width: "100%", height:"40vh", objectFit: "cover" }}>
              <img
                className="card-img-bottom"
                style={{justifyContent: "center", alignItems: "center", width: "100%", height:"40vh", objectFit: "cover", filter: "blur(4px)"}}
                src={bin.picture}
                onmouseover={() => (this.blurred = false)}
// css stretch goals: add hover effect to reduce blur and overlay words over images
              />
              </NavLink>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ClosetView;
