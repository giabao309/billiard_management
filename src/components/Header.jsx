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
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#5181F5] text-white">
      <div className="flex items-center gap-16">
        <a href="/" className="flex items-center cursor-pointer">
          <img src={Logo} alt="Logo" className="h-10 mr-3" />
          <span className="font-bold text-lg">Billiard Center</span>
        </a>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex gap-x-4">
              <NavigationMenuLink href="/booking">Đặt bàn</NavigationMenuLink>
              <NavigationMenuLink
                className="cursor-pointer"
                onClick={scrollToBottom}
              >
                Hệ thống chi nhánh
              </NavigationMenuLink>
              <NavigationMenuLink
                className="cursor-pointer"
                onClick={() => handleScroll("section")}
              >
                Bảng Giá
              </NavigationMenuLink>
              <NavigationMenuLink
                className="cursor-pointer"
                onClick={() => handleScroll("section1")}
              >
                Chất lượng
              </NavigationMenuLink>
              <NavigationMenuLink
                className="cursor-pointer"
                onClick={scrollToBottom}
              >
                Thông tin về chúng tôi
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Login />
    </header>
  );
}
