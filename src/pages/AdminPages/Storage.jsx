import React, { useState, useEffect } from "react";
import AddStorage from "@/components/ui/add-form-storage";
import {
  fetchWarehouseData,
  searchWarehouseByServiceName,
} from "@/APIs/BilliardApi";
import { deleteWarehouseItem } from "@/APIs/BilliardApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { Search, Plus, Trash2 } from "lucide-react";
import { DialogStorage } from "@/components/DialogStorage";

export default function Storage({ branchId }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 8;

  // Fetch warehouse data
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (branchId) {
          const response = await fetchWarehouseData(branchId);
          setData(response);
        }
      } catch (error) {
        console.error("Error fetching warehouse data:", error.message);
      }
    };

    fetchData();
  }, [branchId]);

  // Handle search
  const handleSearch = async () => {
    if (!searchQuery.trim()) return; // Prevent empty search
    setLoading(true);
    try {
      const result = await searchWarehouseByServiceName(branchId, searchQuery);
      setData(result);
    } catch (error) {
      console.error("Error searching warehouse data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Reset search
  const handleResetSearch = async () => {
    setSearchQuery("");
    try {
      const response = await fetchWarehouseData(branchId);
      setData(response);
    } catch (error) {
      console.error("Error resetting warehouse data:", error.message);
    }
  };

  const handleDelete = async (itemId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa mục này?")) {
      try {
        await deleteWarehouseItem(itemId);
        setData((prevData) =>
          prevData.filter((item) => item.item_id !== itemId)
        );
        console.log(`Deleted item with ID: ${itemId}`);
      } catch (error) {
        console.error("Error deleting item:", error.message);
        alert("Đã xảy ra lỗi khi xóa mục.");
      }
    }
  };

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full flex p-4 relative">
      {/* Sidebar */}
      <div className="w-[20%] flex flex-col space-y-6 mr-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Tìm kiếm</h3>
          <div className="flex space-x-2">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Nhập tên sản phẩm"
              className="rounded-lg pl-10"
            />
            <Button
              className="bg-blue-500 text-white rounded-md"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Đang tìm..." : <Search />}
            </Button>
            <Button
              className="bg-gray-300 text-black rounded-md"
              onClick={handleResetSearch}
            >
              Đặt lại
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[80%]">
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-4">
          <h2 className="font-bold text-2xl text-black">Danh sách kho</h2>
          <div className="flex space-x-4">
            <Button
              className="bg-green-500 text-white rounded-lg px-4 flex items-center space-x-2"
              onClick={() => setShowAddForm(true)}
            >
              <Plus className="w-5 h-5" />
              <span>Thêm mới</span>
            </Button>
          </div>
        </div>

        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-700">
              {["Mã", "Tên", "Loại", "Giá bán", "Số lượng", ""].map(
                (header, index) => (
                  <TableHead key={index} className="font-semibold py-2 px-4">
                    {header}
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="py-2 px-4">{item.item_id}</TableCell>
                <TableCell className="py-2 px-4">{item.service_name}</TableCell>
                <TableCell className="py-2 px-4">
                  {item.service_category_name}
                </TableCell>
                <TableCell className="py-2 px-4">{item.entry_price}</TableCell>
                <TableCell className="py-2 px-4">
                  {item.entry_quantity}
                </TableCell>
                <TableCell className="py-2 px-4 flex space-x-2">
                  <DialogStorage triggerLabel="Chỉnh sửa" />
                  <Button
                    variant="outline"
                    className="bg-red-500 text-white hover:bg-red-600 flex items-center"
                    onClick={() => handleDelete(item.item_id)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination className="mt-6 justify-start">
          <PaginationContent className="flex items-center justify-start space-x-2">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <AddStorage onClose={() => setShowAddForm(false)} />
        </div>
      )}
    </div>
  );
}
