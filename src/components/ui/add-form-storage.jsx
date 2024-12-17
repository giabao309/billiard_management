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

export default function AddStorage({ onClose }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
            {/* Header */}
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">
                Thêm Sản Phẩm
            </h3>

            {/* Form */}
            <form className="space-y-5">
                {/* Mã */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="maSanPham"
                        className="text-sm font-medium text-gray-600"
                    >
                        Mã
                    </label>
                    <Input
                        id="maSanPham"
                        placeholder="Nhập mã sản phẩm"
                        className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Tên */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="tenSanPham"
                        className="text-sm font-medium text-gray-600"
                    >
                        Tên
                    </label>
                    <Input
                        id="tenSanPham"
                        placeholder="Nhập tên sản phẩm"
                        className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Loại thực đơn */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="loaiThucDon"
                        className="text-sm font-medium text-gray-600"
                    >
                        Loại thực đơn
                    </label>
                    <Select>
                        <SelectTrigger className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200">
                            <SelectValue placeholder="Chọn loại thực đơn" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="food">Đồ ăn</SelectItem>
                            <SelectItem value="drink">Thức uống</SelectItem>
                            <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Giá vốn */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="giaVon"
                        className="text-sm font-medium text-gray-600"
                    >
                        Giá vốn
                    </label>
                    <Input
                        id="giaVon"
                        placeholder="Nhập giá vốn"
                        className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Giá bán */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="giaBan"
                        className="text-sm font-medium text-gray-600"
                    >
                        Giá bán
                    </label>
                    <Input
                        id="giaBan"
                        placeholder="Nhập giá bán"
                        className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Tồn kho */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="tonKho"
                        className="text-sm font-medium text-gray-600"
                    >
                        Tồn kho
                    </label>
                    <Input
                        id="tonKho"
                        placeholder="Nhập số lượng tồn kho"
                        className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
                    />
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
