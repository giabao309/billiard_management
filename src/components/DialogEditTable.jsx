import React, { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ManageContext } from "@/Context/ManageContext";

export function DialogTable({ selectedTable }) {
  const { floors, status, types, updateTableManage } =
    useContext(ManageContext);

  // State để quản lý giá trị của các trường
  const [formData, setFormData] = useState({
    id: selectedTable?.id || "",
    name: selectedTable?.name || "",
    floor: selectedTable?.floor_id || "",
    type: selectedTable?.type_id || "",
    status: selectedTable?.status_id || "",
    price: selectedTable?.price || "",
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

  // Hàm xử lý khi bấm "Lưu thay đổi"
  const handleSave = () => {
    console.log("Dữ liệu form:", formData.name);
    console.log("Dữ liệu form:", formData.floor);
    console.log("Dữ liệu form:", formData.type);
    console.log("Dữ liệu form:", formData.status);
    console.log("Dữ liệu form:", formData.price);
    console.log("Dữ liệu form:", formData.id);
    updateTableManage(
      formData.name,
      formData.floor,
      formData.type,
      formData.status,
      formData.price,
      formData.id
    );
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-lg shadow-lg border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Cập nhật Phòng/Bàn
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Cập nhật thông tin chi tiết của Phòng hoặc Bàn.
          </DialogDescription>
        </DialogHeader>

        {selectedTable ? (
          <div className="grid gap-4 py-4">
            {/* STT Field */}
            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">STT</Label>
              <Input
                placeholder="Nhập STT"
                className="border rounded-md p-2"
                value={formData.id}
                readOnly
              />
            </div>

            {/* Tên Phòng/Bàn Field */}
            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">Tên Bàn</Label>
              <Input
                name="name"
                placeholder="Nhập tên Bàn"
                className="border rounded-md p-2"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Khu vực Field */}
            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">Khu vực</Label>
              <Select
                onValueChange={(value) => handleSelectChange("floor", value)}
              >
                <SelectTrigger className="border rounded-md p-2 w-full">
                  <SelectValue placeholder={formData.floor} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Khu vực</SelectLabel>
                    {floors.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">Loại bàn</Label>
              <Select
                onValueChange={(value) => handleSelectChange("type", value)}
              >
                <SelectTrigger className="border rounded-md p-2 w-full">
                  <SelectValue placeholder={formData.type} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Loại bàn</SelectLabel>
                    {types.map((item, key) => (
                      <SelectItem value={item.id}>{item.name}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Trạng thái Field */}
            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">Trạng thái</Label>
              <Select
                onValueChange={(value) => handleSelectChange("status", value)}
              >
                <SelectTrigger className="border rounded-md p-2 w-full">
                  <SelectValue placeholder={formData.status} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Trạng thái</SelectLabel>
                    {status.map((item, key) => (
                      <SelectItem value={item.id}>{item.name}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">Giá</Label>
              <Input
                name="price"
                placeholder="Nhập Giá"
                className="border rounded-md p-2"
                value={formData.price.toLocaleString()}
                onChange={handleInputChange}
              />
            </div>
          </div>
        ) : (
          "Không có dữ liệu để hiển thị."
        )}

        {/* Dialog Footer */}
        <DialogFooter className="pt-4">
          <Button
            type="button"
            className="bg-blue-600 text-white rounded-lg px-4 py-2"
            onClick={handleSave}
          >
            Lưu thay đổi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
