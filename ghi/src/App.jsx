import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ErrorNotification from "./ErrorNotification";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import SignupForm from "./components/SignUp";
import Login from "./components/Login";
import { Main } from "./components/Main";
import ClosetView from "./components/ClosetView";
import NavBar from "./components/Navbar";
import BinView from "./components/BinView";
import './index.css'

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  const baseUrl = "http://localhost:8000";

  return (
    <AuthProvider baseUrl={baseUrl}>
        <BrowserRouter>
          <NavBar />
          <div className="container" id="outerdiv" style={{ padding: '0' }}>
            <Routes>
                <Route exact path="/" element={<Main />}></Route>
                <Route exact path="/signup" element={<SignupForm />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route path="/closet" >
                    <Route index element={<ClosetView />}/>
                    <Route path="/bins/:id" element={<BinView />} />
                </Route>
            </Routes>
          </div>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
