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

          <h1 className="text-4xl font-bold mb-2 text-gray-800">
            🤖 Expert Knowledge Copilot
          </h1>

          <p className="text-gray-600 mb-8">
            Ask engineering, maintenance, compliance, and operational questions
            about the uploaded industrial documents using Retrieval-Augmented
            Generation (RAG).
          </p>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl">

            <h2 className="text-xl font-semibold mb-4">
              Example Questions
            </h2>

            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>What is the maintenance history of Pump P-101?</li>
              <li>Summarize the uploaded Standard Operating Procedure (SOP).</li>
              <li>List all safety precautions mentioned for Boiler B-2.</li>
              <li>Are there any compliance gaps in the uploaded documents?</li>
              <li>What recurring equipment failures are reported?</li>
              <li>Generate a Root Cause Analysis (RCA) from the inspection reports.</li>
            </ul>

            <textarea
              rows="6"
              placeholder="Ask a question about maintenance records, engineering drawings, SOPs, inspection reports, compliance documents, or equipment manuals..."
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <button
              onClick={askQuestion}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg mt-5 hover:bg-blue-800 transition"
            >
              Ask PlantMind AI
            </button>

            {answer && (
              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h2 className="text-xl font-bold mb-3 text-blue-800">
                  AI Response
                </h2>

                <p className="text-gray-800 leading-8">
                  {answer}
                </p>

                <div className="mt-6 border-t pt-4 text-sm text-gray-600">
                  <strong>Source:</strong> Retrieved from uploaded industrial documents using RAG.
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Chat;
