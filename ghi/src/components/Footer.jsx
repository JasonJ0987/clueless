import React from "react";

const Footer = () => {
  return (
    <div className="container my-5">
      <footer style={{ backgroundColor: "#1f2029" }}>
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 className="mb-3 text-light">I Wear Whatevr</h5>
              <p>
                You have more fun when you wear whatever! No longer spend hours tearing apart your closet, now plan the perfect outfit with our weather tracker and outfit visualizer! How high tech!
              </p>
            </div>
            {/* Add other footer content here */}
          </div>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          ©2023- I Wear Whatevr!
          <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
