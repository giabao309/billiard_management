import React, { useState, useEffect } from "react";

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
import { DialogDemo } from "@/components/Dialog";
import { useGetEmployees } from "@/APIs/UserApi";
import { useGetDistrict, useGetAddress } from "@/APIs/BilliardApi";

export default function ManageStaf() {
  const { employees } = useGetEmployees();
  const { district } = useGetDistrict();
  const { address } = useGetAddress();
  const role = localStorage.getItem("userRole");
  const userID = localStorage.getItem("userID");

  return (
    <div className="w-full flex p-4">
      {/* Sidebar with filters */}
      <div className="w-[20%] flex flex-col space-y-6 mr-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Tìm kiếm</h3>
          <div className="relative">
            <Input
              placeholder="Theo Email / tên"
              className="rounded-lg pl-10"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <div className="w-full">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Chon khu vưc" />
              </SelectTrigger>
              <SelectContent>
                {district.map((dis, districtIndex) => (
                  <SelectGroup key={districtIndex}>
                    <SelectLabel>Quận {dis.district}</SelectLabel>
                    {address
                      .filter((addr) => addr.district === dis.district)
                      .map((addr, addrIndex) => (
                        <SelectItem key={addrIndex} value={addr.address}>
                          * {addr.address}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Main content with table and actions */}
      <div className="w-[80%]">
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-4">
          <h2 className="font-bold text-2xl text-black">Nhân Viên</h2>
          <div className=" flex space-x-4">
            <Button className="bg-green-500 text-white rounded-lg px-4 flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Thêm mới</span>
            </Button>
          </div>
        </div>
        <div>
          <span>id: {userID}</span>
          <span>role: {role}</span>
        </div>
        {/* Table */}
        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-700">
              {[
                "ID",
                "Gmail",
                "Tên",
                "SĐT",
                "Chi nhánh",
                "Ca làm viêc",
                "Luơng",
                "",
              ].map((header, index) => (
                <TableHead key={index} className="font-semibold py-2 px-4">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow className="hover:bg-gray-50">
                <TableCell className="py-2 px-4">NV00{employee.id}</TableCell>
                <TableCell className="py-2 px-4">{employee.email}</TableCell>
                <TableCell className="py-2 px-4">{employee.name}</TableCell>
                <TableCell className="py-2 px-4">{employee.phone}</TableCell>
                <TableCell className="py-2 px-4">{employee.branch}</TableCell>
                <TableCell className="py-2 px-4">{employee.shift}</TableCell>
                <TableCell className="py-2 px-4">
                  {employee.salary.toLocaleString()}
                </TableCell>
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
