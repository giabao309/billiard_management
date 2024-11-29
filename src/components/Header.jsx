import React from "react";
import Logo from "@/assets/logo.png";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Login from "@/components/Login";

export default function Header() {
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
              <NavigationMenuLink href="#booking">Đặt bàn</NavigationMenuLink>
              <NavigationMenuLink href="#branches">
                Hệ thống chi nhánh
              </NavigationMenuLink>
              <NavigationMenuLink href="">Tuyển dụng</NavigationMenuLink>
              <NavigationMenuLink href="">Tin tức</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Login />
    </header>
  );
}
