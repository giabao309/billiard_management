import React, { useState } from "react";
import img_branch from "@/assets/branch.jpg";
import { useGetBranches, createBranch } from "@/APIs/BilliardApi";

export default function ManageBranch() {
  const { branches, loading, error } = useGetBranches();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    district: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddBranch = async () => {
    try {
      await createBranch(formData);
      alert("Thêm mới chi nhánh thành công!");
      window.location.reload();
    } catch (err) {
      console.error("Lỗi khi thêm chi nhánh:", err.message);
      alert("Thêm mới chi nhánh thất bại!");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Group branches by district
  const groupedBranches = branches.reduce((acc, branch) => {
    const { branch_district, branch_id, branch_name, branch_phone } = branch;
    if (!acc[branch_district]) acc[branch_district] = [];
    acc[branch_district].push({
      id: branch_id,
      name: branch_name,
      phone: branch_phone,
    });
    return acc;
  }, {});

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          + Thêm mới chi nhánh
        </button>
      </div>

      <div className="space-y-12">
        {Object.keys(groupedBranches).map((district, districtIndex) => (
          <div key={districtIndex}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                {district}
              </h2>
              <div className="w-full border-b border-gray-300"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedBranches[district].map((location, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img src={img_branch} className="h-56 w-full object-cover" />
                  <div className="p-6 flex flex-col justify-between h-48">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {location.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Số điện thoại: {location.phone}
                    </p>
                    <div className="mt-4 flex justify-between">
                      <a
                        href={`/admin/manageeachbranch?branchId=${
                          location.id
                        }&branchName=${encodeURIComponent(location.name)}`}
                        className="bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600 transition"
                      >
                        Xem chi tiết
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Thêm mới chi nhánh</h2>
            <input
              type="text"
              name="id"
              placeholder="Tên chi nhánh"
              value={formData.id}
              onChange={handleChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="name"
              placeholder="Địa chỉ"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Quận"
              value={formData.address}
              onChange={handleChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="district"
              placeholder="Số điện thoại"
              value={formData.district}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Hủy
              </button>
              <button
                onClick={handleAddBranch}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
