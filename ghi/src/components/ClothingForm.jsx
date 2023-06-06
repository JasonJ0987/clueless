import React, { useEffect, useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import '../index.css'

const ClothesForm = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [binId, setBinId] = useState("");
  const [tagId, setTagId] = useState([]);
  const [userId, setUserId] = useState("");
  const [bins, setBins] = useState([]);
  const [tags, setTags] = useState([]);
  const { token } = useToken();

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handlePictureChange = (event) => {
    const value = event.target.value;
    setPicture(value);
  };
  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  };
  const handleTypeChange = (event) => {
    const value = event.target.value;
    setType(value);
  };
  const handleBinIdChange = (event) => {
    const value = event.target.value;
    setBinId(value);
  };

  const handleTagIdChange = (event) => {
    const selectedTags = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setTagId((prevTagId) => [...prevTagId, selectedTags]);
    } else {
      setTagId((prevTagId) =>
        prevTagId.filter((tagId) => tagId !== selectedTags)
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = name;
    data.picture = picture;
    data.primary_color = color;
    data.type = type;
    data.tag_ids = tagId;
    data.bin_id = binId;
    data.closet_id = "646b99c3f2cd73044cf5707d";
    data.user_id = userId;

    const response = await fetch(
      `${process.env.REACT_APP_WHATEVR}/api/closet/${data.closet_id}/bins/${data.bin_id}/clothes`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      setName("");
      setPicture("");
      setColor("");
      setType("");
      setBinId("");
      setTagId([]);
      setUserId("");
    } else {
      const error = await response.json();
      console.log("Error", error);
    }
  };

  const loadBins = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/`;
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
      setBins(data.bins);
    }
  };

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

  useEffect(() => {
    loadBins();
    loadTags();
    loadUser();
  }, [token]);

  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card-3d-wrap mx-auto"
              style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)" }}
            >
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3"> Upload your Clothes!</h4>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="name" style={{marginRight: "10px"}}>Name</label>
                          <input style={{marginBottom: "15px"}}
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                          />
                        </div>
                        <div className="form-group">
                          <label className= 'form-label' htmlFor="picture" style={{marginRight: "10px"}}>Picture</label>
                          <input  style={{marginBottom: "15px"}}
                            type="text"
                            name="picture"
                            id="picture"
                            value={picture}
                            onChange={handlePictureChange}
                          />
                        </div>
                        <div className="form-group">
                          <label className= 'form-label' htmlFor="primary_color" style={{marginRight: "10px"}}>Primary Color</label>
                          <input style={{marginBottom: "15px"}}
                            type="text"
                            name="primary_color"
                            id="primary_color"
                            value={color}
                            onChange={handleColorChange}
                          />
                        </div>
                        <div className="form-group">
                          <label className= 'form-label' htmlFor="type" style={{marginRight: "10px"}}>Type</label>
                          <input style={{marginBottom: "15px"}}
                            type="text"
                            name="type"
                            id="type"
                            value={type}
                            onChange={handleTypeChange}
                          />
                        </div>
                        <div className="form-group">
                          <label className= 'form-label' htmlFor="bin_id" style={{marginRight: "10px"}}>Bins</label>
                          <select name="bin_id" value={binId} onChange={handleBinIdChange}>
                            <option value="">Choose a Bin</option>
                            {bins.map((bin) => (
                              <option value={bin.id} key={bin.id}>
                                {bin.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label className= 'form-label' htmlFor="tag_id" style={{marginRight: "10px"}}>Tags:</label>
                          {tags.map((tag) => (
                            <div key={tag.id}>
                              <input style={{marginBottom: "15px"}}
                                type="checkbox"
                                id={tag.id}
                                value={tag.id}
                                checked={tagId.includes(tag.id)}
                                onChange={handleTagIdChange}
                              />
                              <label className= 'form-label' htmlFor={tag.id}>{tag.description}</label>
                            </div>
                          ))}
                        </div>
                        <button className= 'btn btn primary' type="submit" onClick={handleSubmit}>
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothesForm;
