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

import { useGetEmployeeByID } from "@/APIs/UserApi";

export default function HeaderEmployee() {
  const userID = localStorage.getItem("userID");
  const { employee } = useGetEmployeeByID(userID);

  const getEmployee = (employee) => {
    if (!employee) {
      return <p>Loading...</p>;
    }
    localStorage.setItem("branchName", employee.branch);
    localStorage.setItem("branchID", employee.branch_id);
    localStorage.setItem("employeeID", employee.employee_id);
    return <p>{employee.name}</p>;
  };

  const pathname = window.location.pathname;

  const menuItems = [
    { title: "Thu Ngân", href: "/employee/cashier" },
    { title: "Thông tin cá nhân", href: "/employee/information" },
  ];
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#5181F5] text-white">
      <div className="flex items-center gap-x-16">
        <a href="#home" className="flex items-center cursor-pointer">
          <img src={Logo} alt="Logo" className="h-10 mr-3" />
          <span className="font-bold text-lg">Billiard Center</span>
        </a>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex gap-x-4">
              {menuItems.map((item) => (
                <NavigationMenuLink
                  href={item.href}
                  className={`${pathname === item.href ? "underline" : ""}`}
                >
                  {item.title}
                </NavigationMenuLink>
              ))}
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
            <DropdownMenuLabel>{getEmployee(employee)}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserRoundPen />
              <span>Thông tin</span>
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
