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
import { useGetCustomerManage } from "@/APIs/Manage";
import { useSearchCustomerEdit } from "@/APIs/Manage";

export default function ManageStaf() {
  const { customer } = useGetCustomerManage();
  const [data, setData] = useState(customer);
  const [query, setQuery] = useState("");
  const { customerSearch } = useSearchCustomerEdit(query);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (customerSearch) {
      setData(customerSearch);
    }
  }, [customerSearch]);

  useEffect(() => {
    setData(customer);
  }, [customer]);

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
      <div className="w-full">
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-4">
          <div className="flex gap-x-16 justify-center items-center">
            <h2 className="font-bold text-2xl text-black">Khách hàng</h2>

            <div className="relative w-[30rem]">
              <Input
                type="text"
                placeholder="Theo Email / tên"
                className="rounded-lg pl-10"
                value={query}
                onChange={handleChange}
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Table */}
        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-700">
              {["ID", "Email", "Tên", "Số điện thoại", "Membership"].map(
                (header, index) => (
                  <TableHead key={index} className="font-semibold py-2 px-4">
                    {header}
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((customer) => (
              <TableRow key={customer.id} className="hover:bg-gray-50 h-[4rem]">
                <TableCell className="py-2 px-4">US00{customer.id}</TableCell>
                <TableCell className="py-2 px-4">{customer.email}</TableCell>
                <TableCell className="py-2 px-4">{customer.name}</TableCell>
                <TableCell className="py-2 px-4">{customer.phone}</TableCell>
                <TableCell className="py-2 px-4">
                  {customer.membership}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
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
            <PaginationItem className="cursor-pointer">
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
