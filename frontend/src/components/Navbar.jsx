import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-blue-700 h-16 flex justify-between items-center px-8 text-white shadow">

      <div>
        <h1 className="text-2xl font-bold">
          PlantMind AI
        </h1>

        <p className="text-sm text-blue-100">
          Industrial Knowledge Intelligence
        </p>
      </div>

      <div className="flex items-center gap-3">
        <FaUserCircle size={34} />
        <span>Admin</span>
      </div>

    </div>
  );
}

export default Navbar;