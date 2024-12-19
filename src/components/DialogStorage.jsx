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

export function DialogStorage() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">Chỉnh sửa thông tin</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-lg shadow-lg border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Chỉnh sửa thông tin sản phẩm
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Cập nhật thông tin sản phẩm tại đây. Nhấn lưu khi hoàn tất.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Mã */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="id" className="text-gray-700 font-medium">
              Mã
            </Label>
            <Input
              id="id"
              placeholder="Nhập mã sản phẩm"
              className="border rounded-md p-2"
            />
          </div>

          {/* Tên */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Tên
            </Label>
            <Input
              id="name"
              placeholder="Nhập tên sản phẩm"
              className="border rounded-md p-2"
            />
          </div>

          {/* Loại thực đơn */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="menuType" className="text-gray-700 font-medium">
              Loại thực đơn
            </Label>
            <Select>
              <SelectTrigger className="border rounded-md p-2 w-full">
                <SelectValue placeholder="Chọn loại thực đơn" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="food">Đồ ăn</SelectItem>
                  <SelectItem value="drink">Thức uống</SelectItem>
                  <SelectItem value="other">Khác</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Giá vốn */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="costPrice" className="text-gray-700 font-medium">
              Giá vốn
            </Label>
            <Input
              id="costPrice"
              placeholder="Nhập giá vốn"
              className="border rounded-md p-2"
            />
          </div>

          {/* Giá bán */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="salePrice" className="text-gray-700 font-medium">
              Giá bán
            </Label>
            <Input
              id="salePrice"
              placeholder="Nhập giá bán"
              className="border rounded-md p-2"
            />
          </div>

          {/* Tồn kho */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="stock" className="text-gray-700 font-medium">
              Tồn kho
            </Label>
            <Input
              id="stock"
              placeholder="Nhập số lượng tồn kho"
              className="border rounded-md p-2"
            />
          </div>
        </div>

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
