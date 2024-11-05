import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export default function Login(onLogin) {
  const [role, setRole] = useState("customer"); // Mặc định là khách hàng

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(role); // Gọi hàm onLogin từ ClientLayout
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-bold" variant="ghost">
          Đăng nhập
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <h2>Login</h2>
        <label>
          Chọn vai trò:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="customer">Khách hàng</option>
            <option value="employee">Nhân viên</option>
          </select>
        </label>
        <button type="submit">Đăng nhập</button>
        {/* <DialogHeader>
          <DialogTitle>Đăng nhập</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input id="password" type="password" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg-[#5181F5] text-white hover:text-black"
            variant="secondary"
          >
            Đăng nhập
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
