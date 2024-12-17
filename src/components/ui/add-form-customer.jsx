import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

export default function AddFormCustomer() {
    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Thêm Nhân Viên</h2>
            <form className="space-y-4">
                {/* ID */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                    <Input type="text" placeholder="Nhập ID" className="w-full" />
                </div>

                {/* Gmail */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gmail</label>
                    <Input type="email" placeholder="Nhập Gmail" className="w-full" />
                </div>

                {/* Tên */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên</label>
                    <Input type="text" placeholder="Nhập tên" className="w-full" />
                </div>

                {/* SĐT */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                    <Input type="text" placeholder="Nhập số điện thoại" className="w-full" />
                </div>

                {/* Chi nhánh */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chi nhánh</label>
                    <Select>
                        <SelectTrigger className="w-full">Chọn chi nhánh</SelectTrigger>
                        <SelectContent>
                            <SelectItem value="branch1">Chi nhánh 1</SelectItem>
                            <SelectItem value="branch2">Chi nhánh 2</SelectItem>
                            <SelectItem value="branch3">Chi nhánh 3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Ca làm việc */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ca làm việc</label>
                    <Select>
                        <SelectTrigger className="w-full">Chọn ca làm việc</SelectTrigger>
                        <SelectContent>
                            <SelectItem value="morning">Ca sáng</SelectItem>
                            <SelectItem value="afternoon">Ca chiều</SelectItem>
                            <SelectItem value="evening">Ca tối</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Lương */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lương</label>
                    <Input type="text" placeholder="Nhập lương" className="w-full" />
                </div>

                {/* Button */}
                <div className="flex justify-end">
                    <Button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Thêm Nhân Viên
                    </Button>
                </div>
            </form>
        </div>
    );
}
