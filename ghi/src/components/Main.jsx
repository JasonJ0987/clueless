import useToken from "@galvanize-inc/jwtdown-for-react";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-json-pretty/themes/monikai.css";
import "../index.css";
// import TokenCard from "./TokenCard";
// import UserDataCard from "./UserDataCard";
// import SignUp from "./SignUp";
// import Login from "./Login";

// const ConsoleBanner = () => {
//     const { logout } = useToken();

//     return (
//     <div className="alert alert-info mt-3 mb-3" role="alert">
//         <i className="bi bi-info-circle-fill"></i> Welcome to Whatevr
//     </div>
//     );
// };

export const Main = () => {
  const { token } = useToken();
  return (
    <>
      <div className="px-4 py-5" id="background">
        {!token && <p className="whitetext">Please sign up</p>}
        {token && <p className="whitetext">Main Page</p>}
      </div>
      {/* <div className="parent">
        <div className="whatevr">
          <h1>wear it</h1>
          <p>blank</p>
        </div>
      </div>
      <div className="parent">
        <div className="whatevr">
          <h1>wear whatever</h1>
          <p>blank</p>
        </div>
      </div>
      <div className="parent">
        <div className="whatevr">
          <h1> come on</h1>
          <p>blank</p>
        </div>
      </div>
      <div className="parent">
        <div className="whatevr">
          <h1>do it</h1>
          <p>blank</p>
        </div>
      </div>
      <div className="parent">
        <div className="whatevr">
          <h1>i know you want to</h1>
          <p>blank</p>
        </div>
      </div> */}
    </>
  );
};
