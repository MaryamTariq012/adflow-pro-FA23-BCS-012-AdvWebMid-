import { useState } from "react";
import { supabase } from "../supabase";

export default function AddAd() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async () => {
        const { error } = await supabase.from("ads").insert([
            { title, description }
        ]);

        if (error) {
            console.log(error);
            alert("Insert Error (check Supabase RLS)");
        } else {
            alert("Ad Added Successfully");
            setTitle("");
            setDescription("");
        }
    };

    return (
        <div className="bg-white p-4 shadow rounded mb-6">
            <h2 className="font-bold mb-2">Add Ad</h2>

            <input
                className="border p-2 w-full mb-2"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                className="border p-2 w-full mb-2"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2"
            >
                Submit
            </button>
        </div>
    );
}