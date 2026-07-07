import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Upload() {

  const [file, setFile] = useState(null);

  const uploadFile = async () => {

    if (!file) {
      alert("Please choose a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);

    } catch (error) {

      console.log(error);

      alert("Upload Failed");

    }

  };

  return (
    <div>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 bg-gray-100 min-h-screen p-8">

          <h1 className="text-3xl font-bold mb-8">
            Upload Documents
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl">

            <h2 className="text-xl font-semibold mb-4">
              Upload PDF
            </h2>

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="border p-3 rounded w-full"
            />

            <button
              onClick={uploadFile}
              className="bg-blue-700 text-white px-6 py-3 rounded mt-6 hover:bg-blue-800"
            >
              Upload
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Upload;