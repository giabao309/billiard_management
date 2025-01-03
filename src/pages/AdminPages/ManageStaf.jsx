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
import { DialogDemo } from "@/components/Dialog";
import { useGetEmployees } from "@/APIs/UserApi";
import AddEmployee from "@/components/DialogAddEmployee1";
import { useSearchEmployee } from "@/APIs/Manage";

export default function ManageStaf() {
  const { employees } = useGetEmployees();
  const [emplo, setEmplo] = useState(employees);
  const [query, setQuery] = useState("");
  const { employeeManage } = useSearchEmployee(query);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (employeeManage) {
      setEmplo(employeeManage);
    }
  }, [employeeManage]);

  useEffect(() => {
    setEmplo(employees);
  }, [employees]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(emplo.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = emplo.slice(startIndex, startIndex + itemsPerPage);

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
            <h2 className="font-bold text-2xl text-black">Nhân Viên</h2>

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

          <div className=" flex space-x-4">
            <AddEmployee />
          </div>
        </div>

        {/* Table */}
        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-700">
              {[
                "ID Người dùng",
                "ID Nhân viên",
                "Email",
                "Tên",
                "Số điện thoại",
                "Chi nhánh",
                "Ca làm việc",
                "Lương",
                "",
              ].map((header, index) => (
                <TableHead key={index} className="font-semibold py-2 px-4">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((employee) => (
              <TableRow key={employee.employee_id} className="hover:bg-gray-50">
                <TableCell className="py-2 px-4">
                  US00{employee.user_id}
                </TableCell>
                <TableCell className="py-2 px-4">
                  NV00{employee.employee_id}
                </TableCell>
                <TableCell className="py-2 px-4">{employee.email}</TableCell>
                <TableCell className="py-2 px-4">{employee.name}</TableCell>
                <TableCell className="py-2 px-4">{employee.phone}</TableCell>
                <TableCell className="py-2 px-4">{employee.branch}</TableCell>
                <TableCell className="py-2 px-4">{employee.shift}</TableCell>
                <TableCell className="py-2 px-4">
                  {employee.salary.toLocaleString()}
                </TableCell>
                <TableCell>
                  <DialogDemo selectedEmployee={employee} />
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
