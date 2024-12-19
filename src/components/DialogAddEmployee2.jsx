import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import { ManageContext } from "@/Context/ManageContext";
import { Search, File, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

export default function AddEmployee({ selectedEmployee }) {
  const { branch, shifts, addEmployee } = useContext(ManageContext);

  const [formData, setFormData] = useState({
    user_id: selectedEmployee?.user_id || "",
    employee_id: selectedEmployee?.employee_id || "",
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
    console.log("Dữ liệu form employee id:", formData.user_id);
    console.log("Dữ liệu form:", formData.branch);
    console.log("Dữ liệu form:", formData.shift);
    console.log("Dữ liệu form:", formData.salary);
    addEmployee(
      formData.branch,
      formData.shift,
      formData.salary,
      formData.user_id
    );
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" className="bg-green-500 text-white">
          <Plus className="w-5 h-5" />
          <span>Thêm</span>
        </Button>
      </DialogTrigger>
      {selectedEmployee ? (
        <DialogContent className="sm:max-w-[500px] rounded-lg shadow-lg border border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Thêm {selectedEmployee.name}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Email: {selectedEmployee.email}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Branch Field with Select */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="branch" className="text-gray-700 font-medium">
                Chi nhánh
              </Label>
              <Select
                onValueChange={(value) => handleSelectChange("branch", value)}
              >
                <SelectTrigger className="border rounded-md p-2 w-full">
                  <SelectValue placeholder="" />
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
                  <SelectValue placeholder="" />
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

          <DialogFooter className="pt-4">
            <DialogClose>
              <Button
                type="submit"
                className="bg-blue-600 text-white rounded-lg px-4 py-2"
                onClick={handleSave}
              >
                Thêm
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      ) : (
        ""
      )}
    </Dialog>
  );
}
