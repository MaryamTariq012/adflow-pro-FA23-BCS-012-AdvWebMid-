import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function AdsList() {
    const [ads, setAds] = useState([]);

    const fetchAds = async () => {
        const { data, error } = await supabase.from("ads").select("*");

        if (error) {
            console.log(error);
        } else {
            setAds(data);
        }
    };

    useEffect(() => {
        fetchAds();
    }, []);

    return (
        <div className="bg-white p-4 shadow rounded">
            <h2 className="font-bold mb-2">All Ads</h2>

            {ads.length === 0 ? (
                <p>No ads found</p>
            ) : (
                ads.map((ad) => (
                    <div key={ad.id} className="border p-2 mb-2">
                        <h3>{ad.title}</h3>
                        <p>{ad.description}</p>
                    </div>
                ))
            )}
        </div>
    );
}