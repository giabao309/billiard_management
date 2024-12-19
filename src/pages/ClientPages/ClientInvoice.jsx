import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useGetViewInvoice } from "@/APIs/Manage";

export default function ClientInvoice() {
  const userID = localStorage.getItem("userID");
  const { invoice } = useGetViewInvoice(userID);

  if (!invoice) {
    return "ko co hoa don";
  }
  return (
    <div className="w-full h-screen flex p-4">
      <div className="w-full">
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-4">
          <div className="flex gap-x-16 justify-center items-center">
            <h2 className="font-bold text-2xl text-black">Xem hoá đơn</h2>
          </div>

          <div className=" flex space-x-4"></div>
        </div>

        {/* Table */}
        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-700">
              {[
                "ID hoá đơn",
                "Chi nhánh",
                "Nhân viên",
                "Bàn",
                "Ngày tạo",
                "Giảm giá",
                "Tổng hoá đơn",
              ].map((header, index) => (
                <TableHead key={index} className="font-semibold py-2 px-4">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoice.map((item, key) => (
              <TableRow className="hover:bg-gray-50">
                <TableCell className="py-2 px-4">{item.id}</TableCell>
                <TableCell className="py-2 px-4">{item.branch}</TableCell>
                <TableCell className="py-2 px-4">{item.username}</TableCell>
                <TableCell className="py-2 px-4">{item.table}</TableCell>
                <TableCell className="py-2 px-4">{item.createDate}</TableCell>
                <TableCell className="py-2 px-4">{item.promotion}</TableCell>
                <TableCell className="py-2 px-4">{item.totalCost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        {/* <Pagination className="mt-6">
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
        </Pagination> */}
      </div>
    </div>
  );
}
