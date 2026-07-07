import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderOpen,
  Bot,
  Wrench,
  ShieldCheck,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={22} />,
      path: "/",
    },
    {
      name: "Document Repository",
      icon: <FolderOpen size={22} />,
      path: "/upload",
    },
    {
      name: "Expert Knowledge Copilot",
      icon: <Bot size={22} />,
      path: "/chat",
    },
    {
      name: "Maintenance Intelligence",
      icon: <Wrench size={22} />,
      path: "/search",
    },
    {
      name: "Compliance Intelligence",
      icon: <ShieldCheck size={22} />,
      path: "/summary",
    },
  ];

  return (
    <div className="w-72 min-h-screen bg-slate-900 text-white">

      <div className="text-3xl font-bold p-6 border-b border-slate-700">
        MENU
      </div>

      <div className="mt-4">

        {menus.map((menu) => (
          <Link
            key={menu.name}
            to={menu.path}
            className={`flex items-center gap-4 px-6 py-4 text-lg transition duration-200
              ${
                location.pathname === menu.path
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`}
          >
            {menu.icon}
            {menu.name}
          </Link>
        ))}

      </div>
    </div>
  );
}

export default Sidebar;
