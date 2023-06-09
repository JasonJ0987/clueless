import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import { Main } from "./components/Main";
import ClosetView from "./components/ClosetView";
import NavBar from "./components/Navbar";
import BinView from "./components/BinView";
import WardrobeForm from "./components/WardrobeForm";
import WardrobeView from "./components/WardrobeView";
import Planner from "./components/Planner";
import ClothesForm from "./components/ClothingForm";
import "./index.css";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  const baseUrl = process.env.REACT_APP_WHATEVR;

  return (
    <AuthProvider baseUrl={baseUrl}>
      <BrowserRouter basename={basename}>
        <NavBar />
        <div className="container" id="outerdiv" style={{ padding: "0" }}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/wardrobe" element={<WardrobeForm />} />
            <Route exact path="/" element={<Main />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/planner" element={<Planner />} />
            <Route path="closet">
              <Route index element={<ClosetView />} />
              <Route path="bins/:binId" element={<BinView />} />
              <Route path="new" element={<ClothesForm />} />
            </Route>
            <Route path="wardrobe">
              <Route path="new" element={<WardrobeForm />} />
              <Route path=":wardrobeId/update" element={<WardrobeForm />} />
              <Route path=":wardrobeId" element={<WardrobeView />} />
            </Route>
            <Route path="planner" element={<Planner />}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
