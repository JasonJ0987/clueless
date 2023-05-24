import  useToken  from "@galvanize-inc/jwtdown-for-react";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-json-pretty/themes/monikai.css";
import TokenCard from "./TokenCard";
import UserDataCard from "./UserDataCard";
import SignUp from "./SignUp";

const ConsoleBanner = () => {
     return (
     <div className="alert alert-info mt-3 mb-3" role="alert">
          <i className="bi bi-info-circle-fill"></i> Welcome to Whatevr
     </div>
     );
};

export const Main = () => {
     const { token } = useToken();
     return (
     <div>
          <ConsoleBanner />
          {!token && <SignUp />}
          {token && <TokenCard />}
          <UserDataCard />
     </div>
     );
};
