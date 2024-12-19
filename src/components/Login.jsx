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
import React, { useState, useEffect } from "react";
import Register from "@/components/Register";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "@/APIs/UserApi";

export default function Login() {
  // State để lưu email, mật khẩu và lỗi đăng nhập
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // Gọi hàm handleLogin từ file tách riêng
    handleLogin(email, password, setError, setLoading, navigate);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="font-bold" variant="ghost">
          Đăng nhập
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Đăng Nhập</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Lưu email khi người dùng nhập
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Mật Khẩu
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Lưu mật khẩu khi người dùng nhập
              className="col-span-3"
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}{" "}
          {/* Hiển thị lỗi nếu có */}
        </div>
        <DialogFooter>
          <Register />
          <Button
            className="bg-[#5181F5]"
            onClick={onSubmit} // Gọi hàm đăng nhập khi nhấn nút
            disabled={loading} // Disable nút khi đang đăng nhập
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
