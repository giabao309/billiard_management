import React from "react";
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

import { Search, File, Plus, Import } from "lucide-react";
import { DialogDemo } from "@/components/Dialog";

export default function Storage() {
  return (
    <div className="w-full flex p-4">
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

      {/* Main content with table and actions */}
      <div className="w-[80%]">
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-4">
          <h2 className="font-bold text-2xl text-blue-600">Storage</h2>
          <div className=" flex space-x-4">
            <Button className="bg-green-500 text-white rounded-lg px-4 flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Thêm mới</span>
            </Button>
            <Button className="bg-yellow-500 text-white rounded-lg px-4 flex items-center space-x-2">
              <File className="w-5 h-5" />
              <span>Xuất file</span>
            </Button>
          </div>
        </div>
        {/* Table */}
        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-700">
              {[
                "Mã",
                "Tên",
                "Loại thực đơn",
                "Giá vốn",
                "Giá bán",
                "Tồn kho",
                "",
              ].map((header, index) => (
                <TableHead key={index} className="font-semibold py-2 px-4">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                id: "INV001",
                name: "Sting",
                type: "Nước uống",
                cost: "8.000",
                sale: "20.000",
                stock: "30",
              },
              {
                id: "INV002",
                name: "Coca-Cola",
                type: "Nước uống",
                cost: "10.000",
                sale: "25.000",
                stock: "50",
              },
              {
                id: "INV003",
                name: "Pepsi",
                type: "Nước uống",
                cost: "9.000",
                sale: "22.000",
                stock: "40",
              },
              {
                id: "INV004",
                name: "Bánh mì kẹp",
                type: "Đồ ăn nhanh",
                cost: "15.000",
                sale: "35.000",
                stock: "20",
              },
              {
                id: "INV001",
                name: "Sting",
                type: "Nước uống",
                cost: "8.000",
                sale: "20.000",
                stock: "30",
              },
              {
                id: "INV002",
                name: "Coca-Cola",
                type: "Nước uống",
                cost: "10.000",
                sale: "25.000",
                stock: "50",
              },
              {
                id: "INV003",
                name: "Pepsi",
                type: "Nước uống",
                cost: "9.000",
                sale: "22.000",
                stock: "40",
              },
              {
                id: "INV004",
                name: "Bánh mì kẹp",
                type: "Đồ ăn nhanh",
                cost: "15.000",
                sale: "35.000",
                stock: "20",
              },
              {
                id: "INV001",
                name: "Sting",
                type: "Nước uống",
                cost: "8.000",
                sale: "20.000",
                stock: "30",
              },
              {
                id: "INV002",
                name: "Coca-Cola",
                type: "Nước uống",
                cost: "10.000",
                sale: "25.000",
                stock: "50",
              },
              {
                id: "INV003",
                name: "Pepsi",
                type: "Nước uống",
                cost: "9.000",
                sale: "22.000",
                stock: "40",
              },
              {
                id: "INV004",
                name: "Bánh mì kẹp",
                type: "Đồ ăn nhanh",
                cost: "15.000",
                sale: "35.000",
                stock: "20",
              },
              {
                id: "INV001",
                name: "Sting",
                type: "Nước uống",
                cost: "8.000",
                sale: "20.000",
                stock: "30",
              },
              {
                id: "INV002",
                name: "Coca-Cola",
                type: "Nước uống",
                cost: "10.000",
                sale: "25.000",
                stock: "50",
              },
              {
                id: "INV003",
                name: "Pepsi",
                type: "Nước uống",
                cost: "9.000",
                sale: "22.000",
                stock: "40",
              },
              {
                id: "INV004",
                name: "Bánh mì kẹp",
                type: "Đồ ăn nhanh",
                cost: "15.000",
                sale: "35.000",
                stock: "20",
              },
              {
                id: "INV001",
                name: "Sting",
                type: "Nước uống",
                cost: "8.000",
                sale: "20.000",
                stock: "30",
              },
              {
                id: "INV002",
                name: "Coca-Cola",
                type: "Nước uống",
                cost: "10.000",
                sale: "25.000",
                stock: "50",
              },
              {
                id: "INV003",
                name: "Pepsi",
                type: "Nước uống",
                cost: "9.000",
                sale: "22.000",
                stock: "40",
              },
              {
                id: "INV004",
                name: "Bánh mì kẹp",
                type: "Đồ ăn nhanh",
                cost: "15.000",
                sale: "35.000",
                stock: "20",
              },
              // Add more rows as needed
            ].map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="py-2 px-4">{item.id}</TableCell>
                <TableCell className="py-2 px-4">{item.name}</TableCell>
                <TableCell className="py-2 px-4">{item.type}</TableCell>
                <TableCell className="py-2 px-4">{item.cost}</TableCell>
                <TableCell className="py-2 px-4">{item.sale}</TableCell>
                <TableCell className="py-2 px-4">{item.stock}</TableCell>
                <TableCell>
                  <DialogDemo triggerLabel="Edit" />{" "}
                  {/* DialogDemo with custom trigger label */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Pagination className="mt-6 justify-start">
          <PaginationContent className="flex items-center justify-start space-x-2">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
