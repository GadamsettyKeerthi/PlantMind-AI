import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Summary() {

    const [summary, setSummary] = useState("");

    useEffect(() => {

        loadSummary();

    }, []);

    const loadSummary = async () => {

        try {

            const response = await axios.get(
                "http://127.0.0.1:8000/summary"
            );

            setSummary(response.data.summary);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div>

            <Navbar />

            <div className="flex">

                <Sidebar />

                <div className="flex-1 bg-gray-100 min-h-screen p-8">

                    <h1 className="text-3xl font-bold mb-8">
                        Document Summary
                    </h1>

                    <div className="bg-white rounded-xl shadow-lg p-8">

                        <h2 className="text-xl font-semibold mb-5">
                            Summary
                        </h2>

                        <div className="bg-gray-100 rounded-lg p-5 whitespace-pre-wrap leading-7">
                            {summary}
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Summary;