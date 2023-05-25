import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import SignupForm from "./components/SignUp";
import Login from "./components/Login";
import { Main } from "./components/Main";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  const baseUrl = "http://localhost:8000";

  return (
    <AuthProvider baseUrl={baseUrl}>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/signup" element={<SignupForm />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            {/* <Route exact path='/logout' element={<LogoutForm />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
