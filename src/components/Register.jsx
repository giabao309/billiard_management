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
import { handleRegister } from "@/APIs/UserApi";

export default function Register() {
  // State quản lý các trường nhập liệu
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_name, setUserName] = useState("");
  const [numberphone, setNumberphone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Hàm đăng ký
  const onSubmit = (e) => {
    e.preventDefault();
    handleRegister(
      email,
      user_name,
      numberphone,
      password,
      setError,
      setLoading,
      setSuccess
    );
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
                id="user_name"
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
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
                value={numberphone}
                onChange={(e) => setNumberphone(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          {success && <p className="text-green-500 text-center">{success}</p>}

          <DialogFooter>
            <Button
              type="submit"
              className="bg-[#5181F5]"
              onClick={onSubmit}
              disabled={loading}
            >
              {loading ? "Đang đăng ký..." : "Đăng ký"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
