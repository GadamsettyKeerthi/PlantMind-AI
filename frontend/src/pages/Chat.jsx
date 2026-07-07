import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    if (question.trim() === "") {
      alert("Please enter a question.");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", {
        question: question,
      });

      setAnswer(res.data.answer);
    } catch (err) {
      console.log(err);
      alert("Backend is not running.");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-gray-100 min-h-screen p-8">
          <h1 className="text-3xl font-bold mb-8">
            AI Chat
          </h1>

          <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl">

            <textarea
              rows="5"
              placeholder="Ask a question about the uploaded document..."
              className="w-full border rounded p-3"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <button
              onClick={askQuestion}
              className="bg-blue-700 text-white px-6 py-3 rounded mt-4 hover:bg-blue-800"
            >
              Ask AI
            </button>

            {answer && (
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <h2 className="font-bold mb-2">Answer</h2>
                <p>{answer}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;