import useToken from "@galvanize-inc/jwtdown-for-react";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-json-pretty/themes/monikai.css";
import "../index.css";

import { Link } from "react-router-dom";

export const Main = () => {
  const { token } = useToken();

  return (
    <>
      <section
        className="hero image-as-background"
        style={{
          backgroundImage:
            "url('https://media0.giphy.com/media/xT9KVgmGTooXz0iDPW/giphy.gif?cid=6c09b9527slpvckmql9sg3607qaqsptiekc907fr2g9pp5ih&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
          // width: "100%",
          // paddingLeft: "0",
          // height: "100%",
          // objectFit: "cover",
        }}
      >
        <div className="hero-container">
          <img
            className="hero-title animate fadeInUp delay-600"
            src="whatevr-logo-plain.png"
            alt="logo"
            height="150vh"
            width="10vh"
            style={{
              marginTop: "80px",
              justifyContent: "center",
              marginLeft: "100px",
            }}
          />
          <br />
          <br />
          <br />
          {!token && (
            <li style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/signup" className="nav-links-mobile">
                <button
                  href="#"
                  className="btn btn primary"
                  style={{
                    fontSize: "20px",
                    marginTop: "30px",
                  }}
                  title="Get started"
                >
                  New? Click Here
                </button>
              </Link>
            </li>
          )}
        </div>
      </section>
      {token && (
        <div className="parent" style={{ width: "100%", height: "500px" }}>
          <div
            className="whatevr"
            style={{
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "5px",
              border: "inset",
              borderColor: "#ffe978",
            }}
          >
            <h1 style={{ textShadow: "0 0 5px #000" }}>
              Plan an outfit with your own online Closet!
            </h1>
            <p style={{ textShadow: "0 0 5px #000" }}>
              Use our weather tracker to style the perfect outfit!
            </p>
            <li>
              <Link to="/planner" className="nav-links-mobile">
                <button className="btn btn primary" title="Plan an Outfit">
                  Plan an outfit!
                </button>
              </Link>
            </li>
          </div>
        </div>
      )}
      ;
      {token && (
        <div className="parent" style={{ width: "100%", height: "500px" }}>
          <div
            className="whatevr"
            style={{
              border: "inset",
              borderColor: "#ffe978",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <h1 style={{ textShadow: "0 0 5px #000" }}>
              View all of your clothing!
            </h1>
            <p style={{ textShadow: "0 0 5px #000" }}>
              your closet in the palm of your hands
            </p>
            <li>
              <Link to="/closet" className="nav-links-mobile">
                <button
                  className="btn btn primary"
                  title="Checkout your clothes!"
                >
                  Checkout your clothes!
                </button>
              </Link>
            </li>
          </div>
        </div>
      )}
      ;
    </>
  );
};
