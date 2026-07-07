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

          {/* Dashboard Title */}
          <h1 className="text-5xl font-bold mb-8 text-gray-800">
            PlantMind AI – Industrial Knowledge Intelligence
          </h1>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

            <StatCard
              title="Industrial Documents"
              value="1"
              color="text-blue-600"
            />

            <StatCard
              title="Equipment Records"
              value="5"
              color="text-green-600"
            />

            <StatCard
              title="AI Knowledge Queries"
              value="3"
              color="text-purple-600"
            />

            <StatCard
              title="Compliance Checks"
              value="2"
              color="text-orange-600"
            />

          </div>

          {/* Welcome Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-5 text-gray-800">
              Welcome to PlantMind AI – Industrial Knowledge Intelligence Platform
            </h2>

            <p className="text-gray-700 text-lg leading-8">
              PlantMind AI is an AI-powered Industrial Knowledge Intelligence Platform
              designed for manufacturing, energy, and asset-intensive industries.
              Engineers can upload maintenance records, SOPs, inspection reports,
              engineering drawings, equipment manuals, and compliance documents into
              a unified knowledge repository.
            </p>

            <p className="text-gray-700 text-lg leading-8 mt-4">
              Using <strong>Retrieval-Augmented Generation (RAG)</strong>, the platform
              provides instant answers, maintenance recommendations, operational
              insights, document summarization, and regulatory compliance assistance
              from a centralized industrial knowledge base.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

              <div className="bg-blue-50 p-5 rounded-lg shadow">
                <h3 className="font-bold text-blue-700 text-lg">
                  📄 Intelligent Document Repository
                </h3>
                <p className="mt-2 text-gray-700">
                  Upload engineering drawings, SOPs, manuals,
                  inspection reports, and maintenance logs.
                </p>
              </div>

              <div className="bg-green-50 p-5 rounded-lg shadow">
                <h3 className="font-bold text-green-700 text-lg">
                  🤖 AI Knowledge Copilot
                </h3>
                <p className="mt-2 text-gray-700">
                  Ask engineering and maintenance questions with
                  context-aware AI responses generated using RAG.
                </p>
              </div>

              <div className="bg-orange-50 p-5 rounded-lg shadow">
                <h3 className="font-bold text-orange-700 text-lg">
                  ✅ Compliance Intelligence
                </h3>
                <p className="mt-2 text-gray-700">
                  Detect compliance gaps, summarize regulations,
                  and assist with industrial audits.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
