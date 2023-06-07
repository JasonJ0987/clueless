import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../index.css"

function Planner() {
  const [weather, setWeather] = useState([]);
  const [outfitOne, setOutfitOne] = useState(null);
  const [outfitTwo, setOutfitTwo] = useState(null);
  const [outfitThree, setOutfitThree] = useState(null);
  const [outfitFour, setOutfitFour] = useState(null);
  const [outfitFive, setOutfitFive] = useState(null);
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

//   const loadOutfits = async () => {
//     const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe`;
//     const fetchConfig = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//     };
//     const response = await fetch(url, fetchConfig);
//     if (response.ok) {
//         const data = await response.json();
//         setIdA(data.outfits[0].id);
//         setIdB(data.outfits[1].id);
//         setIdC(data.outfits[2].id);
//         setIdD(data.outfits[3].id);
//         setIdE(data.outfits[4].id);
//         console.log(idA && idA);
//     }
//   }

  const loadOutfitOne = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe/647a2d53f636ca30ee73c12d`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
    const data = await response.json();
    setOutfitOne(data)
    }
  }

  const loadOutfitTwo = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe/647f7975953cfba2f4b189c1`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
    const data = await response.json();
    setOutfitTwo(data);
    }
  }

  const loadOutfitThree = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe/647f92f368399fff27804253`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
    const data = await response.json();
    setOutfitThree(data)
    }
  }

  const loadOutfitFour = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe/647f930468399fff27804254`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
    const data = await response.json();
    setOutfitFour(data)
    }
  }

  const loadOutfitFive = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/wardrobe/647f931268399fff27804255`;
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
    const data = await response.json();
    setOutfitFive(data)
    }
  }


  useEffect(() => {
    loadWeather();
    loadOutfits();
    loadOutfitOne();
    loadOutfitTwo();
    loadOutfitThree();
    loadOutfitFour();
    loadOutfitFive();
  }, [token]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//         let oldA = idA && idA;
//         setIdA(idB && idB);
//         setIdB(idC && idC);
//         setIdC(idD && idD);
//         setIdD(idE && idE);
//         setIdE(oldA);
//         loadOutfitOne();
//         loadOutfitTwo();
//         loadOutfitThree();
//         loadOutfitFour();
//         loadOutfitFive();
//         console.log("interval");
//     }, 30*1000);
//     return () => clearInterval(interval);
//   }, []);


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
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitOne && outfitOne.hat.picture}
              alt="hat"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitOne && outfitOne.top.picture}
              alt="top"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitOne && outfitOne.bottom.picture}
              alt="bottom"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitOne && outfitOne.shoes.picture}
              alt="shoe"
            />
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
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitTwo && outfitTwo.hat.picture}
              alt="hat"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitTwo && outfitTwo.top.picture}
              alt="top"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitTwo && outfitTwo.bottom.picture}
              alt="bottom"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitTwo && outfitTwo.shoes.picture}
              alt="shoe"
            />
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
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitThree && outfitThree.hat.picture}
              alt="hat"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitThree && outfitThree.top.picture}
              alt="top"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitThree && outfitThree.bottom.picture}
              alt="bottom"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitThree && outfitThree.shoes.picture}
              alt="shoe"
            />
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
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitFour && outfitFour.hat.picture}
              alt="hat"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitFour && outfitFour.top.picture}
              alt="top"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitFour && outfitFour.bottom.picture}
              alt="bottom"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitFour && outfitFour.shoes.picture}
              alt="shoe"
            />
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
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitFive && outfitFive.hat.picture}
              alt="hat"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitFive && outfitFive.top.picture}
              alt="top"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitFive && outfitFive.bottom.picture}
              alt="bottom"
            />
            <img
              style={{ height: "100px", width: "100px" }}
              src={outfitFive && outfitFive.shoes.picture}
              alt="shoe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Planner;
