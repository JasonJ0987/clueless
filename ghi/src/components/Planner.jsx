import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../index.css"

function Planner() {
  const [weather, setWeather] = useState([]);
  const [outfits, setOutfits] = useState([]);
  const [week, setWeek] = useState([]);
  const [OOTDs, setOOTDs] = useState([]);
  const { token } = useToken();

  const loadWeather = async () => {
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
  };

  const loadOutfits = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe/`
    const response = await fetch(url, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        }
    })
    if (response.ok) {
        const data = await response.json();
        setOutfits(data.outfits)
    }
  }

  const loadWeeks = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/daylist`;
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
      setWeek(data);
    }
  };

  const outfitsOfTheWeek = outfits.filter(outfit => week.includes(outfit.day))

  useEffect(() => {
    loadWeather();
    loadOutfits();
    loadWeeks();
    console.log(weather && weather);
  }, [token]);
  console.log(outfitsOfTheWeek)


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
    let day = date.toLocaleDateString('en-US', {weekday: 'long'});
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

  const getOOTDs = async () => {
    const result = [];
    for (let outfit of outfitsOfTheWeek.enumerate()) {
        let map = {};
        map["outfit"] = outfit;
        map["day"] = outfit;
    }
  }


  return (
    <div>
      <div>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Schedule Your Week
        </h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ display: "flex", gap: "15px" }}>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "60vh",
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
          <div>
            <Link to="/wardrobe/647a2d53f636ca30ee73c12d/update">Style</Link>
            {/* <img
              style={{ height: "100px", width: "100px" }}
              src={outfitsOfTheWeek[0].hat.picture}
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitsOfTheWeek[0].top.picture}
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitsOfTheWeek[0].bottom.picture}
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitsOfTheWeek[0].shoes.picture}
            /> */}
          </div>
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "60vh",
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
          <div>
            <Link to="/wardrobe/647f7975953cfba2f4b189c1/update">Style</Link>
          </div>
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "60vh",
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
          <div>
            <Link to="/wardrobe/647f92f368399fff27804253/update">Style</Link>
          </div>
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "60vh",
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
          <div>
            <Link to="/wardrobe/647f930468399fff27804254/update">Style</Link>
          </div>
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "60vh",
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
          <div>
            <Link to="/wardrobe/647f931268399fff27804255/update">Style</Link>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Planner;
