import React from "react";
import { Button } from "@/components/ui/button";

export default function FormAddStorage() {
    return (
        <div className="max-w-lg mx-auto bg-white shadow-2xl rounded-xl p-8 relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
                Thêm Dữ Liệu Mới
            </h2>
            <form className="space-y-6">
                {/* Mã */}
                <div className="flex flex-col">
                    <label htmlFor="code" className="text-sm font-medium text-gray-700">
                        Mã sản phẩm <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="code"
                        className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nhập mã sản phẩm"
                    />
                </div>
                {/* Tên */}
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Tên sản phẩm <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nhập tên sản phẩm"
                    />
                </div>
                {/* Loại thực đơn */}
                <div className="flex flex-col">
                    <label
                        htmlFor="menuType"
                        className="text-sm font-medium text-gray-700"
                    >
                        Loại thực đơn <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="menuType"
                        className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Chọn loại thực đơn</option>
                        <option value="Đồ uống">Đồ uống</option>
                        <option value="Món ăn">Món ăn</option>
                        <option value="Tráng miệng">Tráng miệng</option>
                    </select>
                </div>
                {/* Giá vốn */}
                <div className="flex flex-col">
                    <label
                        htmlFor="costPrice"
                        className="text-sm font-medium text-gray-700"
                    >
                        Giá vốn <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        id="costPrice"
                        className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nhập giá vốn"
                    />
                </div>
                {/* Giá bán */}
                <div className="flex flex-col">
                    <label
                        htmlFor="sellPrice"
                        className="text-sm font-medium text-gray-700"
                    >
                        Giá bán <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        id="sellPrice"
                        className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nhập giá bán"
                    />
                </div>
                {/* Tồn kho */}
                <div className="flex flex-col">
                    <label htmlFor="stock" className="text-sm font-medium text-gray-700">
                        Tồn kho <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        id="stock"
                        className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nhập số lượng tồn kho"
                    />
                </div>
                {/* Nút Submit */}
                <div className="text-center mt-4">
                    <Button
                        type="submit"
                        className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 shadow-lg font-bold"
                    >
                        Lưu
                    </Button>
                </div>
            </form>
        </div>
    );
}
