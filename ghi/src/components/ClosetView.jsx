import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect,  } from 'react';
import { useNavigate } from "react-router-dom";

function ClosetView() {
    const [closets, setClosets] = useState([]);
    const [bins, setBins] = useState([]);
    const { token } = useToken();

    const loadCloset = async () => {
        const url = `${process.env.REACT_APP_WHATEVR}/api/closet`;
        const fetchConfig = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(url, fetchConfig, {credentials: "include",});
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setClosets(data);
        }
    };

    useEffect(() => {loadCloset();},[token]);
    // useEffect(() => {
    //     if (!token) {
    //         navigate('/login');
    //     } else {
    //         loadCloset();
    //     }
    // }, [token, navigate]);


    // const loadBins = async () => {
    //     const response = await fetch(`http://localhost:8000/api/closet/${closet_id}/bins`);
    //     if (response.ok) {
    //         const data = await response.json();
    //         setBins(data.closets.filter(
    //             closet => closet.id===closet_id
    //         ))
    //     }
    // }

    return(
        <div>
        </div>
    );
};


export default ClosetView;
