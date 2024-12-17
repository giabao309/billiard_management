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

export function DialogTable({ triggerLabel = "Edit" }) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline">{triggerLabel}</Button>
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

                <div className="grid gap-4 py-4">
                    {/* STT Field */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="stt" className="text-gray-700 font-medium">
                            STT
                        </Label>
                        <Input
                            id="stt"
                            placeholder="Nhập STT"
                            className="border rounded-md p-2"
                        />
                    </div>

                    {/* Tên Phòng/Bàn Field */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="tenPhongBan" className="text-gray-700 font-medium">
                            Tên Phòng/Bàn
                        </Label>
                        <Input
                            id="tenPhongBan"
                            placeholder="Nhập tên Phòng/Bàn"
                            className="border rounded-md p-2"
                        />
                    </div>

                    {/* Khu vực Field */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="khuVuc" className="text-gray-700 font-medium">
                            Khu vực
                        </Label>
                        <Select>
                            <SelectTrigger className="border rounded-md p-2 w-full">
                                <SelectValue placeholder="Chọn khu vực" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Khu vực</SelectLabel>
                                    <SelectItem value="khuA">Khu A</SelectItem>
                                    <SelectItem value="khuB">Khu B</SelectItem>
                                    <SelectItem value="khuC">Khu C</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Trạng thái Field */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="trangThai" className="text-gray-700 font-medium">
                            Trạng thái
                        </Label>
                        <Select>
                            <SelectTrigger className="border rounded-md p-2 w-full">
                                <SelectValue placeholder="Chọn trạng thái" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Trạng thái</SelectLabel>
                                    <SelectItem value="dangSuDung">Đang sử dụng</SelectItem>
                                    <SelectItem value="sanSang">Sẵn sàng</SelectItem>
                                    <SelectItem value="baoTri">Đang bảo trì</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Dialog Footer */}
                <DialogFooter className="pt-4">
                    <Button
                        type="submit"
                        className="bg-blue-600 text-white rounded-lg px-4 py-2"
                    >
                        Lưu thay đổi
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
