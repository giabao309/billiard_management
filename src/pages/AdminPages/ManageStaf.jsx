import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search, File, Plus, Import } from "lucide-react";
import { DialogDemo } from "@/components/Dialog";

export default function ManageStaf() {
  return (
    <div className="w-full flex p-4">
      {/* Sidebar with filters */}
      <div className="w-[20%] flex flex-col space-y-6 mr-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Tìm kiếm</h3>
          <div className="relative">
            <Input
              placeholder="Theo STT / Email"
              className="rounded-lg pl-10"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <div className="w-full">
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Chon khu vưc" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>QUẬN GÒ VẤP</SelectLabel>
                  <SelectItem value="est">
                    * 62 Dương Quảng Hàm - Billiards Center{" "}
                  </SelectItem>
                  <SelectItem value="cst">
                    * 48 Lê Lợi - Billiards Center{" "}
                  </SelectItem>
                  <SelectItem value="mst">
                    * 144 Nguyễn Văn Lượng - Billiards Center
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>QUẬN BÌNH THẠNH</SelectLabel>
                  <SelectItem value="gmt">
                    * 15 Võ Duy Ninh - Billiards Center
                  </SelectItem>
                  <SelectItem value="cet">
                    * 360 Lê Quang Định - Billiards Center
                  </SelectItem>
                  <SelectItem value="eet">
                    * 99 Nguyễn Hữu Cảnh - Billiards Center
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>QUẬN TÂN BÌNH</SelectLabel>
                  <SelectItem value="msk">
                    * 662 Âu Cơ - Billiards Center
                  </SelectItem>
                  <SelectItem value="ist">
                    * 72 Ba Vân - Billiards Center
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Tất CẢ CHI NHÁNH</SelectLabel>
                  <SelectItem value="ist">Tất cả</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Main content with table and actions */}
      <div className="w-[80%]">
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg shadow-sm mb-4">
          <h2 className="font-bold text-2xl text-black">Nhân Viên</h2>
          <div className=" flex space-x-4">
            <Button className="bg-green-500 text-white rounded-lg px-4 flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Thêm mới</span>
            </Button>

            <Button className="bg-yellow-500 text-white rounded-lg px-4 flex items-center space-x-2">
              <File className="w-5 h-5" />
              <span>Xoá</span>
            </Button>
          </div>
        </div>
        {/* Table */}
        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-100 text-gray-700">
              {[
                "STT",
                "Gmail",
                "Tên",
                "SĐT",
                "Chi nhánh",
                "Ca làm viêc",
                "Luơng",
                "",
              ].map((header, index) => (
                <TableHead key={index} className="font-semibold py-2 px-4">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                id: 1,
                gmail: "Phòng VIP 1@gmail.com",
                tên: "Khu A",
                sđt: "0977087981",
                chinhanh: "3",
                calamviec: "9h-12h",
                luong: 1,
                edit: "Edit",
              },
              {
                id: 1,
                gmail: "Phòng VIP 1@gmail.com",
                tên: "Khu A",
                sđt: "0977087981",
                chinhanh: "3",
                calamviec: "9h-12h",
                luong: 1,
                edit: "Edit",
              },
              {
                id: 1,
                gmail: "Phòng VIP 1@gmail.com",
                tên: "Khu A",
                sđt: "0977087981",
                chinhanh: "3",
                calamviec: "9h-12h",
                luong: 1,
                edit: "Edit",
              },
              {
                id: 1,
                gmail: "Phòng VIP 1@gmail.com",
                tên: "Khu A",
                sđt: "0977087981",
                chinhanh: "3",
                calamviec: "9h-12h",
                luong: 1,
                edit: "Edit",
              },
              {
                id: 1,
                gmail: "Phòng VIP 1@gmail.com",
                tên: "Khu A",
                sđt: "0977087981",
                chinhanh: "3",
                calamviec: "9h-12h",
                luong: 1,
                edit: "Edit",
              },
            ].map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="py-2 px-4">{item.id}</TableCell>
                <TableCell className="py-2 px-4">{item.gmail}</TableCell>
                <TableCell className="py-2 px-4">{item.tên}</TableCell>
                <TableCell className="py-2 px-4">{item.sđt}</TableCell>
                <TableCell className="py-2 px-4">{item.chinhanh}</TableCell>
                <TableCell className="py-2 px-4">{item.calamviec}</TableCell>
                <TableCell className="py-2 px-4">{item.luong}</TableCell>
                <TableCell>
                  <DialogDemo triggerLabel="Edit" />{" "}
                  {/* DialogDemo with custom trigger label */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Pagination className="mt-6 justify-start">
          <PaginationContent className="flex items-center justify-start space-x-2">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}