import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineTable } from "react-icons/ai";
import { FaWarehouse } from "react-icons/fa";
import Storage from "./Storage";
import ManageRoomAndTable from "./ManageRoomAndTable";

export default function ManageEachBranch() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const branchId = queryParams.get("branchId");
  const branchName = queryParams.get("branchName");

  const [activeSection, setActiveSection] = useState("default");

  const sidebarItems = [
    {
      id: "storage",
      label: "Quản lý kho",
      icon: <FaWarehouse className="text-xl mr-3" />,
    },
    {
      id: "tables",
      label: "Quản lý bàn",
      icon: <AiOutlineTable className="text-xl mr-3" />,
    },

  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 text-center text-lg font-bold border-b border-gray-700">
          {branchName || "Quản Lý Chi Nhánh"}
        </div>
        <nav className="flex-grow p-4">
          <ul className="space-y-4">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition ${activeSection === item.id
                      ? "bg-gray-700 text-blue-300 font-semibold"
                      : "hover:bg-gray-700"
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700 text-center text-sm">
          © 2024 Billiards Management
        </div>
      </aside>

      <main className="flex-grow p-8">
        {activeSection === "storage" && <Storage branchId={branchId} />}
        {activeSection === "tables" && <ManageRoomAndTable />}
      </main>
    </div>
  );
}
