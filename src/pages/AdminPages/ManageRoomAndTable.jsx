import React, { useState, useContext } from "react";
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
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, File, Plus } from "lucide-react";
import { DialogTable } from "@/components/DialogEditTable";
import { ManageContext } from "@/Context/ManageContext";

export default function ManageRoomAndTable() {
  const { dataTable } = useContext(ManageContext);

  const [showAddForm, setShowAddForm] = useState(false);

  const data = dataTable;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
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
      </div>

      {/* Main Content */}
      <div className="w-[80%]">
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-4">
          <h2 className="font-bold text-2xl text-black">Bàn</h2>
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
              {[
                "STT",
                "Tên Bàn",
                "Khu vực",
                "Loại bàn",
                "Trạng thái",
                "Giá",
                "",
              ].map((header, index) => (
                <TableHead key={index} className="font-semibold py-2 px-4">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="py-2 px-4">{item.id}</TableCell>
                <TableCell className="py-2 px-4">{item.name}</TableCell>
                <TableCell className="py-2 px-4">{item.floor}</TableCell>
                <TableCell className="py-2 px-4">{item.type}</TableCell>
                <TableCell className="py-2 px-4">{item.status}</TableCell>
                <TableCell className="py-2 px-4">
                  {item.price.toLocaleString()}
                </TableCell>
                <TableCell>
                  <DialogTable selectedTable={item} />
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
    </div>
  );
}
