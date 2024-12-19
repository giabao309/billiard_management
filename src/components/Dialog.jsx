import React, { useContext, useState } from "react";
import { ManageContext } from "@/Context/ManageContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo({ selectedEmployee }) {
  const { branch, shifts, updateEmployeeManage } = useContext(ManageContext);

  const [formData, setFormData] = useState({
    user_id: selectedEmployee?.user_id || "",
    employee_id: selectedEmployee?.employee_id || "",
    email: selectedEmployee?.email || "",
    name: selectedEmployee?.name || "",
    phone: selectedEmployee?.phone || "",
    branch: selectedEmployee?.branch_id || "",
    shift: selectedEmployee?.shift_id || "",
    salary: selectedEmployee?.salary || "",
  });

  // Hàm xử lý thay đổi giá trị input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hàm xử lý thay đổi giá trị select
  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Dữ liệu form employee id:", formData.employee_id);
    console.log("Dữ liệu form:", formData.branch);
    console.log("Dữ liệu form:", formData.shift);
    console.log("Dữ liệu form:", formData.salary);
    updateEmployeeManage(
      formData.branch,
      formData.shift,
      formData.salary,
      formData.employee_id
    );
  };

  return (
    <Dialog className="p-8">
      <DialogTrigger>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-lg shadow-lg border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Chỉnh sửa thông tin
          </DialogTitle>
        </DialogHeader>

        {selectedEmployee ? (
          <div className="grid gap-4 py-4">
            {/* Gmail Field */}
            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">Gmail</Label>
              <Input
                id="email"
                name="email" // Thêm name để xác định trường cần cập nhật
                className="border rounded-md p-2"
                value={formData.email}
                readOnly
              />
            </div>

            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">Tên</Label>
              <Input
                id="name"
                name="name" // Thêm name
                className="border rounded-md p-2"
                value={formData.name}
                readOnly
              />
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">SĐT</Label>
              <Input
                id="phone"
                name="phone" // Thêm name
                className="border rounded-md p-2"
                value={formData.phone}
                readOnly
              />
            </div>

            {/* Branch Field with Select */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="branch" className="text-gray-700 font-medium">
                Chi nhánh
              </Label>
              <Select
                onValueChange={(value) => handleSelectChange("branch", value)}
              >
                <SelectTrigger className="border rounded-md p-2 w-full">
                  <SelectValue placeholder="Chon ca làm viêc" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Chi nhánh</SelectLabel>
                    {branch.map((item, key) => (
                      <SelectItem value={item.id}>{item.name}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Work Shift Field with Select */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="workShift" className="text-gray-700 font-medium">
                Ca làm việc
              </Label>
              <Select
                onValueChange={(value) => handleSelectChange("shift", value)}
              >
                <SelectTrigger className="border rounded-md p-2 w-full">
                  <SelectValue placeholder="Chon Chi Nhánh" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Ca làm việc</SelectLabel>
                    {shifts.map((item, key) => (
                      <SelectItem value={item.id}>{item.name}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Salary Field */}
            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">Lương</Label>
              <Input
                id="salary"
                name="salary" // Thêm name
                className="border rounded-md p-2"
                value={formData.salary.toLocaleString()}
                onChange={handleInputChange}
              />
            </div>
          </div>
        ) : (
          ""
        )}

        <DialogFooter className="pt-4">
          <DialogClose>
            <Button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-4 py-2"
              onClick={handleSave}
            >
              Lưu thay đổi
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
