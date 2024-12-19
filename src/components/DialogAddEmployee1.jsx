import React, { useContext, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, File, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DialogAdd2 from "@/components/DialogAddEmployee2";
import { ManageContext } from "@/Context/ManageContext";
import { useSearchCustomer } from "@/APIs/Manage";

export default function AddEmployee() {
  const { customers } = useContext(ManageContext);

  const [cus, setCus] = useState(customers);

  useEffect(() => {
    setCus(customers);
  }, [customers]);

  const [query, setQuery] = useState("");
  const { customerManage } = useSearchCustomer(query);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (customerManage) {
      setCus(customerManage);
    }
  }, [customerManage]);

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" className="bg-green-500 text-white">
          <Plus className="w-5 h-5" />
          <span>Thêm Mới</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[60rem] rounded-lg shadow-lg border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Thêm Nhân viên
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Thêm nhân viên mới
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <Input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Nhập Email hoặc SĐT"
            className="rounded-lg pl-10"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <div className="h-[30rem] flex-wrap overflow-auto">
          <Table className="bg-white rounded-lg shadow-sm">
            <TableHeader>
              <TableRow className="bg-blue-100 text-gray-700">
                {["ID", "Gmail", "Tên", "SĐT", ""].map((header, index) => (
                  <TableHead key={index} className="font-semibold py-2 px-4">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {cus.map((item) => (
                <TableRow key={item.employee_id} className="hover:bg-gray-50">
                  <TableCell className="py-2 px-4">
                    US00{item.user_id}
                  </TableCell>
                  <TableCell className="py-2 px-4">{item.email}</TableCell>
                  <TableCell className="py-2 px-4">{item.name}</TableCell>
                  <TableCell className="py-2 px-4">{item.phone}</TableCell>
                  <TableCell>
                    <DialogAdd2 selectedEmployee={item} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
