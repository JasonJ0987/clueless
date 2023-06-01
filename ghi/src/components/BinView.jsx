import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BinView() {
    const [closets, setClosets] = useState(null);
    const [closetId, setClosetId] = useState("");
    const [bin, setBin] = useState(null);
    const [clothes, setClothes] = useState(null);
    const [userId, setUserId] = useState("");
    // const [clothesId, setClothesId] = useState("");
    const { token } = useToken();
    const { binId } = useParams();

    const loadCloset = async () => {
    const url = `${process.env.REACT_APP_WHATEVR}/api/closet`;
    const fetchConfig = {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
        const data = await response.json();
        setClosets(data.closets);
        setClosetId(data.closets[0].id);
        }
    };

    const loadBins = async () => {
        const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closetId}/bins/${binId}`;
        const fetchConfig = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
        const data = await response.json();
        setBin(data);
        }
    };

    const loadUser = async () => {
        const url = `${process.env.REACT_APP_WHATEVR}/token`;
        fetch(url, {
        credentials: "include",
        })
        .then((response) => response.json())
        .then((data) => {
            setUserId(data.account.id);
        })
        .catch((error) => console.error(error));
    };

    const loadClothes = async () => {
        const url = `${process.env.REACT_APP_WHATEVR}/api/closet/${closetId}/bins/${binId}/clothes`;
        const fetchConfig = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const data = await response.json();
            setClothes(data.clothes)
        }
    };

    useEffect(() => {loadCloset();}, [token]);
    useEffect(() => { if (closetId !== "") loadBins(); loadUser();}, [closetId]);
    useEffect(() => { if (closetId !== "") loadClothes();}, [closetId]);

    return (
        <div>
            <h1>{ bin && bin.name }</h1>
            { clothes && clothes.map((item) => (
                <div className="card mb-5" style={{ width: "33vw", height: "25vh" }} key={item.id}>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.primary_color}</p>
                        <p className="card-text">{item.type}</p>
                    </div>
                </div>
            )
            )}
        </div>
    );
}

export default BinView;
