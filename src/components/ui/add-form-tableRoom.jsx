import React from "react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function AddRoomTableForm({ onClose }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
            {/* Header */}
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">
                Thêm Phòng/Bàn
            </h3>

            {/* Form */}
            <form className="space-y-5">
                {/* Tên Phòng/Bàn */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="tenPhongBan"
                        className="text-sm font-medium text-gray-600"
                    >
                        Tên Phòng/Bàn
                    </label>
                    <Input
                        id="tenPhongBan"
                        placeholder="Nhập tên Phòng/Bàn"
                        className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Khu vực */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="khuVuc"
                        className="text-sm font-medium text-gray-600"
                    >
                        Khu vực
                    </label>
                    <Select>
                        <SelectTrigger className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200">
                            <SelectValue placeholder="Chọn khu vực" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="khuA">Khu vực A</SelectItem>
                            <SelectItem value="khuB">Khu vực B</SelectItem>
                            <SelectItem value="khuC">Khu vực C</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Trạng thái */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="trangThai"
                        className="text-sm font-medium text-gray-600"
                    >
                        Trạng thái
                    </label>
                    <Select>
                        <SelectTrigger className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200">
                            <SelectValue placeholder="Chọn trạng thái" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="available">Sẵn sàng</SelectItem>
                            <SelectItem value="in-use">Đang sử dụng</SelectItem>
                            <SelectItem value="maintenance">Bảo trì</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                    <Button
                        type="button"
                        variant="outline"
                        className="border-gray-300 hover:bg-gray-100"
                        onClick={onClose}
                    >
                        Hủy
                    </Button>
                    <Button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                    >
                        Lưu
                    </Button>
                </div>
            </form>
        </div>
    );
}
