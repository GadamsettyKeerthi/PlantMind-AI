import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Search() {

  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");

  const searchDocument = async () => {

    if (keyword === "") {
      alert("Enter a keyword");
      return;
    }

    const response = await axios.get(
      "http://127.0.0.1:8000/search",
      {
        params: {
          keyword: keyword,
        },
      }
    );

    setResult(response.data.result);
  };

  return (
    <div>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 bg-gray-100 min-h-screen p-8">

          <h1 className="text-3xl font-bold mb-8">
            Search Documents
          </h1>

          <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl">

            <input
              type="text"
              placeholder="Enter keyword..."
              className="border p-3 rounded w-full"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            <button
              onClick={searchDocument}
              className="bg-blue-700 text-white px-6 py-3 rounded mt-5"
            >
              Search
            </button>

            <div className="mt-8">

              <h2 className="text-xl font-bold mb-3">
                Result
              </h2>

              <div className="bg-gray-100 p-5 rounded whitespace-pre-wrap">
                {result}
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Search;