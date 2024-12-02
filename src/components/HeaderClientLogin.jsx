import React from "react";
import Logo from "@/assets/logo.png";
import Anhdaidien from "@/assets/avatar.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { LogOut, UserRoundPen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetUserByID } from "@/APIs/UserApi";

export default function HeaderClientLogin() {
  const userID = localStorage.getItem("userID");
  const { user } = useGetUserByID(userID);

  const getUser = (user) => {
    if (!user) {
      return <p>Loading...</p>;
    }
    return <p>{user.name}</p>;
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#5181F5] text-white">
      <div className="flex items-center gap-16">
        <a href="#home" className="flex items-center cursor-pointer">
          <img src={Logo} alt="Logo" className="h-10 mr-3" />
          <span className="font-bold text-lg">Billiard Center</span>
        </a>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex gap-x-4">
              <NavigationMenuLink href="/booking">Đặt bàn</NavigationMenuLink>
              <NavigationMenuLink href="#branches">
                Hệ thống chi nhánh
              </NavigationMenuLink>
              <NavigationMenuLink href="">Bảng Giá</NavigationMenuLink>
              <NavigationMenuLink href="">
                Thông tin về chúng tôi
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-x-8">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={Anhdaidien} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{getUser(user)}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserRoundPen />
              <a href="/client/informations" className="cursor-pointer">Thông tin</a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              <a href="/" className="cursor-pointer">
                Đăng xuất
              </a>
              <DropdownMenuShortcut></DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
