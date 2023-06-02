import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BinView() {
  const [closets, setClosets] = useState(null);
  const [closetId, setClosetId] = useState("");
  const [bin, setBin] = useState(null);
  const [clothes, setClothes] = useState(null);
  const [userId, setUserId] = useState("");
  // const [clothesId, setClothesId] = useState("");
  const { token } = useToken();
  const { binId } = useParams();

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
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closetId}/bins/${binId}`;
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
      setBin(data);
    }
  };

  const loadUser = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/token`;
    fetch(url, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUserId(data.account.id);
      })
      .catch((error) => console.error(error));
  };

  const loadClothes = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closetId}/bins/${binId}/clothes`;
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
      setClothes(data.clothes);
    }
  };

  useEffect(() => {
    loadCloset();
  }, [token]);
  useEffect(() => {
    if (closetId !== "") loadBins();
    loadUser();
  }, [closetId]);
  useEffect(() => {
    if (closetId !== "") loadClothes();
  }, [closetId]);

  return (
    <div>
      <h1 style={{ color: "white" }}>{bin && bin.name}</h1>
      <br></br>
      <br></br>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
        {clothes &&
          clothes.map((item) => (
            <div
              className="card mb-5"
              style={{ maxWidth: "250px", margin: "10px" }}
              key={item.id}
            >
              <h5>{item.name}</h5>
              <div className="card-body">
                <div className="image-wrapper">
                  <img
                    src={item.picture}
                    alt="picture of clothes"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="card-text">{item.primary_color}</div>
                <div className="card-text">{item.type}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BinView;
