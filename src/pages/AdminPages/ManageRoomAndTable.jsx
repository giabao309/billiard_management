import React, { useState } from "react";

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
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, File, Plus } from "lucide-react";
import AddRoomTableForm from "@/components/ui/add-form-tableRoom";
import { DialogTable } from "@/components/DialogEditTable";

export default function ManageRoomAndTable() {
  const [showAddForm, setShowAddForm] = useState(false); // State để mở/đóng form
  const [currentPage, setCurrentPage] = useState(1); // State cho trang hiện tại

  const itemsPerPage = 8; // Giới hạn 8 items mỗi trang

  // Dữ liệu giả lập
  const data = [
    { id: 1, tenPhongBan: "Phòng VIP 1", khuVuc: "Khu A", trangThai: "Đang sử dụng" },
    { id: 2, tenPhongBan: "Phòng 2", khuVuc: "Khu A", trangThai: "Sẵn sàng" },
    { id: 3, tenPhongBan: "Phòng 3", khuVuc: "Khu B", trangThai: "Đang bảo trì" },
    { id: 4, tenPhongBan: "Phòng VIP 2", khuVuc: "Khu B", trangThai: "Sẵn sàng" },
    { id: 5, tenPhongBan: "Phòng 4", khuVuc: "Khu C", trangThai: "Đang sử dụng" },
    { id: 6, tenPhongBan: "Phòng 5", khuVuc: "Khu C", trangThai: "Đang bảo trì" },
    { id: 7, tenPhongBan: "Phòng 6", khuVuc: "Khu A", trangThai: "Sẵn sàng" },
    { id: 8, tenPhongBan: "Phòng VIP 3", khuVuc: "Khu B", trangThai: "Đang sử dụng" },
    { id: 9, tenPhongBan: "Phòng 7", khuVuc: "Khu C", trangThai: "Sẵn sàng" },
    { id: 10, tenPhongBan: "Phòng 8", khuVuc: "Khu A", trangThai: "Đang bảo trì" },
  ];

  // Tính toán dữ liệu cho pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full flex p-4">
      {/* Sidebar with filters */}
      <div className="w-[20%] flex flex-col space-y-6 mr-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Tìm kiếm</h3>
          <div className="relative">
            <Input
              placeholder="Theo tên Phòng/Bàn"
              className="rounded-lg pl-10"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <div className="w-full">
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Chọn khu vực" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>QUẬN GÒ VẤP</SelectLabel>
                  <SelectItem value="est">* 62 Dương Quảng Hàm</SelectItem>
                  <SelectItem value="cst">* 48 Lê Lợi</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[80%]">
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-4">
          <h2 className="font-bold text-2xl text-black">Phòng/Bàn</h2>
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

        {/* Table */}
        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-700">
              {["STT", "Tên Phòng/Bàn", "Khu vực", "Trạng thái", ""].map(
                (header, index) => (
                  <TableHead key={index} className="font-semibold py-2 px-4">
                    {header}
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="py-2 px-4">
                  {startIndex + index + 1}
                </TableCell>
                <TableCell className="py-2 px-4">{item.tenPhongBan}</TableCell>
                <TableCell className="py-2 px-4">{item.khuVuc}</TableCell>
                <TableCell className="py-2 px-4">{item.trangThai}</TableCell>
                <TableCell>
                  <DialogTable triggerLabel="Edit" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => handlePageChange(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>


      {showAddForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">

          <AddRoomTableForm />
          <div className="flex justify-end mt-4">
            <Button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-500 text-white hover:bg-gray-600"
            >
              Đóng
            </Button>
          </div>
        </div>

      )}
    </div>
  );
}
