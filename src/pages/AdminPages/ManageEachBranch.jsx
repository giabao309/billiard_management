import React, { useState } from "react";
import { AiOutlineHome, AiOutlineTable } from "react-icons/ai";
import { FaWarehouse } from "react-icons/fa";
import Storage from "./Storage";
import ManageRoomAndTable from "./ManageRoomAndTable";
import AddFormTableRoom from "@/components/ui/add-form-tableRoom";

export default function ManageEachBranch() {
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
        {
            id: "floors",
            label: "Quản lý lầu",
            icon: <AiOutlineHome className="text-xl mr-3" />,
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                {/* Header */}
                <div className="p-6 text-center text-lg font-bold border-b border-gray-700">
                    Quản Lý Chi Nhánh
                </div>

                {/* Navigation */}
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

                {/* Footer */}
                <div className="p-4 border-t border-gray-700 text-center text-sm">
                    © 2024 Billiards Management
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-8">
                {/* Render Content Based on Active Section */}
                {activeSection === "storage" && <Storage />}
                {activeSection === "tables" && <ManageRoomAndTable />}
                {/* {activeSection === "floors" && }  */}

            </main>
        </div>
    );
}
