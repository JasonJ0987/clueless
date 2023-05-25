import  useToken  from "@galvanize-inc/jwtdown-for-react";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-json-pretty/themes/monikai.css";
import TokenCard from "./TokenCard";
import UserDataCard from "./UserDataCard";
import SignUp from "./SignUp";
import Login from "./Login";

const ConsoleBanner = () => {
    const { logout } = useToken();

    return (
    <div>
    <div className="alert alert-info mt-3 mb-3" role="alert">
        <i className="bi bi-info-circle-fill"></i> Welcome to Whatevr
    </div>
    <div className="btn-group mb-3" role="group">
        <button className="btn btn-danger" onClick={logout}>
            Logout <i className="bi bi-box-arrow-left"></i>
        </button>
    </div>
    </div>
    );
};

export const Main = () => {
    const { token } = useToken();
    return (
    <div>
        <ConsoleBanner />
        {!token && <SignUp />}
        {!token && <Login />}
        {token && <TokenCard />}
        <UserDataCard />
    </div>
    );
};
