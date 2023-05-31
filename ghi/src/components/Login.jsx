import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const { login, token } = useToken();
  const navigate = useNavigate();

  useEffect(
    () => {
        // console.log("token", token === null , email.isEmpty() , password.isEmpty());
      if (token) {
        setErrorMessage("");
        console.log(token);
        navigate("/");
      } else if (!token && email && password) {
        setErrorMessage("Username/password was entered incorrectly");
      }
    },
    [token]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`email: ${email} password: ${password}`);
    login(email, password);
    // try removing line 31
    // e.target.reset();
    // console.log("token:", token)
    // works if you hit login button twice, need to readdress
  };

  return (
    <div className="card text-bg-light mb-3">
      <h5 className="card-header">Login</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              name="email"
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <div>
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
