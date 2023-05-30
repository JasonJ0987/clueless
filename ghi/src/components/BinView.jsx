import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BinView() {
    const [closets, setClosets] = useState(null);
    const [closetId, setClosetId] = useState("");
    const [bin, setBin] = useState(null);
    const [clothes, setClothes] = useState(null);
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
            console.log(data)
        }
    };

    useEffect(() => {loadCloset();}, [token]);
    useEffect(() => { if (closetId !== "") loadBins();}, [closetId]);
    useEffect(() => { if (closetId !== "") loadClothes();}, [closetId]);

    return (
        <div>
            <h1>{ bin && bin.name }</h1>
            { clothes && clothes.map((item) => (
                <div className="card mb-5" style={{ width: "33vw", height: "25vh" }} key={item.id}>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                    {/* <div className="card-footer">
                        { item.tag }
                    </div> */}

                    </div>
                </div>
            )
            )}
        </div>
    );
}

export default BinView;
