import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-gray-100 min-h-screen p-8">

          <h1>PlantMind AI – Industrial Knowledge Intelligence</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

            <StatCard
              title="Uploaded Files"
              value="1"
              color="text-blue-600"
            />

            <StatCard
              title="Searches"
              value="5"
              color="text-green-600"
            />

            <StatCard
              title="AI Chats"
              value="3"
              color="text-purple-600"
            />

            <StatCard
              title="Summaries"
              value="2"
              color="text-orange-600"
            />

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-semibold mb-4">
              Welcome to PlantMind AI
            </h2>

            <p className="text-gray-700 leading-8">
              PlantMind AI centralizes industrial knowledge by allowing engineers to upload maintenance records, SOPs, inspection reports, engineering drawings, manuals, and compliance documents. Using Retrieval-Augmented Generation (RAG), it delivers intelligent answers, maintenance insights, and compliance assistance from a unified knowledge base.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
