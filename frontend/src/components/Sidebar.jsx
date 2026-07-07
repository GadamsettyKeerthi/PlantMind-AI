import {
  FaChartPie,
  FaUpload,
  FaRobot,
  FaSearch,
  FaFileAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-slate-900 text-white w-64 min-h-screen p-6">

      <h2 className="text-xl font-bold mb-10">
        MENU
      </h2>

      <ul className="space-y-6">

        <li>
          <Link
            to="/"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaChartPie />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/upload"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaUpload />
            Upload Documents
          </Link>
        </li>

        <li>
          <Link
            to="/chat"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaRobot />
            AI Chat
          </Link>
        </li>

        <li>
          <Link
            to="/search"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaSearch />
            Search
          </Link>
        </li>

        <li>
          <Link
            to="/summary"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaFileAlt />
            Summary
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;