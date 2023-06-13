import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect, useCallback } from "react";
import "../index.css";
import { NewOutfit } from "../button";

function Planner() {
  const [weather, setWeather] = useState([]);
  const [outfits, setOutfits] = useState([]);
  const { token } = useToken();

  const loadWeather = useCallback(async () => {
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
      setWeather(data);
    }
  }, [token]);

  const loadOutfits = useCallback(
    async (outfitId) => {
      const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe`;
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
        setOutfits(data.outfits);
      }
    },
    [token]
  );

  const handleDeleteOutfit = async (outfitId) => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe/${outfitId}`;
    const fetchConfig = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setOutfits(outfits.filter((outfit) => outfit.id !== outfitId));
    } else {
      console.error("Failed to delete an outfit");
    }
  };

  useEffect(() => {
    loadWeather();
    loadOutfits();
  }, [token, loadOutfits, loadWeather]);

  function MDYOfWeek(number) {
    let fullDay = weather[number] && weather[number]["time"];
    let date = new Date(fullDay);
    let MDY = { month: "long", day: "numeric", year: "numeric" };
    let formattedDate = date.toLocaleDateString(undefined, MDY);
    return formattedDate;
  }

  function dayOfWeek(number) {
    let fullDay = weather[number] && weather[number]["time"];
    let date = new Date(fullDay);
    let day = date.toLocaleDateString("en-US", { weekday: "long" });
    return `${day}`;
  }

  let mdyOne = MDYOfWeek(1);
  let dayOne = dayOfWeek(1);
  let mdyTwo = MDYOfWeek(2);
  let dayTwo = dayOfWeek(2);
  let mdyThree = MDYOfWeek(3);
  let dayThree = dayOfWeek(3);
  let mdyFour = MDYOfWeek(4);
  let dayFour = dayOfWeek(4);
  let mdyFive = MDYOfWeek(5);
  let dayFive = dayOfWeek(5);

  return (
    <div>
      <div>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Weather Forecast for next 5 Days
        </h1>
      </div>
      <br></br>
      <br></br>
      <div style={{ display: "flex", gap: "15px" }}>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "35vh",
            width: "150vh",
            textAlign: "center",
          }}
        >
          <h2>
            {dayOne}
            <br></br>
            {mdyOne}
          </h2>
          <h4>{weather[1] && weather[1]["description"]}</h4>
          <h5>{weather[1] && weather[1]["temperature"]}</h5>
          <img
            src={
              weather[1] &&
              `http://openweathermap.org/img/w/${weather[1]["icon"]}.png`
            }
            alt="Weather icon"
          />
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "35vh",
            width: "150vh",
            textAlign: "center",
          }}
        >
          <h2>
            {dayTwo}
            <br></br>
            {mdyTwo}
          </h2>
          <h4>{weather[2] && weather[2]["description"]}</h4>
          <h5>{weather[2] && weather[2]["temperature"]}</h5>
          <img
            src={
              weather[2] &&
              `http://openweathermap.org/img/w/${weather[2]["icon"]}.png`
            }
            alt="Weather icon"
          />
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "35vh",
            width: "150vh",
            textAlign: "center",
          }}
        >
          <h2>
            {dayThree}
            <br></br>
            {mdyThree}
          </h2>
          <h4>{weather[3] && weather[3]["description"]}</h4>
          <h5>{weather[3] && weather[3]["temperature"]}</h5>
          <img
            src={
              weather[3] &&
              `http://openweathermap.org/img/w/${weather[3]["icon"]}.png`
            }
            alt="Weather icon"
          />
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "35vh",
            width: "150vh",
            textAlign: "center",
          }}
        >
          <h2>
            {dayFour}
            <br></br>
            {mdyFour}
          </h2>
          <h4>{weather[4] && weather[4]["description"]}</h4>
          <h5>{weather[4] && weather[4]["temperature"]}</h5>
          <img
            src={
              weather[4] &&
              `http://openweathermap.org/img/w/${weather[4]["icon"]}.png`
            }
            alt="Weather icon"
          />
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "35vh",
            width: "150vh",
            textAlign: "center",
          }}
        >
          <h2>
            {dayFive}
            <br></br>
            {mdyFive}
          </h2>
          <h4>{weather[5] && weather[5]["description"]}</h4>
          <h5>{weather[5] && weather[5]["temperature"]}</h5>
          <img
            src={
              weather[5] &&
              `http://openweathermap.org/img/w/${weather[5]["icon"]}.png`
            }
            alt="Weather icon"
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <h1 style={{ color: "white", textAlign: "center" }}> Outfit Table </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NewOutfit />
      </div>

      <table
        style={{
          textAlign: "center",
          margin: "0 auto",
          marginTop: "20px",
          color: "white",
        }}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Hat</th>
            <th>Top</th>
            <th>Bottom</th>
            <th>Shoe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {outfits.map((outfit) => (
            <tr key={outfit.id}>
              <td>
                {new Date(outfit.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td>
                <img
                  src={outfit.hat.picture}
                  alt="Hat"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </td>
              <td>
                <img
                  src={outfit.top.picture}
                  alt="Top"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </td>
              <td>
                <img
                  src={outfit.bottom.picture}
                  alt="Bottom"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </td>
              <td>
                <img
                  src={outfit.shoes.picture}
                  alt="shoe"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </td>
              <td>
                <button onClick={() => handleDeleteOutfit(outfit.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div></div>
    </div>
  );
}

export default Planner;
