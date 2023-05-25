import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import { Main } from "./components/Main";



function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  return (
    <div className="container">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<Main />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            {/* <Route exact path='/logout' element={<LogoutForm />}></Route> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;