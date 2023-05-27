import  useToken  from "@galvanize-inc/jwtdown-for-react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [zipcode, setZipcode] = useState("");
    const { register } = useToken();
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();
        const accountData = {
            email: email,
            username: username,
            password: password,
            confirm_password: confirmPassword,
            first: firstName,
            last: lastName,
            zipcode: zipcode
        };
        register(
            accountData,
            `${process.env.REACT_APP_WHATEVR}/api/accounts`
        );
        e.target.reset();
        navigate("/");
    };

    return(
        <div className="card text-bg-light mb-3">
            <h5 className="card-header">Registration</h5>
            <div className="card-body">
                <form onSubmit={(e) => handleRegistration(e)}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                            name="first"
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                            name="last"
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                            name="confirm_password"
                            type="password"
                            className="form-control"
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Zip Code</label>
                        <input
                            name="zipcode"
                            type="number"
                            className="form-control"
                            onChange={(e) => {
                                setZipcode(e.target.value);
                            }}
                        />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Signup;
