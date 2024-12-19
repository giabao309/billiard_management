import React from "react";
import img_branch from "@/assets/branch.jpg";

export default function ManageBranch() {
  const branches = [
    {
      district: "QUẬN GÒ VẤP",
      locations: [
        { name: "62 Dương Quảng Hàm - Billiards Center" },
        { name: "48 Lê Lợi - Billiards Center" },
        { name: "144 Nguyễn Văn Lượng - Billiards Center" },
      ],
    },
    {
      district: "QUẬN BÌNH THẠNH",
      locations: [
        { name: "15 Võ Duy Ninh - Billiards Center" },
        { name: "360 Lê Quang Định - Billiards Center" },
        { name: "99 Nguyễn Hữu Cảnh - Billiards Center" },
      ],
    },
    {
      district: "QUẬN TÂN BÌNH",
      locations: [
        { name: "662 Âu Cơ - Billiards Center" },
        { name: "72 Ba Vân - Billiards Center" },
      ],
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="space-y-12">
        {branches.map((branch, branchIndex) => (
          <div key={branchIndex}>
            {/* Branch Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {branch.locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Image */}
                  <img
                    src={img_branch}
                    alt={location.name}
                    className="h-56 w-full object-cover"
                  />
                  {/* Info */}
                  <div className="p-6 flex flex-col justify-between h-48">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Đây là một trong những chi nhánh hàng đầu của chúng tôi.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <a
                        href="/admin/manageeachbranch"
                        className="bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600 transition"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
