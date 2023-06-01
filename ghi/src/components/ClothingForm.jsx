import React, { useEffect, useState } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";


const ClothesForm = () => {
    const [clothes, setClothes] = useState({
    name: "",
    picture: "",
    primary_color: "",
    type: "",
    bin_id: "",
    closet_id: "646b99c3f2cd73044cf5707d",
    tag_ids: "",
    });

    const { token } = useToken();
    const [bins, setBins] = useState([]);
    const [tags, setTags] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setClothes({
        ...clothes, //copies the current value of the clothes variable to a new object
        [name]: value, //sets the value of the property
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_WHATEVR}/api/closet/${clothes.closet_id}/bins/${clothes.bin_id}/clothes`,
        {
            method: "POST",
            body: JSON.stringify(clothes),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            clothes({
                name: "",
                picture: "",
                primary_color: "",
                type: "",
                bin_id: "",
                closet_id: "646b99c3f2cd73044cf5707d",
                tag_ids: "",
            });
        }
    };

    const loadBins = async () => {
        const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${clothes.closet_id}/bins/`;
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
        const url=`${process.env.REACT_APP_WHATEVR}/api/tags`;
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

    useEffect(() => {loadBins(); loadTags();}, [token]);




return (
  <div className="card text-bg-light mb-3">
    <h5 className="card-header">ClothingForm</h5>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={clothes.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="picture">Picture</label>
          <input
            type="text"
            name="picture"
            id="picture"
            value={clothes.picture}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="primary_color">Primary Color</label>
          <input
            type="text"
            name="primary_color"
            id="primary_color"
            value={clothes.primary_color}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            value={clothes.type}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bin_id">Bins</label>
          <select name="bin_id" value={clothes.bin_id} onChange={handleChange}>
            <option value="">Choose a Bin</option>
            {bins.map((bin) => {
              return (
                <option value={bin.id} key={bin.id}>
                  {bin.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tag_ids">Tags</label>
          <select
            name="tag_ids"
            value={clothes.tag_ids}
            onChange={handleChange}
            // multiple={false}
          >
            <option value="">Tag</option>
            {tags.map((tag) => {
              return (
                <option value={tag.id} key={tag.id}>
                  {tag.description}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  </div>
);
};

export default ClothesForm;



    // const fetchData = async () => {
    //     const modelUrl = "http://localhost:8100/api/models/";
    //     const modelResponse = await fetch(modelUrl);
    //     if (modelResponse.ok) {
    //         const modelData = await modelResponse.json();
    //         setModels(modelData.models);
    //     };
    // };
