import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zipcode, setZipcode] = useState("");
  const { register, login } = useToken();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const accountData = {
      email: email,
      username: username,
      password: password,
      confirm_password: confirmPassword,
      first: firstName,
      last: lastName,
      zipcode: zipcode,
    };
    register(accountData, `${process.env.REACT_APP_WHATEVR}/api/accounts`);
    login(accountData.email, accountData.password);
    e.target.reset();
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "#1f2029", minHeight: "100vh", paddingTop: "10px"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card-3d-wrap mx-auto"
              style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)", height: "800px" }}
            >
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3"> Sign Up Here! </h4>
                      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", maxHeight: "600px"}}>
                        <div className="form-group">
                          <label className="form-label"style={{marginTop:"5px"}}>Username:</label>
                          <input
                            name="username"
                            placeholder="Choose a username..."
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label" style={{marginTop:"5px"}}>First Name:</label>
                          <input
                            name="first"
                            placeholder="First name..."
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label"s tyle={{marginTop:"5px"}}>Last Name:</label>
                          <input
                            name="last"
                            placeholder="Last name..."
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label"style={{marginTop:"5px"}}>Email:</label>
                          <input
                            name="email"
                            placeholder="Enter an email"
                            type="email"
                            className="form-control"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label"style={{marginTop:"5px"}}>Password:</label>
                          <input
                            name="password"
                            placeholder="Set a password..."
                            type="password"
                            className="form-control"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label" style={{marginTop:"5px"}}>
                            Confirm Password:
                          </label>
                          <input
                            name="confirm_password"
                            placeholder="Retype password..."
                            type="password"
                            className="form-control"
                            onChange={(e) => {
                              setConfirmPassword(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label"style={{marginTop:"5px"}}>Zip Code:</label>
                          <input
                            name="zipcode"
                            placeholder="Enter zipcode..."
                            type="number"
                            className="form-control"
                            onChange={(e) => {
                              setZipcode(e.target.value);
                            }}
                          />
                        </div>
                        <input
                          className="btn btn-primary"
                          type="submit"
                          value="Register"
                          style={{marginTop: "25px"}}
                        />
                      </form>
                    </div>
                     <p href= "#" style={{color: "white", textAlign: "center", marginTop: "20px"}}>Already signed up? <Link to="/login" href= "#" style={{color: "white"}}>Log in Here!</Link></p>
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

export default Signup;
