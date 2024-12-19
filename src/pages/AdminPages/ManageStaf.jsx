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
import { Search, File, Plus, X } from "lucide-react";
import { DialogDemo } from "@/components/Dialog";
import { useGetEmployees } from "@/APIs/UserApi";
import AddFormCustomer from "@/components/ui/add-form-customer";

export default function ManageStaf() {
  const { employees } = useGetEmployees();

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full flex p-4">
      <div className="w-full">
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-4">
          <div className="flex gap-x-16 justify-center items-center">
            <h2 className="font-bold text-2xl text-black">Nhân Viên</h2>

            <div className="relative w-[30rem]">
              <Input
                placeholder="Theo Email / tên"
                className="rounded-lg pl-10"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className=" flex space-x-4">
            <Button
              className="bg-green-500 text-white rounded-lg px-4 flex items-center space-x-2"
              onClick={() => setShowForm(true)}
            >
              <Plus className="w-5 h-5" />
              <span>Thêm mới</span>
            </Button>
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
              <AddFormCustomer />
            </div>
          </div>
        )}

        {/* Table */}
        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-700">
              {[
                "ID Người dùng",
                "ID Nhân viên",
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
      </div>
    </div>
  );
}
