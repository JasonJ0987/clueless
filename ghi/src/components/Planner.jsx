import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import "../index.css"

function Planner() {
  const [weather, setWeather] = useState([]);
  const [hats, setHats] = useState([]);
  const [hat, setHat] = useState(null);
  const [tops, setTops] = useState([]);
  const [top, setTop] = useState(null);
  const [bottoms, setBottoms] = useState([]);
  const [bottom, setBottom] = useState(null);
  const [shoes, setShoes] = useState([]);
  const [shoe, setShoe] = useState(null);
  const { token } = useToken();

  // need usestate for each different day !!!

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

  const loadHats = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/646bc0f74277954dd0f38117/clothes`;
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
        setHats(data.clothes)
    }
  }

  const loadTops = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/646beb5724b33168d5719493/clothes`;
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
      setTops(data.clothes);
    }
  };

  const loadBottoms = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/647659f829d0764ee8697289/clothes`;
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
      setBottoms(data.clothes);
    }
  };

  const loadShoes = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet/646b99c3f2cd73044cf5707d/bins/64765a3929d0764ee869728a/clothes`;
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
      setShoes(data.clothes);
    }
  };

  useEffect(() => {
    loadWeather();
    loadHats();
    loadTops();
    loadBottoms();
    loadShoes();
  }, [token]);

  const handleHatChange = (event) => {
    const value = event.target.value;
    setHat(value);
  }

  const handleTopChange = (event) => {
    const value = event.target.value;
    setHat(value);
  }

  const handleBottomChange = (event) => {
    const value = event.target.value;
    setBottom(value);
  }

  const handleShoeChange = (event) => {
    const value = event.target.value;
    setShoe(value);
  }

  // function MDYOfWeek(number) {
  //   let fullDay = weather[number] && weather[number]["time"];
  //   let date = new Date(fullDay);
  //   let day = date.getDate();
  //   let month = date.getMonth() + 1;
  //   let year = date.getFullYear();
  //   return `${month}-${day}-${year}`;
  // }

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

  console.log('hat', hat)

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

          </div>
        </div>
      </div>
    </div>
  );
};



export default Planner;
