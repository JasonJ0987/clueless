import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { AddItemButton } from "../button";

function BinView() {
  const [closetId, setClosetId] = useState("");
  const [bin, setBin] = useState(null);
  const [clothes, setClothes] = useState(null);
  const [tags, setTags] = useState([]);
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
      setClosetId(data.closets[0].id);
    }
  };

  const loadBins = useCallback(async () => {
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
  }, [token, binId, closetId]);

  const loadTags = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/tags`;
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
      setTags(data.tags);
    }
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

  const handleDeleteItem = async (itemId) => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closetId}/bins/${binId}/clothes/${itemId}`;
    const fetchConfig = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setClothes(clothes.filter((item) => item.id !== itemId));
    } else {
      console.error("Failed to delete a clothing item");
    }
  };

  useEffect(() => {
    loadCloset();
    loadTags();
  });
  useEffect(() => {
    if (closetId !== "") loadBins();
  }, [closetId, loadBins]);
  useEffect(() => {
    if (closetId !== "") loadClothes();
  });


  return (
    <div>
      <h1 style={{ color: "white" }}>
        {bin && bin.name}
        <AddItemButton />
      </h1>
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
                    alt="clothes"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="card-text">{item.primary_color}</div>
                <div className="card-text">{item.type}</div>
                <br></br>
                <div className="card-text">
                  Tags
                  {item.tag_ids.map((tagId) => {
                    const tag = tags.find((tag) => tag.id === tagId);
                    return <li key={tag.id}>{tag.description}</li>;
                  })}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end"}}>
                  <button onClick={() => handleDeleteItem(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BinView;
