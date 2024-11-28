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
import React, { useState } from "react";
import axios from "axios"; // Đảm bảo bạn đã cài axios

export default function Register() {
  // State quản lý các trường nhập liệu
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Hàm đăng ký
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset lỗi trước khi gửi

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/dangky",
        {
          email,
          password,
          fullName,
          phoneNumber,
        }
      );

      console.log("Đăng ký thành công", response.data);

      // Có thể điều hướng đến trang đăng nhập hoặc trang khác
      // window.location.href = "/login"; // Hoặc sử dụng React Router như navigate("/login")
    } catch (err) {
      console.error("Lỗi đăng ký", err);
      setError("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="font-bold" variant="ghost">
          Đăng ký
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Đăng ký thành viên</DialogTitle>
          <DialogDescription>
            Đăng ký để trở thành hội viên của Billiards Center, để có thêm nhiều
            ưu đãi.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleRegister}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Mật khẩu
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullName" className="text-right">
                Họ và tên
              </Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phoneNumber" className="text-right">
                Số điện thoại
              </Label>
              <Input
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <DialogFooter>
            <Button type="submit" className="bg-[#5181F5]" disabled={loading}>
              {loading ? "Đang đăng ký..." : "Đăng ký"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
