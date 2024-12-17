import React, { useState } from "react";
import AddStorage from "@/components/ui/add-form-storage";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Search, File, Plus } from "lucide-react";
import { DialogStorage } from "@/components/DialogStorage";

export default function Storage() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const data = [
    { id: "INV001", name: "Sting", type: "Nước uống", cost: "8.000", sale: "20.000", stock: "30" },
    { id: "INV002", name: "Coca-Cola", type: "Nước uống", cost: "10.000", sale: "25.000", stock: "50" },
    { id: "INV003", name: "Pepsi", type: "Nước uống", cost: "9.000", sale: "22.000", stock: "40" },
    { id: "INV004", name: "Bánh mì kẹp", type: "Đồ ăn nhanh", cost: "15.000", sale: "35.000", stock: "20" },

  ];

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full flex p-4 relative">
      {/* Sidebar with filters */}
      <div className="w-[20%] flex flex-col space-y-6 mr-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Search</h3>
          <div className="relative">
            <Input placeholder="Search items..." className="rounded-lg pl-10" />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Loại thực đơn */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Loại thực đơn</h3>
          {["Đồ ăn", "Thức uống", "Khác"].map((label, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <Checkbox id={`menu-type-${index}`} />
              <label
                htmlFor={`menu-type-${index}`}
                className="text-sm font-medium"
              >
                {label}
              </label>
            </div>
          ))}
        </div>

        {/* Loại hàng */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Loại hàng</h3>
          {["Hàng hoá thường", "Chế biến", "Thiết bị"].map((label, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <Checkbox id={`item-type-${index}`} />
              <label
                htmlFor={`item-type-${index}`}
                className="text-sm font-medium"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="w-[80%]">
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-4">
          <h2 className="font-bold text-2xl text-black">Storage</h2>
          <div className="flex space-x-4">
            <Button
              className="bg-green-500 text-white rounded-lg px-4 flex items-center space-x-2"
              onClick={() => setShowAddForm(true)}
            >
              <Plus className="w-5 h-5" />
              <span>Thêm mới</span>
            </Button>
            <Button className="bg-yellow-500 text-white rounded-lg px-4 flex items-center space-x-2">
              <File className="w-5 h-5" />
              <span>Xuất file</span>
            </Button>
          </div>
        </div>

        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-700">
              {["Mã", "Tên", "Loại thực đơn", "Giá vốn", "Giá bán", "Tồn kho", ""].map(
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
                <TableCell className="py-2 px-4">{item.id}</TableCell>
                <TableCell className="py-2 px-4">{item.name}</TableCell>
                <TableCell className="py-2 px-4">{item.type}</TableCell>
                <TableCell className="py-2 px-4">{item.cost}</TableCell>
                <TableCell className="py-2 px-4">{item.sale}</TableCell>
                <TableCell className="py-2 px-4">{item.stock}</TableCell>
                <TableCell>
                  <DialogStorage triggerLabel="Edit" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
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

          <AddStorage />
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
