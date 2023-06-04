import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import "../index.css"

function Planner() {
  const [weather, setWeather] = useState([]);
  const [outfit, setOutfit] = useState(null);
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

  useEffect(() => {
    loadWeather();
  }, [token]);

  function MDYOfWeek(number) {
    let fullDay = weather[number] && weather[number]["time"];
    let date = new Date(fullDay);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${month}-${day}-${year}`;
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
            height: "35vh",
            width: "100vh",
            textAlign: "center",
          }}
        >
          <h2>
            {dayOne}
            <br></br>
            {mdyOne}
          </h2>
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "35vh",
            width: "100vh",
            textAlign: "center",
          }}
        >
          <h2>
            {dayTwo}
            <br></br>
            {mdyTwo}
          </h2>
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "35vh",
            width: "100vh",
            textAlign: "center",
          }}
        >
          <h2>
            {dayThree}
            <br></br>
            {mdyThree}
          </h2>
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "35vh",
            width: "100vh",
            textAlign: "center",
          }}
        >
          <h2>
            {dayFour}
            <br></br>
            {mdyFour}
          </h2>
        </div>
        <div
          className="card mb-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "35vh",
            width: "100vh",
            textAlign: "center",
          }}
        >
          <h2>
            <h2>
              {dayFive}
              <br></br>
              {mdyFive}
            </h2>
          </h2>
        </div>
      </div>
    </div>
  );
}



export default Planner;
