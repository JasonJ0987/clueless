import  useToken  from "@galvanize-inc/jwtdown-for-react";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-json-pretty/themes/monikai.css";
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
      <div className="px-4 py-5 " id="background">
        {!token && <p className="whitetext">Please sign up</p>}
        {token && <p className="whitetext">Main Page</p>}
      </div>
    );
};
